import React from 'react';

const names = ['Home', 'Personal', 'Professional'];

export default ({ children }) => {

  function handleClick(e) {
    console.log(e.target.textContent)
  }

  return  (
    <div id="super-nav">
      {names.map((name, i) => {
        return (
          <button
            key={i}
            disabled
            className='nav-btn'
            onClick={handleClick}
          >
            <h5>{name}</h5>
          </button>
        )
      })}
      {children}
    </div>
  )
}
