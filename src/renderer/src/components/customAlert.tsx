import React from 'react';
import './customAlert.css';

interface CustomAlertProps {
  message: string;
}

const CustomAlert: React.FC<CustomAlertProps> = ({ message }) => {
  return (
    <div className="alertOverlay">
      <div className="alertBox">
        <p className="alertMessage">{message}</p>
      </div>
    </div>
  );
};

export default CustomAlert;