import { findNotesByText, findNotes } from '../../services/notes';

const ACTIONS = {
  RELOAD: 'RELOAD',
};

const reloadNotes = (dispatch) => async (userId, archived, text) => {
  let notes = {};
  if (text) {
    notes = await findNotesByText(text, userId, archived);
  } else {
    notes = await findNotes(userId, archived);
  }

  dispatch({
    type: ACTIONS.RELOAD,
    payload: { notes },
  });
};
export { ACTIONS, reloadNotes };
