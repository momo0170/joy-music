import React, { useContext, useEffect } from 'react';
import { GetTokenContext } from '../context/GetTokenContext';
import axios from 'axios';

export default function Home() {
  const access_token = useContext(GetTokenContext);
  console.log(access_token);
  useEffect(() => {
    access_token &&
      axios({
        method: 'get',
        url: `https://api.spotify.com/v1/tracks/11dFghVXANMlKmJXsNCbNl`,
        auth: 'Bearer ' + access_token,
      }).then((res) => console.log(res));
  });
  return <div>홈입니다.</div>;
}
