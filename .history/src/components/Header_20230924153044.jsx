import React from 'react';

export default function Header() {
  return (
    <header>
      <div>Joy Music</div>
      <form>
        <input type="text" />
        <button>검색</button>
      </form>
      <div>
        <button>로그인</button>
        <button>회원가입</button>
      </div>
    </header>
  );
}
