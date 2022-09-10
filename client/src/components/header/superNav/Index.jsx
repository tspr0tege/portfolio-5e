import React from 'react';
import './Index.css';

export default () => {

  function handleClick(e) {
    console.log(e.target.textContent)
  }

  return  (
    <ul>
      <li className="nav-btn" onClick={handleClick}>Home</li>
      <li className="nav-btn" onClick={handleClick}>Personal</li>
      <li className="nav-btn" onClick={handleClick}>Professional</li>
    </ul>
  )
}
