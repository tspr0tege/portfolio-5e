import React, { useState } from 'react';
import { Card, Badge, OverlayTrigger, Tooltip } from 'react-bootstrap';

import { coreCompetencies, otherSkills, projects } from '../../database';
// import './Index.css';

export default () => {

  const [ skillLvlMin, setSkillLvlMin ] = useState(3);
  const [ focusProject, setFocusProject ] = useState(0);

  function changeSkillMin(e) {
    setSkillLvlMin(e.target.value);
  }

  const project = projects[0];

  return (
    <div className="content-grid">
      <div className="col-1">
        <div className="core-skills-list">
          {coreCompetencies.map((skill, i) => {
            return (
              <OverlayTrigger 
                key={i}
                placement='right'
                overlay={
                  <Tooltip id='tooltip-right'>
                    <h5>{skill.name}</h5>
                    <p>Level: {skill.level}</p>
                  </Tooltip>
                }
              >
                <Card className="text-center">
                  <Card.Body>
                    <Card.Text>
                      <i className={skill.icon + ' core-skill-icon'} />
                    </Card.Text>
                    <Badge pill bg="secondary" className="skill-pill">
                      {`- ${skill.level} -`}
                    </Badge>
                  </Card.Body>
                </Card>
              </OverlayTrigger>
            )
          })}
        </div>
        <div className="other-skills-list">
          <Card style={{width: 'fit-content'}}>
            <Card.Header>
              <Card.Title>Additional Skills</Card.Title>
            </Card.Header>
            <Card.Body>
              <p>Slider</p>
              <input type="range" id="level-range" name="level-range" min="1" max="5" step="1" value={skillLvlMin} onChange={changeSkillMin} list="tickmarks" />
              <datalist id="tickmarks">
                <option value="1">1</option>
                <option value="2">2</option>
                <option value="3">3</option>
                <option value="4">4</option>
                <option value="5">5</option>
              </datalist>
              <Card style={{maxHeight: '600px', overflow: 'auto'}}>
                <Card.Body>
                  {otherSkills.map((skill, i) => {
                    if(skill.level >= skillLvlMin) {
                      return (
                        <p key={i} style={{display: 'flex'}} >
                          <i className={skill.icon} />
                          <span style={{flexGrow: '1'}}>{skill.name}</span>
                          <Badge pill bg="secondary">{skill.level}</Badge>
                        </p>
                      )
                    }
                  })}
                </Card.Body>
              </Card>
            </Card.Body>
          </Card>
        </div>
        <div className="skills-summary">
        </div>
      </div>
      <div className="col-2"> 
        <Card>
          <Card.Header>
            <Card.Title>Projects</Card.Title>
          </Card.Header>
          <Card.Body>
            <div className="project-select">
              {projects.map((p, i) => {
                if (p.thumbnail === null) {
                  return (
                    <div 
                      key={i}
                      className={'project-thumbnail' + ((focusProject === i) ? ' highlight-aqua' : '')}
                      onClick={() => { setFocusProject(i) }}
                    >
                      <p>no thumbnail available</p>
                    </div>
                  )
                } else {
                  return (
                    <img 
                      key={i} 
                      src={p.thumbnail} 
                      alt={`${p.thumbnail} thumbnail.`} 
                      className={'project-thumbnail' + ((focusProject === i) ? ' highlight-aqua' : '')}
                      onClick={() => { setFocusProject(i) }}
                    />
                  )
                }
              })}
            </div>
            <h4>{projects[focusProject].name}</h4>
            <p>{projects[focusProject].type} project</p>
            <p>{projects[focusProject].story}</p>
              <Card.Footer className="project-select">
                {Object.keys(projects[focusProject].links).map((p, i) => {
                  return (
                    <a key={i} href={projects[focusProject].links[p]}>{p}</a>
                  )
                })}
              </Card.Footer>
            </Card.Body>
        </Card>
        <Card>
          <Card.Header>
            <Card.Title>Experience</Card.Title>
          </Card.Header>
          <Card.Body>
            <p>Andromeda 360</p>
            <p>Leonhart Tech</p>
            <p>Programming Instructor</p>
            <p>Networking Support (tier 2)</p>
          </Card.Body>
        </Card>
        <Card>
          <Card.Header>
            <Card.Title>Education</Card.Title>
          </Card.Header>
          <Card.Body>
            <p>Hack Reactor</p>
          </Card.Body>
        </Card>
      </div>
      <div className="col-3">
        <Card>
          <Card.Header>
            <Card.Title>Profiles</Card.Title>
          </Card.Header>
          <Card.Body>
            <p>codepen</p>
            <p>Linkedin</p>
            <p>github</p>
            <p>codewars</p>
            <p>medium</p>
          </Card.Body>
        </Card>
        <Card>
          <Card.Header>
            <Card.Title>About</Card.Title>
          </Card.Header>
          <Card.Body>
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Totam magni sint laudantium quod voluptate quae. Sunt provident illo atque deleniti eaque odit modi obcaecati? Ut est fuga maiores optio earum?</p>
          </Card.Body>
        </Card>
        <Card>
          <Card.Header>
            <Card.Title>Hobbies and Interests</Card.Title>
          </Card.Header>
          <Card.Body>
            <p>Video games</p>
            <p>YouTube</p>
            <p>Philosophy</p>
            <p>Books</p>
            <p>Extreme Sports</p>
          </Card.Body>
        </Card>
      </div>
    </div>
  )
}