import { render, waitFor, act } from '@testing-library/react';
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
  });
  waitFor(() => expect(location.pathname).toBe('/login'));
});
