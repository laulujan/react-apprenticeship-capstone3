import React, { useState, useEffect } from 'react';
import CreateNote from '../../components/CreateNote/CreateNote';
import NotesWrapper from '../../components/NotesWrapper/NotesWrapper';
import { findNotes } from '../../services/notes';
import { useAuth } from '../../Provider/Auth/Provider';

const Notes = () => {
  const [notes, setNotes] = useState({});
  const { user } = useAuth();

  useEffect(async () => {
    if (user) {
      setNotes(await findNotes(user.uid, false));
    }
  }, [user]);

  const reloadNotes = async () => {
    setNotes(await findNotes(user.uid, false));
  };
  return (
    <div>
      <CreateNote reloadNotes={reloadNotes} />
      <NotesWrapper notes={notes} reloadNotes={reloadNotes} />
    </div>
  );
};

export default Notes;
