import React from 'react';

export default function NewReleasedAlbumCard({ images, artists, name }) {
  return (
    <div className="w-48 m-4 p-3 bg-neutral-100 h-full">
      <img src={images[1].url} alt="album" className="w-84 m-1" />
      <div className="m-2">
        <div>{name}</div>
        <div>
          {artists &&
            artists.map((item, idx) =>
              idx === 0 ? (
                <span key={idx}>{`${item.name}`}</span>
              ) : (
                <span key={idx}>{`, ${item.name}`}</span>
              )
            )}
        </div>
      </div>
    </div>
  );
}
