import React from 'react';
import { Card, Badge, OverlayTrigger, Tooltip } from 'react-bootstrap';

import { coreCompetencies } from '@app/../database';

import './CoreSkills.css';

export default () => (
  <>
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
  </>
)
