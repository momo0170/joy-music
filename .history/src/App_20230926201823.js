import { Outlet } from 'react-router-dom';
import './App.css';
import Header from './components/Header';
import Menubar from './components/Menubar';
import { useEffect, useState } from 'react';

function App() {
  const [token, setToken] = useState('');
  useEffect(() => {}, []);

  console.log(token);
  return (
    <>
      <Header />
      <div className="flex m-3">
        <Menubar />
        <Outlet />
      </div>
    </>
  );
}

export default App;
