import { render, screen, fireEvent, act } from '@testing-library/react';
import App from './App';

jest.mock('./services/firebase', () => {
  return {
    getAuth: () => () => {
      return { uid: 'one' };
    },
    validateLogin: () => {
      return () => {};
    },
    logInWithEmailAndPassword: (user, password) => {
      if (user == 'test@test.com' && password === 'password') {
        return { uid: 'test' };
      }

      throw Error('bad user');
    },
  };
});

describe('App', () => {
  test('Renders App with at login page', () => {
    render(<App />);
    expect(screen.getByLabelText('Email')).toBeInTheDocument();
    expect(location.pathname).toBe('/login');
  });

  test('Login fails', async () => {
    render(<App />);
    const email = screen.getByLabelText('Email');
    const password = screen.getByLabelText('Password');
    const btn = screen.getByText('Login');

    fireEvent.change(email, { target: { value: 'test@test.com' } });
    fireEvent.change(password, { target: { value: 'wrongpassword' } });
    await act(async () => {
      fireEvent.click(btn);
    });
    expect(location.pathname).toBe('/login');
    expect(screen.getByText('Login')).toBeInTheDocument();
  });
});

describe('other', () => {
  test('Redirect to notes on login', async () => {
    render(<App />);
    const email = screen.getByLabelText('Email');
    const password = screen.getByLabelText('Password');
    const btn = screen.getByText('Login');

    fireEvent.change(email, { target: { value: 'test@test.com' } });
    fireEvent.change(password, { target: { value: 'password' } });
    await act(async () => {
      fireEvent.click(btn);
    });
    expect(location.pathname).toBe('/notes');
    expect(screen.getByText('Log out')).toBeInTheDocument();
  });
});
