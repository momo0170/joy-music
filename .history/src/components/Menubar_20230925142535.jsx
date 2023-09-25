import React from 'react';
import MenuButton from './Menubutton';

export default function MenuBar() {
  const list = [
    ['/', '홈'],
    ['/playlist', '플레이리스트'],
  ];
  return <aside>{list.map((item, idx) => <MenuButton key={idx})}</aside>;
}
