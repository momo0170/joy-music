import React from 'react';

export default function NewReleasedAlbumCard({ images, artists, name }) {
  return (
    <>
      <img src={images[1].url} alt="album" className="w-80" />
      <div>{name}</div>
      <div>
        <div>아티스트</div>
        {artists &&
          artists.map((item, idx) => <div key={idx}>{item.name}</div>)}
      </div>
    </>
  );
}
