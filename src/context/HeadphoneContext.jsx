
import React, { createContext } from 'react';
import headphonesDeals from '../Data/headphone';

export const HeadphoneDealsContext = createContext();

export const HeadphoneDealsProvider = ({ children }) => {
  return (
    <HeadphoneDealsContext.Provider value={headphonesDeals}>
      {children}
    </HeadphoneDealsContext.Provider>
  );
};
