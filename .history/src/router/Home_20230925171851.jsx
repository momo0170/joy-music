import React, { useEffect } from 'react';
import axios from 'axios';

export default function Home() {
  useEffect(() => {
    // axios({
    //   method: 'POST',
    //   url: 'https://accounts.spotify.com/api/token',
    //   headers: {
    //     'Content-Type': 'application/x-www-form-urlencoded',
    //   },
    //   data: {
    //     grant_type: 'client_credentials',
    //     client_id: process.env.REACT_APP_CLIENT_ID,
    //     client_secret: process.env.REACT_APP_CLIENT_SECRET,
    //   },
    // }) //
    //   .then((res) => console.log(res))
    //   .catch((result) => console.log(result));
    axios({
      method: 'POST',
      url: 'https://accounts.spotify.com/api/token',
      headers: {
        'Content-Type': 'application/x-www-form-urlencoded',
      },
      data: {
        grant_type: 'client_credentials',
        client_id: '3222a7fad760466c817058a926032a27',
        client_secret: '6940a62822a0455ba0569c4dd1512123',
      },
    }) //
      .then((res) => {
        console.log(res.data.access_token);
      });
  }, []);
  return <div>홈입니다.</div>;
}
