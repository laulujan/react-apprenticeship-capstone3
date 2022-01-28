import {
  registerWithEmailAndPassword,
  logInWithEmailAndPassword,
  logout,
} from '../../services/firebase';

const ACTIONS = {
  LOGIN: 'LOGIN',
  LOGOUT: 'LOGOUT',
  LOGGED: 'LOGGED',
  ERROR: 'ERROR',
  REGISTER: 'REGISTER',
};

const loginUser = (dispatch) => async (username, password) => {
  dispatch({ type: ACTIONS.LOGIN });

  try {
    const user = await logInWithEmailAndPassword(username, password);

    dispatch({
      type: ACTIONS.LOGGED,
      payload: { user },
    });
    return user;
  } catch (error) {
    dispatch({
      type: ACTIONS.ERROR,
      payload: { error: error.message },
    });
    return null;
  }
};

const logoutUser = (dispatch) => () => {
  logout();
  dispatch({ type: ACTIONS.LOGOUT });
};

const registerUser = (dispatch) => async (username, password) => {
  dispatch({ type: ACTIONS.REGISTER });
  try {
    return await registerWithEmailAndPassword(username, password).then(
      (user) => {
        dispatch({
          type: ACTIONS.LOGGED,
          payload: { user },
        });
        return user;
      }
    );
  } catch (error) {
    dispatch({
      type: ACTIONS.ERROR,
      payload: { error: error.message },
    });
    return null;
  }
};

export { ACTIONS, loginUser, logoutUser, registerUser };
