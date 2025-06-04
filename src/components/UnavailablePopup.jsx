import React from 'react'
import './UnavailablePopup.css'

const UnavailablePopup = ({ isOpen, onClose }) => {
  if (!isOpen) return null;

  return (
    <div className="popup-overlay" onClick={onClose}>
      <div className="popup-content" onClick={e => e.stopPropagation()}>
        <p className="popup-text">К сожалению, товар закончился😕</p>
        <p className='new-party'>Когда поступит новая партия, мы сообщим вам</p>
        <button className="popup-close" onClick={onClose}>
          Окей
        </button>
      </div>
    </div>
  );
};

export default UnavailablePopup; 