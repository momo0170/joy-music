import React, { createContext, useState } from 'react';

import axios from 'axios';

export const tokenContext = createContext('');

export default function tokenContext({ children }) {
  const [token, setToken] = useState('');
  const getToken = () => {
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
        console.log(res);
        localStorage.setItem('token', res.data.access_token);
      });
  };

  setInterval(getToken, 3000);
  return (
    <tokenContext.Provider value={token}>{children}</tokenContext.Provider>
  );
}
