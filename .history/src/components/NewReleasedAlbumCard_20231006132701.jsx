import React from 'react';

export default function NewReleasedAlbumCard({ images, artists, name }) {
  return (
    <>
      <span>{images[0].url} </span>
      <span>{name}</span>
      <span>{artists && artists.map((item) => <span>{item.name}</span>)}</span>
    </>
  );
}
