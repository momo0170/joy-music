import React, { useContext } from 'react';
import { GetTokenContext } from '../context/GetTokenContext';

export default function Home() {
  const access_token = useContext(GetTokenContext);
  console.log(access_token);
  return <div>홈입니다.</div>;
}
