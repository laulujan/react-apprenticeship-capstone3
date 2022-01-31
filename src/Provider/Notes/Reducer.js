import { ACTIONS } from './Actions';

export const initialState = {
  notes: {},
  error: false,
};

export function notesReducer(state, action) {
  const { type, payload = {} } = action;

  switch (type) {
    case ACTIONS.RELOAD:
      return { ...state, notes: payload.notes, error: payload.error };
    case ACTIONS.ERROR:
      return { ...state, error: payload.error, notes: payload.notes };
    default:
      throw new Error(`Invalid action "${type}"`);
  }
}
