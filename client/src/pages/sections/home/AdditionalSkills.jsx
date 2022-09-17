import React, { useState } from 'react';
import { Badge } from 'react-bootstrap';

import { otherSkills } from '@app/../database';

import './AdditionalSkills.css';

export default () => {

  const [ skillLvlMin, setSkillLvlMin ] = useState(3);
  // const [ focusProject, setFocusProject ] = useState(0);

  function handleChange(e) {
    setSkillLvlMin(e.target.value);
  }

  return (
    <>
      {/* <Card.Body className="vertical-flex"> */}
      <p>Minimum Comfort Level: {skillLvlMin}</p>
      <datalist id="tickmarks">
        <option value="1">1</option>
        <option value="2">2</option>
        <option value="3">3</option>
        <option value="4">4</option>
        <option value="5">5</option>
      </datalist>
      <input type="range" id="level-range" name="level-range" min="1" max="5" step="1" value={skillLvlMin} onChange={handleChange} list="tickmarks" />
      <div className="other-skills-list">
          {otherSkills.map((skill, i) => {
            if(skill.level >= skillLvlMin) {
              return (
                <p key={i} style={{display: 'flex', gap: '10px', alignItems: 'center'}} >
                  <i className={'other-skill-icon ' + skill.icon} />
                  <span style={{flexGrow: '1'}}>{skill.name}</span>
                  <Badge pill style={{height: 'fit-content', fontSize: '.9rem'}} bg="secondary">{skill.level}</Badge>
                </p>
              )
            }
          })}
      </div>
    </>
  )
}
