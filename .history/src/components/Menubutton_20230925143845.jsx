import React from 'react';
import { Link } from 'react-router-dom';
import { HiHome, HiOutlineHome } from 'react-icons/hi';
import { IoIosListBox, IoIosList } from 'react-icons/io';

const SIZE = '25';
const COLOR = '#7C3AED';
export default function MenuButton({ text, path }) {
  return (
    <div>
      <Link to={path} className="flex px-5 py-2 rounded hover:bg-violet-100">
        {text === '홈' ? (
          <HiOutlineHome size={SIZE} color={COLOR} />
        ) : (
          <IoIosList size={SIZE} color={COLOR} />
        )}
        <span className="ml-4">{text}</span>
      </Link>
    </div>
  );
}
