import React from 'react';
import Note from '../Note/Note';
import { Container } from './NotesWrapper.styles';

const NotesWrapper = ({ notes }) => {
  const parseNotes = () => {
    const res = [];
    for (let id in notes) {
      res.push(<Note note={notes[id]} key={id} id={id} />);
    }
    return res;
  };

  return <Container>{parseNotes()}</Container>;
};

export default NotesWrapper;
