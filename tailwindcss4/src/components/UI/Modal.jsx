import React from 'react';
import ReactDOM from 'react-dom';

const Backdrop = (props) => {
  return (
    <div
      onClick={props.onClose}
      className="fixed top-0 left-0 w-full h-screen z-20 bg-[rgba(0, 0, 0, 0.75)]"
    />
  );
};

const ModalOverlay = (props) => {
  return (
    <div className="fixed top-[20vh] left-[5%] w-[90%] bg-white p-[1rem] rounded-[14px] shadow-lg z-30">
      <div>{props.children}</div>
    </div>
  );
};

const portalElement = document.getElementById('overlays');

const Modal = (props) => {
  return (
    <React.Fragment>
      {ReactDOM.createPortal(
        <Backdrop onClose={props.onClose} />,
        portalElement
      )}
      {ReactDOM.createPortal(
        <ModalOverlay>{props.children}</ModalOverlay>,
        portalElement
      )}
    </React.Fragment>
  );
};

export default Modal;
