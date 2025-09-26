import React from 'react';
import { Link } from 'react-router-dom';

const Footer = () => {
  return (
    <footer className="fixed bottom-0 left-0 w-full bg-gray-900 py-3 shadow-lg flex justify-center items-center">
      <span>&copy; {new Date().getFullYear()} TikTok Clone. All rights reserved.</span>
    </footer>
  );
};

export default Footer;