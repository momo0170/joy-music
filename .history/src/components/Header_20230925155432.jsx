import React, { useState } from 'react';
import { GiMusicSpell } from 'react-icons/gi';
import { AiOutlineSearch } from 'react-icons/ai';
import { Link } from 'react-router-dom';

export default function Header() {
  const [keyword, setKeyword] = useState('');
  console.log(keyword);
  return (
    <header className="flex justify-between p-2 border-b h-13 items-center">
      {/*  로고 */}
      <Link to="/" className="flex items-center">
        <GiMusicSpell
          size="40"
          color="#7c3aed"
          className="hover:animate-spin"
        />
        <div className="text-violet-600 text-2xl ml-2 font-bold">Joy Music</div>
      </Link>

      {/* 검색 */}
      <form className="flex transform translate-x-8">
        <input
          type="text"
          className="rounded-l-md border border-stone-400 p-1 px-2 focus:shadow-inner2 outline-none focus:border-violet-600 placeholder:text-sm hover:shadow-hoverInput hover:border-hoverInput w-80"
          value={keyword}
          onChange={(e) => setKeyword(e.target.value)}
        />
        <button className="bg-gray-200 p-1 rounded-r-md box-border hover:bg-gray-300">
          <AiOutlineSearch />
        </button>
      </form>

      {/* 버튼 */}
      <div className="flex">
        <button className="bg-gray-200 mx-2 px-4 py-1.5 rounded text-sm font-semibold hover:bg-gray-300">
          로그인
        </button>
        <button className="bg-violet-600 text-white mx-2 px-4 py-1.5 rounded text-sm font-semibold hover:bg-violet-700">
          회원가입
        </button>
      </div>
    </header>
  );
}
