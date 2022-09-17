import React from 'react';

export default ({ names: { names, functions } }) => {

  function handleClick(e) {
    console.log(e.target.textContent)
  }

  return  (
    <div id="sub-nav">
      {names?.map((name, i) => {
        return (
          <button
            key={i}
            className='nav-btn'
            onClick={functions[i]}
          >
            {name}
          </button>
        )
      })}
    </div>
  )
}