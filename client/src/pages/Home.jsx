import React, { useState } from 'react';
import { Card, Badge, OverlayTrigger, Tooltip, Accordion } from 'react-bootstrap';

import { coreCompetencies, otherSkills, projects, experience } from '../../database';
import Codewars from '../icons/codewars.svg';
import Medium from '../icons/medium.svg';


export default () => {

  const [ skillLvlMin, setSkillLvlMin ] = useState(3);
  const [ focusProject, setFocusProject ] = useState(0);

  function changeSkillMin(e) {
    setSkillLvlMin(e.target.value);
  }

  const project = projects[0];

  return (
    <div className="content-grid">
      <div className="skill-grid">
        <Card>
          <Card.Header>
            <Card.Title>Core Skills</Card.Title>
          </Card.Header>
          <Card.Body className="core-skills-list">
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
          </Card.Body>
        </Card>
        <Card className="other-skills-container">
          <Card.Header>
            <Card.Title>Additional Skills</Card.Title>
          </Card.Header>
          <Card.Body className="vertical-flex">
            <p>Minimum Comfort Level: {skillLvlMin}</p>
            <datalist id="tickmarks">
              <option value="1">1</option>
              <option value="2">2</option>
              <option value="3">3</option>
              <option value="4">4</option>
              <option value="5">5</option>
            </datalist>
            <input type="range" id="level-range" name="level-range" min="1" max="5" step="1" value={skillLvlMin} onChange={changeSkillMin} list="tickmarks" />
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
          </Card.Body>
        </Card>
        <Card className="skills-summary">
          <Card.Header>
            <Card.Title>Skills Summary</Card.Title>
          </Card.Header>
          <Card.Body>
            <p> Lorem ipsum dolor sit amet, consectetur adipisicing elit. Suscipit rem dolore nulla, ipsum voluptates repudiandae deleniti quisquam minima exercitationem, dignissimos mollitia sequi nemo harum, quam quos quo quia quasi reprehenderit? </p>
          </Card.Body>
        </Card>
      </div>
      <div className="vertical-flex"> 
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
                      className={'project-thumbnail' + ((focusProject === i) ? ' highlight' : '')}
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
                      className={'project-thumbnail' + ((focusProject === i) ? ' highlight' : '')}
                      onClick={() => { setFocusProject(i) }}
                    />
                  )
                }
              })}
            </div>
            <h4>{projects[focusProject].name}</h4>
            <p>{projects[focusProject].type} project</p>
            <p>{projects[focusProject].summary}</p>
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
            <Card.Title>Technical Experience</Card.Title>
          </Card.Header>
          <Card.Body>
            
            {experience.map((e, i) => {
              return (
                <Accordion key={i}>
                  <Accordion.Item eventKey={i}>
                    <Accordion.Header>
                      <div className="exp-container">
                        <div>
                          <h5>{e.position}</h5>
                          <p>{e.company}</p>
                        </div>
                        <div className="exp-right">
                          {/* e.from_to[1] instanceof Date */}
                          <p>{`${e.from_to[0].toLocaleString('en-us', { month: 'short', year: 'numeric' })} - ${e.from_to[1].toLocaleString('en-us', { month: 'short', year: 'numeric' })}`}</p>
                          <p>{e.location}</p>
                        </div>
                      </div>
                    </Accordion.Header>
                    <Accordion.Body>
                      <ul>
                        {e.bullets.map((b, ii) => {
                          return (
                            <li key={ii}>{b}</li>
                          )
                        })}
                      </ul>
                    </Accordion.Body>
                  </Accordion.Item>
                </Accordion>

              )
            })}

          </Card.Body>
        </Card>
        <Card>
          <Card.Header>
            <Card.Title>Education</Card.Title>
          </Card.Header>
          <Card.Body>
            <p style={{float: 'right'}}><em>Jan - Apr 2021</em></p>
            <h5>Hack Reactor</h5>
            <p><em>Remote Advanced Software Engineering Immersive</em></p>
            <ul style={{fontSize: '.9rem'}}>
              <li>16 weeks program on the MERN stack. Work included: daily algorithm challenges, APIs, CRUD apps, test-driven development, MVC, ORMs, transpilers, scalable deployment (to Heroku and AWS), and team-based projects.</li>
              <li>A personal favorite was the nQueens challenge, which I was able to optimize to run in better than 1/25th the time of the official solution code.</li>
            </ul>
          </Card.Body>
        </Card>
      </div>
      <div className="vertical-flex">
        <Card>
          <Card.Header>
            <Card.Title>Profiles</Card.Title>
          </Card.Header>
          <Card.Body>
            <div className="profile-links">
              <a href="https://www.linkedin.com/in/squall-leonhart/" target="_blank">
                <i className="devicon-linkedin-plain"></i>
                <p>LinkedIn</p>
              </a>
              <a href="https://github.com/tspr0tege" target="_blank">
                <i className="devicon-github-original"></i>
                <p>GitHub</p>
              </a>
              <a href="https://codepen.io/tspr0tege" target="_blank">
                <i className="devicon-codepen-plain"></i>
                <p>Codepen</p>
              </a>
              <a href="https://www.codewars.com/users/tspr0tege" target="_blank">
                <Codewars />
                <p>Code Wars</p>
              </a>
              {/* <Medium /> */}
            </div>
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