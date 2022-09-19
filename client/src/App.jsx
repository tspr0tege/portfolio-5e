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
        <div id="header-banner">
          <div>
            <h1>Squall Leonhart</h1>
            <p>Developer Portfolio</p>
          </div>
        </div>
        <div id="nav-bar">
          <SuperNav />
          <SubNav names={subnavNames} />
        </div>
      </header>

      <Home sendNames={getSubnav} />

      <footer></footer>
    </>
  )
}
