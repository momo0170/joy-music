import React, { useEffect } from 'react';
import axios from 'axios';

export default function Home() {
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
      .then((res) => console.log(res))
      .catch((result) => console.log(result));
  }, []);
  return <div>홈입니다.</div>;
}
