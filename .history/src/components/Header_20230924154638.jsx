import React from 'react';
import { GiMusicSpell } from 'react-icons/gi';
import { AiOutlineSearch } from 'react-icons/ai';

export default function Header() {
  return (
    <header className="flex justify-between p-2 border-b h-13 items-center">
      <GiMusicSpell size="40" color="#7c3aed" className="hover:animate-spin" />
      <div className="text-violet-600 text-2xl ml-2 font-bold">Joy Music</div>
      <form>
        <input type="text" />
        <button>
          <AiOutlineSearch />
        </button>
      </form>
      <div>
        <button>로그인</button>
        <button>회원가입</button>
      </div>
    </header>
  );
}
