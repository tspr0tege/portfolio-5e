import React from 'react';
import './Index.css';

import SuperNav from './superNav';
import SubNav from './subNav';

export default () => (
  <header>
    <div className="character-name">
      <h1>Character Name</h1>
    </div>
      <SuperNav />
      <SubNav />
    <div className="character-attributes">
      
      
    </div>
  </header>
)