import React from 'react';
import './App.css';

import Header from './header';
import Home from './pages/Home';

export default () => {
  
  return (
    // <h1>App is rendering</h1>
    <>
      {/* <header>
        <div className="character-name">
          <h1>Character Name</h1>
        </div>

        <div className="nav-bar">
          <p>Class & Level</p>
          <p>Background</p>
          <p>Player Name</p>
          <p>Race</p>
          <p>Alignment</p>
          <p>Experience Points</p>
        </div>
      </header> */}
      <Header />

      <Home />

      <header>
        <div className="character-name">
          <h1>Character Name</h1>
        </div>

        <div className="nav-bar">
          <p>Age</p>
          <p>Height</p>
          <p>Weight</p>
          <p>Eyes</p>
          <p>Skin</p>
          <p>Hair</p>
        </div>
      </header>

      <div className="content-grid">
        <div className="col-1">
          Appearance
          Backstory
        </div>
        <div className="col-2">
          Allies & Orgs
          Additional Features and Traits
          Teasure
          spans 2 columns
        </div>
        <div className="col-3">
          <iframe src="https://docs.google.com/forms/d/e/1FAIpQLSfX2N8crX7LsC_pazxJk35gUI6xBlUHyz2apKLxcLmkSrESCA/viewform?embedded=true" width="640" height="542" frameBorder="0" marginHeight="0" marginWidth="0">Loading…</iframe>
        </div>
      </div>

      <header>
        <div className="character-name">
          <h1>Spell Casting Class</h1>
        </div>

        <div className="nav-bar">
          <p>Spellcasting Ability</p>
          <p>Spell Save DC</p>
          <p>Spell Attack Bonus</p>
        </div>
      </header>

      <div className="content-grid">
        <div className="col-1">
          Big Ass List of Abilities
        </div>
        <div className="col-2">
          Big Ass List of Abilities
        </div>
        <div className="col-3">
          Big Ass List of Abilities
        </div>
      </div>
    </>
  )
}
