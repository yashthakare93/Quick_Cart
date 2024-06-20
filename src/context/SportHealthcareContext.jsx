
import React, { createContext } from 'react';
import sport_healthcare from '../Data/sport_healthcare';

export const SportHealthcareContext = createContext();

export const SportHealthcareProvider = ({ children }) => {
  return (
    <SportHealthcareContext.Provider value={sport_healthcare}>
      {children}
    </SportHealthcareContext.Provider>
  );
};
