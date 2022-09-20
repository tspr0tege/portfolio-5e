import React, { useState } from 'react';
import Modal from 'react-modal';

const customStyles = {
  content: {
    top: '50%',
    left: '50%',
    right: 'auto',
    bottom: 'auto',
    marginRight: '-50%',
    transform: 'translate(-50%, -50%)',
    maxHeight: '85vh'
  },
  overlay: {
    backgroundColor: 'rgba(0, 0, 0, 0.75)'
  }
};

Modal.setAppElement('#app');

export default ({ children }) => {

  const [showModal, setShowModal] = useState(true);

   return (
    <Modal
      isOpen={showModal}
      onRequestClose={() => {setShowModal(false)}}
      style={customStyles}
      shouldCloseOnOverlayClick={true}
    >
      {children}
    </Modal>
   )
}
