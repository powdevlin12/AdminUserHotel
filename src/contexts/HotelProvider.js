import React, { useMemo } from 'react';
import hotelReducer from '../reducer/hotel.reducer';
import { getDataHotelsAPI } from '../service/hotels.service';

const { createContext, useContext, useReducer } = require('react');

const HotelContext = createContext();
const initState = {
  hotels: null,
  error: null,
  isLoading: false,
};

export const HotelProvider = ({ children }) => {
  const [state, dispatch] = useReducer(hotelReducer, initState);

  const getDataHotels = async () => {
    try {
      dispatch({ type: 'GET_HOTEL_PENDING' });
      const response = await getDataHotelsAPI();
      dispatch({ type: 'GET_HOTEL_SUCCESS', payload: response.data });
    } catch (error) {
      console.log(error);
      dispatch({ type: 'GET_HOTEL_FALSE', payload: error.response.data });
    }
  };

  const value = useMemo(() => ({ ...state, getDataHotels }), [state]);

  return (
    <HotelContext.Provider value={value}>
      {children}
    </HotelContext.Provider>
  );
};

export const useHotelContext = () => useContext(HotelContext);
