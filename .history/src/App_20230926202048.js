import { Outlet } from 'react-router-dom';
import './App.css';
import Header from './components/Header';
import Menubar from './components/Menubar';
import { useContext } from 'react';
import { tokenContext } from './context/tokenContext';

function App() {
  const token = useContext(tokenContext);
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
