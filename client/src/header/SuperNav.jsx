import React from 'react';
import ListGroup from 'react-bootstrap/ListGroup';

const names = ['Home', 'Personal', 'Professional'];

export default () => {

  function handleClick(e) {
    console.log(e.target.textContent)
  }

  return  (
    <ListGroup horizontal>
      {names.map((name, i) => {
        return <ListGroup.Item key={i} action variant='dark' onClick={handleClick}>{name}</ListGroup.Item>
      })}
    </ListGroup>
  )
}
