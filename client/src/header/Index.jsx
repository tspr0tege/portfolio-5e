import React from 'react';
import './header.css';

import headerImg from '../images/header.png';
import SuperNav from './SuperNav';
import SubNav from './SubNav';

export default () => (
  <header>
    <img src={headerImg} alt='Leonhart Tech logo image' />

    <div className="nav-bar">
      <SuperNav />
      <SubNav />      
    </div>
  </header>
)