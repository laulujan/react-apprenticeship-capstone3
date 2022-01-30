import { db } from './firebase';
import {
  ref,
  set,
  push,
  remove,
  get,
  query,
  orderByChild,
  equalTo,
} from 'firebase/database';

const createNote = (text, color, userId) => {
  const notesListRef = ref(db, 'users/' + userId + '/notes');
  const newNoteRef = push(notesListRef);
  set(newNoteRef, {
    text: text,
    color: color,
    isArchived: false,
  });
};

const updateNote = (id, text, color, userId, isArchived) => {
  set(ref(db, 'users/' + userId + '/notes/' + id), {
    text: text,
    color: color,
    isArchived: isArchived,
  });
};

const deleteNote = (id, userId) => {
  remove(ref(db, 'users/' + userId + '/notes/' + id));
};

const findNotesByText = async (text, userId, archived) => {
  const noteRef = query(
    ref(db, `users/${userId}/notes`),
    orderByChild('isArchived'),
    equalTo(archived)
  );

  return await get(noteRef).then((result) => {
    const res = {};

    const entities = result.val();

    for (let key in entities) {
      if (entities[key].text == text) {
        res[key] = entities[key];
      }
    }
    return res;
  });
};

const findNotes = async (userId, archived) => {
  const noteRef = query(
    ref(db, `users/${userId}/notes`),
    orderByChild('isArchived'),
    equalTo(archived)
  );

  return await get(noteRef).then((result) => {
    const resultset = result.val();
    if (!resultset) {
      return {};
    }

    return resultset;
  });
};
export { createNote, updateNote, deleteNote, findNotesByText, findNotes };
