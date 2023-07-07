import React, { useMemo } from 'react';
import userReducer from '../reducer/user.reducer';
import { getDataUserAPI } from '../service/user.service';

const { createContext, useContext, useReducer } = require('react');

const UserContext = createContext();
const initState = {
  users: null,
  error: null,
  isLoading: false,
};

export const UserProvider = ({ children }) => {
  const [state, dispatch] = useReducer(userReducer, initState);

  const getDataUsers = async () => {
    dispatch({ type: 'GET_USER_START' });
    try {
      const response = await getDataUserAPI();
      dispatch({ type: 'GET_USER_SUCCESS', payload: response.data });
    } catch (error) {
      console.log(error);
      dispatch({ type: 'GET_USER_FALSE', payload: error.response.data });
    }
  };

  const lockAndUnlockUser = async (user) => {

  };

  const value = useMemo(() => ({ ...state, getDataUsers }), [state]);

  return (
    <UserContext.Provider value={value}>
      {children}
    </UserContext.Provider>
  );
};

export const useUserContext = () => useContext(UserContext);
