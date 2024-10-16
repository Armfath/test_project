import React, { createContext, useContext, useState, ReactNode } from 'react';

interface AppContextProps {
  successMessage: string;
  setSuccessMessage: (message: string) => void;
}

const AppContext = createContext<AppContextProps | undefined>(undefined);

export const AppContextProvider = ({ children }: { children: ReactNode }) => {
  const [successMessage, setSuccessMessage] = useState('');

  return (
    <AppContext.Provider value={{ successMessage, setSuccessMessage }}>
      {children}
    </AppContext.Provider>
  );
};

export const useAppContext = () => {
  const context = useContext(AppContext);
  if (!context) {
    throw new Error('useAppContext must be used within a AppContextProvider');
  }
  return context;
};
