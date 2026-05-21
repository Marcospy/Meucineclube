import React from 'react';
import { Link } from 'react-router-dom';

function Header() {
  return (
    <header style={{ padding: '10px', borderBottom: '1px solid #ccc', marginBottom: '20px' }}>
      <h1>🎬 MeuCineClube</h1>
      <nav style={{ display: 'flex', gap: '15px' }}>
        <Link to="/">Home</Link>
        <Link to="/favoritos">Favoritos</Link>
        <Link to="/login">Login</Link>
      </nav>
    </header>
  );
}

export default Header;