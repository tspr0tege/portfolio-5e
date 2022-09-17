import React, { useState } from 'react';
import './App.css';
import './Header.css';

import SuperNav from './navigation/SuperNav';
import SubNav from './navigation/SubNav';
import Home from './pages/Home';

export default () => {

  const [ subnavNames, setSubnavNames ] = useState({});

  function getSubnav({ names, functions }) {
    if (JSON.stringify(names) !== JSON.stringify(subnavNames.names)) {
      setSubnavNames({ names, functions });
    }
  }
  
  return (
    <>
      <header>
        <img src="https://i.ibb.co/vsSSfp1/header.png" alt="Leonhart Tech logo image" />

        <div id="nav-bar">
          <SuperNav />
          <SubNav names={subnavNames} />
        </div>
      </header>

      <Home sendNames={getSubnav} />
    </>
  )
}
