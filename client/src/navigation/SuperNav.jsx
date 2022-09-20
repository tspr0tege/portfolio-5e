import React from 'react';
import { OverlayTrigger, Tooltip } from 'react-bootstrap';

import Email from '@app/icons/email.svg'

const names = ['Home', 'Personal', 'Professional'];
const svgProps = {
  stroke: '#999',
  strokeWidth: '2px',
  width: '2em',
  transform: 'translateX(4px)'
};

export default ({ openContactForm }) => {

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
      <OverlayTrigger
        placement='bottom'
        overlay={
          <Tooltip id='tootltip-bottom'>
            <p>Contact Me</p>
          </Tooltip>
        }
      >
        <button id='contact-me-btn' className='nav-btn' onClick={openContactForm}>
          <Email style={svgProps} />  
        </button>        
      </OverlayTrigger>
    </div>
  )
}
