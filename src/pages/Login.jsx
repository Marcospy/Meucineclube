import React, { useState, useContext } from 'react';
import { useNavigate } from 'react-router-dom';
import { AuthContext } from '../contexts/AuthContext';

function Login() {
  // 1. Criamos estados locais para controlar os campos de texto do formulário
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');

  // 2. Consumimos a função global de login e o estado do usuário do contexto
  const { login, user } = useContext(AuthContext);
  
  // 3. O hook useNavigate serve para redirecionar o usuário por código
  const navigate = useNavigate();

  // Se o usuário já estiver logado, redireciona direto para a Home
  if (user) {
    navigate('/');
  }

  const handleSubmit = (e) => {
    e.preventDefault(); // Impede a página de recarregar com o envio do form

    // Limpa erros anteriores
    setError('');

    // Chama a função de login do contexto passando as credenciais locais
    const success = login(username, password);

    if (success) {
      // Se deu certo, manda o usuário de volta para a tela inicial
      navigate('/');
    } else {
      // Se errou a senha (diferente de 123), exibe uma mensagem amigável
      setError('Usuário inválido ou senha incorreta (Dica: use a senha 123).');
    }
  };

  return (
    <div style={{ maxWidth: '400px', margin: '40px auto', padding: '20px', border: '1px solid #ccc', borderRadius: '8px' }}>
      <h2>Acessar MeuCineClube</h2>
      
      {error && <p style={{ color: 'red', fontWeight: 'bold' }}>{error}</p>}

      <form onSubmit={handleSubmit} style={{ display: 'flex', flexDirection: 'column', gap: '15px' }}>
        <div style={{ display: 'flex', flexDirection: 'column', gap: '5px' }}>
          <label htmlFor="username">Nome de Usuário:</label>
          <input
            id="username"
            type="text"
            value={username}
            onChange={(e) => setUsername(e.target.value)}
            required
            style={{ padding: '8px', fontSize: '16px' }}
          />
        </div>

        <div style={{ display: 'flex', flexDirection: 'column', gap: '5px' }}>
          <label htmlFor="password">Senha:</label>
          <input
            id="password"
            type="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            required
            style={{ padding: '8px', fontSize: '16px' }}
          />
        </div>

        <button type="submit" style={{ padding: '10px', fontSize: '16px', background: '#007bff', color: '#fff', border: 'none', borderRadius: '4px', cursor: 'pointer' }}>
          Entrar
        </button>
      </form>
    </div>
  );
}

export default Login;