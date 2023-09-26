import React, { createContext, useState } from 'react';

export const GetTokenContext = createContext('');
export default function TokenContextProvider({ children }) {
  const [token, setToken] = useState('');

  return (
    <GetTokenContext.Provider value={token}>
      {children}
    </GetTokenContext.Provider>
  );
}
