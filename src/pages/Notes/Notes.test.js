import {
  render,
  waitFor,
  act,
  screen,
  fireEvent,
} from '@testing-library/react';
import { MemoryRouter } from 'react-router-dom';
import Notes from './Notes';
import { mountAllProviders } from '../../services/MountComponent';

jest.mock('../../services/firebase', () => {
  return {
    getAuth: () => {
      return {};
    },
    validateLogin: () => {
      return () => {};
    },
    logInWithEmailAndPassword: async () => {
      //
    },
  };
});
jest.mock('../../services/notes', () => {
  return {
    createNote: () => {
      return {};
    },
    updateNote: () => {
      return {};
    },
  };
});

describe('<Notes />', () => {
  test('Redirects if user is not logged in', async () => {
    await act(async () =>
      render(
        <MemoryRouter>
          <Notes />
        </MemoryRouter>,
        mountAllProviders({}, { notes: {}, error: null })
      )
    );
    waitFor(() => expect(location.pathname).toBe('/login'));
  });
  test('Shows notes page if user is logged in with error when notes is empty', async () => {
    await act(async () =>
      render(
        <MemoryRouter>
          <Notes />
        </MemoryRouter>,
        mountAllProviders(
          { uid: 'test' },
          { notes: {}, error: 'There are no notes' }
        )
      )
    );
    waitFor(() => expect(location.pathname).toBe('/notes'));
  });
  test('Creates new note and display it', async () => {
    await act(async () =>
      render(
        <MemoryRouter>
          <Notes />
        </MemoryRouter>,
        mountAllProviders(
          { user: { uid: 'test' } },
          { notes: {}, error: 'There are no notes', reloadNotes: () => {} }
        )
      )
    );
    const text = screen.getByPlaceholderText('Take note...');
    fireEvent.change(text, { target: { value: 'new note' } });
    const btn = screen.getByText('Save');
    await act(async () => {
      fireEvent.click(btn);
    });

    waitFor(() => expect(screen.getByText('new note')).toBeInTheDocument());
  });
});
