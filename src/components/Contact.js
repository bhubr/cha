import React from 'react';
import './Contact.css';

const Contact = () => (
  <div className="Contact">
    <img className="avatar" src="https://randomuser.me/api/portraits/men/28.jpg" />
    <div>
      <div className="name">Robert Reyes</div>
        <div className="status">
          <span className="status-online"></span>
          <div className="status-text">online</div>
        </div>
    </div>
  </div>
);

export default Contact;