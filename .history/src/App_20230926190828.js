import { Outlet } from 'react-router-dom';
import './App.css';
import Header from './components/Header';
import Menubar from './components/Menubar';
import axios from 'axios';
import { useState, useEffect } from 'react';

function App() {
  const [token, setToken] = useState('');
  console.log(token);
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
      .then((res) => setToken(res.data.access_token))
      .catch((result) => console.log(result));
  }, []);

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
