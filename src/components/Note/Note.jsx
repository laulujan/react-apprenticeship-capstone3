import React from 'react';
import {
  MdOutlineEdit,
  MdOutlineDelete,
  MdOutlineArchive,
} from 'react-icons/md';
import { NoteBox, Content, Button, Wrapper } from './Note.styles';
const Note = () => {
  return (
    <NoteBox>
      <Content>note content</Content>
      <Wrapper>
        <Button>
          <MdOutlineEdit />
        </Button>
        <Button>
          <MdOutlineArchive />
        </Button>
        <Button>
          <MdOutlineDelete />
        </Button>
      </Wrapper>
    </NoteBox>
  );
};

export default Note;
