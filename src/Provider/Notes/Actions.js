import { findNotesByText, findNotes } from '../../services/notes';

const ACTIONS = {
  RELOAD: 'RELOAD',
  ERROR: 'ERROR',
};

const reloadNotes = (dispatch) => async (userId, archived, text) => {
  let notes = {};
  try {
    if (text) {
      notes = await findNotesByText(text, userId, archived);

      if (Object.keys(notes).length == 0) {
        throw new Error('There are no match results. Try another search.');
      }
    } else {
      notes = await findNotes(userId, archived);

      if (Object.keys(notes).length == 0) {
        if (archived) {
          throw new Error('You dont have archived notes.');
        } else {
          throw new Error(
            'There are no notes; please create a new one using the creation note input.'
          );
        }
      }
    }

    dispatch({
      type: ACTIONS.RELOAD,
      payload: { notes, error: false },
    });
  } catch (error) {
    dispatch({
      type: ACTIONS.ERROR,
      payload: { error: error.message, notes: {} },
    });
    return null;
  }
};
export { ACTIONS, reloadNotes };
