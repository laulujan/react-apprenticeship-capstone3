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
      <Content>
        Very large note content just to see how it looks on the display wswsws
        wawawawa other thing else
      </Content>
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
