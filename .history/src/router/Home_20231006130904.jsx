import React, { useContext, useEffect, useState } from 'react';
import { GetTokenContext } from '../context/GetTokenContext';
import axios from 'axios';

export default function Home() {
  const access_token = useContext(GetTokenContext);
  const [albums, setAlbums] = useState({});
  console.log(access_token);
  console.log(albums);
  useEffect(() => {
    access_token &&
      axios({
        method: 'get',
        url: `https://api.spotify.com/v1/browse/new-releases?limit=10`,
        headers: {
          Authorization: 'Bearer ' + access_token,
        },
      }).then((res) => setAlbums(res.data.albums.items));
  });
  return (
    <ul>
      <li></li>
    </ul>
  );
}
