import React from 'react';

export default function NewReleasedAlbumCard({ images, artists, name }) {
  return (
    <div className="w-52 m-4 p-3 bg-neutral-100">
      <img src={images[1].url} alt="album" />
      <div className="my-2">
        <div className="font-medium text-ellipsis overflow-hidden">{name}</div>
        <div>
          {artists &&
            artists.map((item, idx) => (
              <span key={idx} className="text-gray-500 text-sm">
                {idx === 0 ? `${item.name}` : `, ${item.name}`}
              </span>
            ))}
        </div>
      </div>
    </div>
  );
}
