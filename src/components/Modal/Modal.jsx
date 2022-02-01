import React from 'react';
import ReactDOM from 'react-dom';
import CreateNote from '../CreateNote/CreateNote';
import { Modal, ModalShadow } from './Modal.styles';

export default function ModalContainer({ setOpen, note, id }) {
  function close() {
    setOpen(false);
  }

  return ReactDOM.createPortal(
    <>
      <ModalShadow onClick={close} />
      <Modal>
        <CreateNote note={note} id={id} close={close} />
      </Modal>
    </>,
    document.getElementById('app-modal')
  );
}
