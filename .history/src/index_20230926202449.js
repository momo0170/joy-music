import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import { RouterProvider, createBrowserRouter } from 'react-router-dom';
import Home from './router/Home';
import Playlist from './router/Playlist';
import TokenContextProvider from './context/TokenContext';

const router = createBrowserRouter([
  {
    path: '/',
    element: <App />,
    children: [
      {
        index: true,
        element: <Home />,
      },
      {
        path: '/playlist',
        element: <Playlist />,
      },
    ],
  },
]);

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <TokenContextProvider>
    <RouterProvider router={router}>
      <App />
    </RouterProvider>
  </TokenContextProvider>
);
