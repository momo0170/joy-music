import React, { createContext, useEffect, useState } from 'react';
import axios from 'axios';

export const TokenContext = createContext('');

export default function TokenContextProvider({ children }) {
  const [token, setToken] = useState('');
  useEffect(() => {
    axios({
      method: 'POST',
      url: 'https://accounts.spotify.com/api/token',
      headers: {
        'Content-Type': 'application/x-www-form-urlencoded',
      },
      data: {
        grant_type: 'client_credentials',
        client_id: process.env.REACT_APP_CLIENT_ID,
        client_secret: process.env.REACT_APP_CLIENT_SECRET,
      },
    }) //
      .then((res) => {
        setToken(res.data.access_token);
      });
  }, []);

  return (
    <tokenContext.Provider value={token && token}>
      {children}
    </tokenContext.Provider>
  );
}
