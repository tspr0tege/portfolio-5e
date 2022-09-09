import React from 'react';
import './Index.css';

export default () => {
  
  function handleClick(e) {
    console.log(e.target.textContent)
  }

  return  (
    <ul>
      <li onClick={handleClick}>Home</li>
      <li onClick={handleClick}>Personal</li>
      <li onClick={handleClick}>Professional</li>
    </ul>
  )
}
