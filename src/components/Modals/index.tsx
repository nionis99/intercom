import React from 'react';
import Modal from 'react-bootstrap/Modal';

interface Props {
  children: React.ReactNode;
  title?: string;
  isActive: boolean;
  handleClose: () => void;
  centered: boolean;
  isStatic?: boolean;
}

const ModalContainer = ({ children, title, isActive, handleClose, centered }: Props) => (
  <Modal show={isActive} onHide={handleClose} centered={centered} backdrop="static">
    {title && (
      <Modal.Header closeButton>
        <Modal.Title>{title}</Modal.Title>
      </Modal.Header>
    )}
    <Modal.Body>{children}</Modal.Body>
  </Modal>
);

export default ModalContainer;
