import React, { useState, useEffect } from 'react';
import Modal from 'react-modal';
import './App.css';
import './Header.css';

import SuperNav from './navigation/SuperNav';
import ContactButton from './components/ContactButton';
import SubNav from './navigation/SubNav';
import Home from './pages/Home';

import ContactForm from './components/ContactForm';

const customStyles = {
  content: {
    top: '50%',
    left: '50%',
    right: 'auto',
    bottom: 'auto',
    marginRight: '-50%',
    transform: 'translate(-50%, -50%)',
    maxHeight: '85vh',
    zIndex: '11'
  },
  overlay: {
    backgroundColor: 'rgba(0, 0, 0, 0.75)',
    zIndex: '100'
  }
};

Modal.setAppElement('#app');

const checkWindow = () => window.innerWidth < 850;

export default () => {

  const [ subnavNames, setSubnavNames ] = useState({});
  const [ showModal, setShowModal ] = useState(false);
  const [ smolScreen, setSmolScreen ] = useState(checkWindow());

  useEffect(() => {
    const onResize = () => { if (checkWindow() !== smolScreen) {setSmolScreen(b => !b);} }
    window.addEventListener('resize', onResize);
    return () => { window.removeEventListener('resize', onResize) }
  }, [smolScreen]);

  function getSubnav({ names, functions }) {
    if (JSON.stringify(names) !== JSON.stringify(subnavNames.names)) {
      setSubnavNames({ names, functions });
    }
  }

  function openModal() {
    setShowModal(true);
  }
  
  return (
    <>
      <Modal
        isOpen={showModal}
        onRequestClose={() => {setShowModal(false)}}
        style={customStyles}
        shouldCloseOnOverlayClick={true}
      >
        <ContactForm />
      </Modal>
      <header>
        <div id="header-banner">
          <div>
            <h1>Squall Leonhart</h1>
            <p>Developer Portfolio</p>
          </div>
        </div>
        {smolScreen &&
          <>
            <label htmlFor='hamenu' id='hamcheck'></label>
            <input type='checkbox' id='hamenu' />
          </>
        }
        <div id="nav-bar">
          <SuperNav openContactForm={openModal}>
            {!smolScreen && <ContactButton openContactForm={openModal}/>}
          </SuperNav>
          <SubNav names={subnavNames} />
        </div>
      </header>

      <Home sendNames={getSubnav} />

      {smolScreen && <ContactButton openContactForm={openModal}/>}

      <footer></footer>
    </>
  )
}
