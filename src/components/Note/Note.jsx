import React, { useState } from 'react';
import {
  MdOutlineEdit,
  MdOutlineDelete,
  MdOutlineArchive,
} from 'react-icons/md';
import { NoteBox, Content, Button, Wrapper } from './Note.styles';
import { deleteNote, updateNote } from '../../services/notes';
import ModalContainer from '../Modal/Modal';
import { useAuth } from '../../Provider/Auth/Provider';

const Note = ({ note, id, reloadNotes }) => {
  const { user } = useAuth();
  const [open, setOpen] = useState(false);

  const onDeleteNote = () => {
    deleteNote(id, user.uid);
    reloadNotes();
  };

  const onArchiveNote = () => {
    updateNote(id, note.text, note.color, user.uid, true);
    reloadNotes();
  };
  return (
    <NoteBox>
      <Content>{note.text}</Content>
      <Wrapper>
        <Button
          onClick={() => {
            setOpen(true);
          }}
        >
          <MdOutlineEdit />
        </Button>
        {open && (
          <ModalContainer
            setOpen={setOpen}
            note={note}
            id={id}
            reloadNotes={reloadNotes}
          />
        )}
        <Button onClick={onArchiveNote}>
          <MdOutlineArchive />
        </Button>
        <Button onClick={onDeleteNote}>
          <MdOutlineDelete />
        </Button>
      </Wrapper>
    </NoteBox>
  );
};

export default Note;
