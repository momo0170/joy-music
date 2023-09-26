import { Outlet } from 'react-router-dom';
import './App.css';
import Header from './components/Header';
import Menubar from './components/Menubar';
import { useEffect } from 'react';

function App() {
  useEffect(() => {});

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
