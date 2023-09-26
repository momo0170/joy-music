import React, { useEffect, useState } from 'react';
import axios from 'axios';

export default function Home() {
  const [token, setToken] = useState('');
  console.log(token);
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
      .then((res) => setToken(res.data.access_token))
      .catch((result) => console.log(result));
  }, []);
  return <div>홈입니다.</div>;
}
