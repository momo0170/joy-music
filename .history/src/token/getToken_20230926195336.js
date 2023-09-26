import axios from 'axios';

const getToken = () => {
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
    .then((res) => {
      console.log(res);
      localStorage.setItem('token', res.data.access_token);
    })
    .catch((result) => console.log(result));
};

setInterval(getToken, 3000);
