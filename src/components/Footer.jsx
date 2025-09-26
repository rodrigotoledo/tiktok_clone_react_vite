import React from 'react';

const Footer = () => {
  return (
    <footer style={{
      padding: '1rem',
      background: '#222',
      color: '#fff',
      textAlign: 'center',
      fontSize: '0.9rem'
    }}>
      <span>&copy; {new Date().getFullYear()} TikTok Clone. All rights reserved.</span>
    </footer>
  );
};

export default Footer;