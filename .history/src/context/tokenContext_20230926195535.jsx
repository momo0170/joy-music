import React, { createContext } from 'react';

export const tokenContext = createContext('');

export default function tokenContext({ children }) {
  return <tokenContext.Provider>{children}</tokenContext.Provider>;
}
