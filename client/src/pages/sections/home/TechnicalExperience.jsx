import React from 'react';
import { Accordion } from 'react-bootstrap';

import './TechnicalExperience.css';

import { experience } from '@app/../database';

function mmyyDate(date) {
  // date instanceof Date for "to present"
  return ( date instanceof Date ?
    date.toLocaleString('en-us', { month: 'short', year: 'numeric' })
    : 'present'
    )
}

export default () => (
  <>
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
                  <p>{`${mmyyDate(e.from_to[0])} - ${mmyyDate(e.from_to[1])}`}</p>
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
  </>
)
