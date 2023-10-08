import React from 'react';

export default function NewReleasedAlbumCard({ images, artists, name }) {
  return (
    <div className="w-56">
      <img src={images[1].url} alt="album" className="w-80" />
      <div>{name}</div>
      <div>
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
