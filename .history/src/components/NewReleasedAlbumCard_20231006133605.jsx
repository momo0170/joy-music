import React from 'react';

export default function NewReleasedAlbumCard({ images, artists, name }) {
  return (
    <>
      <img src={images[2].url} />
      <div>앨범 이름 : {name}</div>
      <div>
        <div>아티스트</div>
        {artists &&
          artists.map((item, idx) => <div key={idx}>{item.name}</div>)}
      </div>
    </>
  );
}
