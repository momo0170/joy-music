import React, { createContext, useState } from 'react';

export const tokenContext = createContext('');

export default function tokenContext({ children }) {
  const [token, setToken] = useState('');
  return <tokenContext.Provider>{children}</tokenContext.Provider>;
}
