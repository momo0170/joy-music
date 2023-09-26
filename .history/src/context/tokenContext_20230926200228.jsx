import React, { createContext, useState } from 'react';

export const tokenContext = createContext('');

export default function tokenContext({ children }) {
  const [token, setToken] = useState('');
  const getToken = () => {};

  setInterval(getToken, 3000);

  return (
    <tokenContext.Provider value={token}>{children}</tokenContext.Provider>
  );
}
