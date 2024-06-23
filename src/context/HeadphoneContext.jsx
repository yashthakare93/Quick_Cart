
import React, { createContext } from 'react';
import headphone from '../Products/data/headphone';

export const HeadphoneDealsContext = createContext();

export const HeadphoneDealsProvider = ({ children }) => {
  return (
    <HeadphoneDealsContext.Provider value={headphone}>
      {children}
    </HeadphoneDealsContext.Provider>
  );
};
