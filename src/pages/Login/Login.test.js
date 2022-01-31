import { render, screen, act, fireEvent } from '@testing-library/react';
import Login from './Login';
import { mountAllProviders } from '../../services/MountComponent';
import { MemoryRouter } from 'react-router-dom';

jest.mock('../../services/firebase', () => {
  return {
    getAuth: () => {
      return {
        uid: 'test1234',
      };
    },
    validateLogin: () => {
      return () => {};
    },
    logInWithEmailAndPassword: async () => {
      return {
        uid: 'other',
      };
    },
  };
});
describe('<Login />', () => {
  let authProps = {
    login: jest.fn(),
  };
  test('Renders login page', async () => {
    await act(async () => {
      render(
        <MemoryRouter>
          <Login />
        </MemoryRouter>,
        mountAllProviders(authProps)
      );
    });
    expect(screen.getByLabelText('Email')).toBeInTheDocument();
    expect(screen.getByLabelText('Password')).toBeInTheDocument();
    expect(screen.getByText('Login')).toBeInTheDocument();
  });
  test('Allows to write email and password', async () => {
    await act(async () => {
      render(
        <MemoryRouter>
          <Login />
        </MemoryRouter>,
        mountAllProviders(authProps)
      );
    });
    const email = screen.getByLabelText('Email');
    const password = screen.getByLabelText('Password');

    fireEvent.change(email, { target: { value: 'test' } });
    fireEvent.change(password, { target: { value: 'test' } });

    expect(screen.getByLabelText('Email').value).toMatch('test');
    expect(screen.getByLabelText('Password').value).toMatch('test');
  });
  test('Calls login function on click login', async () => {
    await act(async () => {
      render(
        <MemoryRouter>
          <Login />
        </MemoryRouter>,
        mountAllProviders(authProps)
      );
    });
    const email = screen.getByLabelText('Email');
    const password = screen.getByLabelText('Password');
    const btn = screen.getByText('Login');

    fireEvent.change(email, { target: { value: 'test' } });
    fireEvent.change(password, { target: { value: 'test' } });
    await act(async () => {
      fireEvent.click(btn);
    });
    screen.debug();
    expect(authProps.login).toHaveBeenCalled();
  });
});
