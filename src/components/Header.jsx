import React, { useContext } from 'react';
import { Link } from 'react-router-dom';
import { ThemeContext } from '../contexts/ThemeContext'; // <-- Importamos o contexto

function Header() {
  // Consumimos os dados globais usando o Hook useContext
  const { theme, toggleTheme } = useContext(ThemeContext);

  return (
    <header style={{ 
      padding: '10px', 
      borderBottom: '1px solid #ccc', 
      marginBottom: '20px',
      display: 'flex',
      justifyContent: 'space-between',
      alignItems: 'center'
    }}>
      <div>
        <h1>🎬 MeuCineClube</h1>
        <nav style={{ display: 'flex', gap: '15px' }}>
          <Link to="/">Home</Link>
          <Link to="/favoritos">Favoritos</Link>
          <Link to="/login">Login</Link>
        </nav>
      </div>

      {/* Botão que dispara a mudança de tema */}
      <button onClick={toggleTheme} style={{ padding: '8px 12px', cursor: 'pointer' }}>
        {theme === 'light' ? '🌙 Modo Escuro' : '☀️ Modo Claro'}
      </button>
    </header>
  );
}

export default Header;