import React from 'react';
import './header.css';

import SuperNav from './SuperNav';
import SubNav from './SubNav';

export default () => (
  <header>
    <img src="https://i.ibb.co/vsSSfp1/header.png" alt="Leonhart Tech logo image" />

    <div className="nav-bar">
      <SuperNav />
      <SubNav />      
    </div>
  </header>
)
