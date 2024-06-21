
import React, { createContext } from 'react';
import data  from '../Data/data'

export const BestFashionDealsContext = createContext();

export const BestFashionDealsProvider = ({ children }) => {
  return (
    <BestFashionDealsContext.Provider value={data}>
      {children}
    </BestFashionDealsContext.Provider>
  );
};
