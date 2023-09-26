import React, { Children, createContext } from 'react';

export const TokenContext = createContext();

export default function TokenContextProvider({ children }) {
  return <TokenContext.Provider>{children}</TokenContext.Provider>;
}
