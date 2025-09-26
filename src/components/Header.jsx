import React from 'react';

const Header = () => {
  return (
    <header style={{
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'space-between',
      padding: '1rem 2rem',
      background: '#fff',
      borderBottom: '1px solid #eee'
    }}>
      <div style={{ fontWeight: 'bold', fontSize: '1.5rem', color: '#111' }}>
        TikTok Clone
      </div>
      <nav>
        <a href="/" style={{ marginRight: '1rem', color: '#111', textDecoration: 'none' }}>Home</a>
        <a href="/explore" style={{ marginRight: '1rem', color: '#111', textDecoration: 'none' }}>Explore</a>
        <a href="/profile" style={{ color: '#111', textDecoration: 'none' }}>Profile</a>
      </nav>
    </header>
  );
};

export default Header;