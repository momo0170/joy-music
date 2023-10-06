import React from 'react';

export default function NewReleasedAlbumCard({ images, artists, name }) {
  return (
    <>
      <img src={images[2].url} />
      <div>{name}</div>
      <div>
        {artists &&
          artists.map((item) => (
            <>
              <div>{item.name}</div>
            </>
          ))}
      </div>
    </>
  );
}
