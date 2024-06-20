
import React, { createContext } from 'react';
import mobileDeals from '../Data/mobile';

export const MobileDealsContext = createContext();

export const MobileDealsProvider = ({ children }) => {
  return (
    <MobileDealsContext.Provider value={mobileDeals}>
      {children}
    </MobileDealsContext.Provider>
  );
};
