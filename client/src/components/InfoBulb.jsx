import React from 'react';
import { OverlayTrigger, Popover } from 'react-bootstrap';

import './InfoBulb.css';

const infoOn = {
  additionalSkills: 
  <Popover id="popover-basic">
    <Popover.Header>
      Comfort rating is based on my best self-assessment of the following conditions, and ranked from most familiar(5) to least(1):
    </Popover.Header>
    <Popover.Body>
      <ul>
        <li>frequency of use</li>
        <li>depth of use/exploration</li>
        <li>intentional learning time</li>
        <li>ability to explain the tech to another person</li>
        <li>best guess at my proficiency percentage</li>
        <li>time since last use</li>
        <li>how frequently I expect to need help (person or docs)</li>
      </ul>
    </Popover.Body>
  </Popover>
};

export default ({ item, position }) => (
  <OverlayTrigger
    placement={position}
    overlay={infoOn[item]}
  >
    <b className='info-bulb'>i</b>
  </OverlayTrigger>
)
