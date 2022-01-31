import { render, act, screen } from '@testing-library/react';
import { MemoryRouter } from 'react-router-dom';
import NotesWrapper from './NotesWrapper';
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
  };
});

describe('<Notes Wrapper />', () => {
  test('Render notes', async () => {
    await act(async () =>
      render(
        <MemoryRouter>
          <NotesWrapper
            notes={{ 12: { text: 'test', color: 'white', isArchived: false } }}
          />
        </MemoryRouter>,
        mountAllProviders({}, {})
      )
    );
    expect(screen.getByText('test')).toBeInTheDocument();
  });
  test('Render archived note when is archived', async () => {
    await act(async () =>
      render(
        <MemoryRouter>
          <NotesWrapper
            notes={{
              12: { text: 'archive', color: 'white', isArchived: true },
            }}
          />
        </MemoryRouter>,
        mountAllProviders({}, {})
      )
    );
    expect(screen.getByText('archive')).toBeInTheDocument();
  });
});
