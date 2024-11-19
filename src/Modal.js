import './App.css';
import React, {useState} from 'react';
function Modal({isOpen: initialIsOpen = false, children}){
  const [isOpen, setIsOpen] = useState(initialIsOpen);
  function toggle() {
        setIsOpen((prev) => !prev);
  }
  if (!isOpen) return null;
  return (
          <div className="modal-background" onClick={toggle}>
            <div onClick={(e) => e.stopPropagation()}>
              {children}
            </div>
          </div>
  );
}
    

Modal.Header = ({ title, toggle }) => (
    <div className="modal-header">
      <h2>{title}</h2>
      <button onClick={toggle}>X</button>
    </div>
  );
  
  Modal.Content = ({ children }) => (
    <div className="modal-body">
      {children}
    </div>
  );
  
Modal.Footer = ({ callToActionLabel, toggle }) => (
    <div className="modal-footer">
      <button onClick={toggle}>Cancel</button>
      <button onClick={() => { alert('OK'); toggle(); }}>{callToActionLabel}</button>
    </div>
  );
export default Modal;