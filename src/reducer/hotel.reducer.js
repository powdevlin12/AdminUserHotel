const hotelReducer = (state, action) => {
  switch (action.type) {
    case 'GET_HOTEL_START': {
      return { ...state, isLoading: true };
    }
    case 'GET_HOTEL_SUCCESS': {
      return { ...state, isLoading: false, hotels: action.payload.hotels };
    }
    case 'GET_HOTEL_FALSE': {
      return { ...state, isLoading: false, error: action.payload };
    }
    default: {
      return state;
    }
  }
};

export default hotelReducer;
