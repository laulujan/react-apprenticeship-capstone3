import React from 'react';
import Note from '../Note/Note';
import { Container } from './NotesWrapper.styles';

const NotesWrapper = () => {
  return (
    <Container>
      <Note />
      <Note />
      <Note />
      <Note />
      <Note />
      <Note />
      <Note />
      <Note />
    </Container>
  );
};

export default NotesWrapper;
