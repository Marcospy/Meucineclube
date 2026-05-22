import React, { useContext } from 'react';
import { Link } from 'react-router-dom';
import { ThemeContext } from '../contexts/ThemeContext';
import { AuthContext } from '../contexts/AuthContext'; // <-- Importamos o AuthContext

function Header() {
  const { theme, toggleTheme } = useContext(ThemeContext);
  const { user, logout } = useContext(AuthContext); // <-- Consumimos o estado do usuário e logout

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
        <nav style={{ display: 'flex', gap: '15px', alignItems: 'center' }}>
          <Link to="/">Home</Link>
          <Link to="/favoritos">Favoritos</Link>
          <Link to="/login">Login</Link>
          
          {/* Se o usuário estiver logado, exibe o nome dele e o botão Sair */}
          {user && (
            <span style={{ marginLeft: '20px', fontStyle: 'italic', color: '#888' }}>
              Olá, {user.name}! <button onClick={logout} style={{ marginLeft: '5px', cursor: 'pointer' }}>Sair</button>
            </span>
          )}
        </nav>
      </div>

      <button onClick={toggleTheme} style={{ padding: '8px 12px', cursor: 'pointer' }}>
        {theme === 'light' ? '🌙 Modo Escuro' : '☀️ Modo Claro'}
      </button>
    </header>
  );
}

export default Header;