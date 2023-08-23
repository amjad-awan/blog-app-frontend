import React from 'react';
import './style.css'; // Import your CSS file for styling
import whatsAppLogo from "../../assets/whatsapp.jpeg"
const WhatsAppIcon = () => {
  const phoneNumber = '03027543636'; // Replace with your actual phone number

  const openWhatsAppChat = () => {
    window.open(`https://api.whatsapp.com/send?phone=${phoneNumber}`, '_blank');
  };

  return (
    <div className="whatsapp-icon-container">
      <img
        src={whatsAppLogo}
        alt="WhatsApp"
        className="whatsapp-icon"
        onClick={openWhatsAppChat}
      />
    </div>
  );
};

export default WhatsAppIcon;
