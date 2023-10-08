import React from 'react';

export default function NewReleasedAlbumCard({ images, artists, name }) {
  return (
    <div className="w-56">
      <img src={images[1].url} alt="album" className="w-80" />
      <div>{name}</div>
      <div>
        <div>아티스트</div>
        <div className="flex">
          {artists &&
            artists.map((item, idx) =>
              idx === artists.length - 1 ? (
                <div key={idx}>{`${item.name} `}</div>
              ) : (
                <div key={idx}>{`${item.name}, `}</div>
              )
            )}
        </div>
      </div>
    </div>
  );
}
