import React from 'react';

export default function Menubar() {
  const list = [
    ['/', '홈'],
    ['/playlist', '플레이리스트'],
  ];
  return (
    <aside>
      {list.map((item, idx) => (
        <Menubar key={idx} text={item[1] path={item[0]} } />
      ))}
    </aside>
  );
}
