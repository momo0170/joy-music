import React from 'react';

export default function NewReleasedAlbumCard(props) {
  const { images, artists, name } = props;
  return (
    <>
      <span>{images[0].url} </span>
      <span>{name}</span>
      <span>
        {artists.map((name) => (
          <span>{item.name}</span>
        ))}
      </span>
    </>
  );
}
