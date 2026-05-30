import React, { createContext, useContext, ReactNode } from 'react';

interface PrintContextType {
  isPrinting: boolean;
}

const PrintContext = createContext<PrintContextType>({ isPrinting: false });

export const usePrint = () => useContext(PrintContext);

export const PrintProvider: React.FC<{ isPrinting: boolean; children: ReactNode }> = ({ isPrinting, children }) => {
  return (
    <PrintContext.Provider value={{ isPrinting }}>
      {children}
    </PrintContext.Provider>
  );
};
