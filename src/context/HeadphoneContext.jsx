
import React, { createContext } from 'react';
import headphoneData from '../Products/ProductData/allData';

export const HeadphoneDealsContext = createContext();

export const HeadphoneDealsProvider = ({ children }) => {
  return (
    <HeadphoneDealsContext.Provider value={headphoneData}>
      {children}
    </HeadphoneDealsContext.Provider>
  );
};
