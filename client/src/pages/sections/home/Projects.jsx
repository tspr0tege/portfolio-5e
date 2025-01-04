import React, { useState } from 'react';
import { Card } from 'react-bootstrap';

import './Projects.css';

import { projects } from '@app/../database'

export default () => {

  const [ focusProject, setFocusProject ] = useState(0);

  return (
    <>
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
      <p>{projects[focusProject].type}</p>
      <p className="aragraph">{projects[focusProject].summary}</p>
      <Card.Footer className="links-footer">
        {projects[focusProject].links.map((p, i) => {
          return (
            <a key={i} target='_blank' href={p.link}>{p.title}</a>
          )
        })}
      </Card.Footer>
    </>
  )
}
