// eslint-disable-next-line no-unused-vars
import React from 'react';
import PropTypes from 'prop-types';

const Modal = ({ children, modal, setModal, hidden }) => {
    return <>
    <div
        onClick={() => setModal(false)}
        className={`bg-white/50 fixed inset-0 z-10 
      ${hidden} transition-all duration-500`}
      />
      {children}</>
};

Modal.propTypes = {
    children: PropTypes.node.isRequired
};

export default Modal;
