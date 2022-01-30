import React, { useEffect } from 'react';
import NotesWrapper from '../../components/NotesWrapper/NotesWrapper';
import { useAuth } from '../../Provider/Auth/Provider';
import { useNotes } from '../../Provider/Notes/Provider';

const Archive = () => {
  const { user } = useAuth();
  const { notes, reloadNotes } = useNotes();

  useEffect(async () => {
    if (user) {
      reloadNotes(user.uid, true, false);
    }
  }, [user]);

  return <NotesWrapper notes={notes} />;
};

export default Archive;
