import React from 'react';

export default function MenuBar() {
  const list = [
    ['/', '홈'],
    ['/playlist', '플레이리스트'],
  ];
  return <aside>{list}</aside>;
}
