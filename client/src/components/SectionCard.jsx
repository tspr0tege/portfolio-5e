import React, { useRef } from 'react';
import { Card } from 'react-bootstrap'

const { Header, Title, Body } = Card;

export default ({ title, children, cardClass='', bodyClass='', addToCollection }) => {
  
  const sectionRef = useRef(null);

  function blink() {
    const navOffset = document.getElementById('nav-bar').offsetHeight;
    window.scroll({
      top: sectionRef.current.offsetTop - navOffset - 10,
      left: 0,    
      behavior: 'smooth'
    });
    sectionRef.current.classList.add('blink-container');
    setTimeout(() => {
      sectionRef.current.classList.remove('blink-container');
    }, 1500);
  }

  addToCollection(title, blink);
  
  return (
    <Card className={cardClass} ref={sectionRef}>
      <Header>
        <Title>{title}</Title>
      </Header>
      <Body className={bodyClass}>
        {children}
      </Body>
    </Card>
  )
}
