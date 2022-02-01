import { ACTIONS } from './Actions';

export const initialState = {
  loading: false,
  user: null,
  error: false,
};

export function authReducer(state, action) {
  const { type, payload = {} } = action;

  switch (type) {
    case ACTIONS.LOGIN:
      return { ...state, loading: true, error: false };
    case ACTIONS.LOGGED:
      return { ...state, loading: false, user: payload.user };
    case ACTIONS.ERROR:
      return { ...state, loading: false, error: payload.error };
    case ACTIONS.LOGOUT:
      return { ...initialState };
    case ACTIONS.REGISTER:
      return { ...state, loading: true, error: false };
    default:
      throw new Error(`Invalid action "${type}"`);
  }
}
