import React from 'react';
import { AuthContext } from '../Provider/Auth/Context';
import { NotesContext } from '../Provider/Notes/Context';

function mountAllProviders(authProps = {}, notesProps = {}) {
  return {
    wrapper: ({ children }) => (
      <AuthContext.Provider value={authProps}>
        <NotesContext.Provider value={notesProps}>
          {children}
        </NotesContext.Provider>
      </AuthContext.Provider>
    ),
  };
}
export { mountAllProviders };
