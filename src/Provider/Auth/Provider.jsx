import React, { useContext, useReducer } from 'react';
import { loginUser, logoutUser, registerUser } from './Actions';
import { AuthContext } from './Context';
import { authReducer, initialState } from './Reducer';

function useAuth() {
  const context = useContext(AuthContext);

  if (!context) {
    throw new Error(`Can't use "useAuth" without an AuthProvider!`);
  }
  return context;
}

const AuthProvider = ({ children }) => {
  const [state, dispatch] = useReducer(authReducer, initialState);
  const value = {
    loading: state.loading,
    user: state.user,
    error: state.error,
    login: loginUser(dispatch),
    logout: logoutUser(dispatch),
    register: registerUser(dispatch),
    isLoggedIn: Boolean(state.user),
  };
  return <AuthContext.Provider value={value}>{children}</AuthContext.Provider>;
};
export { useAuth };
export default AuthProvider;
