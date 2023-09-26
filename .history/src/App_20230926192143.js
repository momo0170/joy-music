import { Outlet } from 'react-router-dom';
import './App.css';
import Header from './components/Header';
import Menubar from './components/Menubar';
import { token } from './token/getToken';
import { useEffect } from 'react';
import axios from 'axios';
function App() {
  useEffect(() => {
    axios({
      method: 'POST',
      url: 'https://accounts.spotify.com/api/token',
      headers: {
        'Content-Type': 'application/x-www-form-urlencoded',
      },
      data: {
        grant_type: 'client_credentials',
        client_id: process.env.REACT_APP_CLIENT_ID,
        client_secret: process.env.REACT_APP_CLIENT_SECRET,
      },
    }) //
      .then((res) => (token = res))
      .catch((result) => console.log(result));
  });
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
