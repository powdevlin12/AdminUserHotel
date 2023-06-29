const userReducer = (state, action) => {
  switch (action.type) {
    case 'GET_USER_START': {
      return { ...state, isLoading: true };
    }
    case 'GET_USER_SUCCESS': {
      return { ...state, isLoading: false, users: action.payload.users };
    }
    case 'GET_USER_FALSE': {
      return { ...state, isLoading: false, error: action.payload };
    }
    default: {
      return state;
    }
  }
};

export default userReducer;
