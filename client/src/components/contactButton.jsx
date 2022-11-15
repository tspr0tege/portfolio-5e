import React from 'react';
import { OverlayTrigger, Tooltip } from 'react-bootstrap';

import Email from '@app/icons/email.svg'

export default ({ openContactForm }) => {

  return  (   
      <OverlayTrigger
        placement='bottom'
        overlay={
          <Tooltip id='tootltip-bottom'>
            <p>Contact Me</p>
          </Tooltip>
        }
      >
        <button id='contact-me-btn' className='nav-btn' onClick={openContactForm}>
          <Email/>  
        </button>        
      </OverlayTrigger>
  )
}
