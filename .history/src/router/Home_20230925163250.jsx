import React, { useEffect } from 'react';

export default function Home() {
  useEffect(() => {
    axios({
      method: 'get',
      url: 'https://accounts.spotify.com/api/token',
      data: {
        grant_type: 'client_credentials',
        client_id: process.env.REACT_APP_CLIENT_ID
        client_secret: process.env.REACT_APP_CLIENT_SECRET
      }
    })

  })
  return <div>홈입니다.</div>;
}
