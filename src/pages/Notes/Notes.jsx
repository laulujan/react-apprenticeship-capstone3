import React from 'react';
import CreateNote from '../../components/CreateNote/CreateNote';
import NotesWrapper from '../../components/NotesWrapper/NotesWrapper';

const Notes = () => {
  return (
    <div>
      <CreateNote />
      <NotesWrapper />
    </div>
  );
};

export default Notes;
