import { Outlet } from 'react-router-dom';
import './App.css';
import Header from './components/Header';
import Menubar from './components/Menubar';
import { useContext, useEffect } from 'react';

function App() {
  const handleToken = () => {
    useContext(getToken);
  };

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
