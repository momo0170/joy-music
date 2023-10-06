import React from 'react';

export default function NewReleasedAlbumCard({ images, artists, name }) {
  return (
    <>
      <img src={images[2].url} />
      <div>{name}</div>
      <span>{artists && artists.map((item) => <span>{item.name}</span>)}</span>
    </>
  );
}
