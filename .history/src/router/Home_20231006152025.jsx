import React, { useContext, useEffect, useState } from 'react';
import { GetTokenContext } from '../context/GetTokenContext';
import axios from 'axios';
import NewReleasedAlbumCard from '../components/NewReleasedAlbumCard';
import { ScrollMenu } from 'react-horizontal-scrolling-menu';
import { LeftArrow, RightArrow } from '../Arrow';
import '../css/style.css';

export default function Home() {
  const access_token = useContext(GetTokenContext);
  const [newReleasedAlbums, setNewReleasedAlbums] = useState([]);
  console.log(access_token);
  console.log(newReleasedAlbums);

  useEffect(() => {
    access_token &&
      axios({
        method: 'get',
        url: `https://api.spotify.com/v1/browse/new-releases?limit=10`,
        headers: {
          Authorization: 'Bearer ' + access_token,
        },
      }).then((res) => setNewReleasedAlbums(res.data.albums.items));
  }, [access_token]);

  return (
    <ul>
      <ScrollMenu LeftArrow={LeftArrow} RightArrow={RightArrow}>
        {newReleasedAlbums.map((item) => (
          <NewReleasedAlbumCard
            id={item.id}
            images={item.images}
            artists={item.artists}
            name={item.name}
          />
        ))}
      </ScrollMenu>
    </ul>
  );
}
