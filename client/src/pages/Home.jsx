import React from 'react';
import { Card, Badge, OverlayTrigger, Tooltip } from 'react-bootstrap';

import { coreCompetencies } from '../../database';
// import './Index.css';

export default () => (
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
                    <i className={skill.icon + ' core-skill-icon'}></i>
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
    </div>
    <div className="col-2">
      Active Battle Stats
      Quick reference to spells and attacks
      Equipment
    </div>
    <div className="col-3">
      Quick character reference (who you are)
      Personal description
    </div>
    <div style={{
      backgroundColor: '#666'
    }}></div>
  </div>
)