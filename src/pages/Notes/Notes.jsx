import React, { useEffect } from 'react';
import CreateNote from '../../components/CreateNote/CreateNote';
import NotesWrapper from '../../components/NotesWrapper/NotesWrapper';
import { useAuth } from '../../Provider/Auth/Provider';
import { useNotes } from '../../Provider/Notes/Provider';

const Notes = () => {
  const { user } = useAuth();
  const { notes, reloadNotes } = useNotes({});

  useEffect(async () => {
    if (user) {
      reloadNotes(user.uid, false, false);
    }
  }, [user]);

  return (
    <div>
      <CreateNote />
      <NotesWrapper notes={notes} />
    </div>
  );
};

export default Notes;
