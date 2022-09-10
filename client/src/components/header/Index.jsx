import React from 'react';
import './Index.css';

import headerImg from '../../images/header.png';
import SuperNav from './superNav';
import SubNav from './subNav';

export default () => (
  <header>
    <img src={headerImg} alt='Leonhart Tech logo image' />

    <div className="nav-bar">
      <SuperNav />
      <SubNav />      
    </div>
  </header>
)