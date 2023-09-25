import React from 'react';
import { Link } from 'react-router-dom';

export default function Menubutton({ text, path }) {
  return (
    <div>
      <Link to={path}></Link>
    </div>
  );
}
