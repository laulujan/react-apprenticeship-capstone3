import React, { useContext, useReducer } from 'react';
import { reloadNotes } from './Actions';
import { NotesContext } from './Context';
import { notesReducer, initialState } from './Reducer';

function useNotes() {
  const context = useContext(NotesContext);

  if (!context) {
    throw new Error(`Can't use "useNotes" without an NotesProvider!`);
  }
  return context;
}

const NotesProvider = ({ children }) => {
  const [state, dispatch] = useReducer(notesReducer, initialState);
  const value = {
    notes: state.notes,
    reloadNotes: reloadNotes(dispatch),
  };
  return (
    <NotesContext.Provider value={value}>{children}</NotesContext.Provider>
  );
};
export { useNotes };
export default NotesProvider;
