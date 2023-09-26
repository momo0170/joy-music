import React, { createContext } from 'react';

export const GetTokenContext = createContext('');
export default function TokenContextProvider({ children }) {
  return <GetTokenContext.Provider>{children}</GetTokenContext.Provider>;
}
