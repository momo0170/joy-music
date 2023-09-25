import { Outlet } from 'react-router-dom';
import './App.css';
import Header from './components/Header';
import Menubar from './components/Menubar';

function App() {
  return (
    <>
      <Header />
      <div>
        <Menubar />
        <Outlet />
      </div>
    </>
  );
}

export default App;
