import { ACTIONS } from './Actions';

export const initialState = {
  notes: {},
};

export function notesReducer(state, action) {
  const { type, payload = {} } = action;

  switch (type) {
    case ACTIONS.RELOAD:
      return { ...state, notes: payload.notes };
    default:
      throw new Error(`Invalid action "${type}"`);
  }
}
