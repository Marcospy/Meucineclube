import React, { createContext, useState, useEffect } from 'react';

// 1. Criamos o contexto de autenticação
export const AuthContext = createContext();

// 2. Criamos o Provedor de Autenticação
export function AuthProvider({ children }) {
  // Inicializa o estado verificando se já existe um usuário salvo no localStorage
  const [user, setUser] = useState(() => {
    const savedUser = localStorage.getItem('user');
    return savedUser ? JSON.parse(savedUser) : null;
  });

  // Função para simular o login do usuário
  const login = (username, password) => {
    // Validação simples simulada (qualquer usuário com a senha "123" entra)
    if (password === '123') {
      const loggedUser = { name: username };
      setUser(loggedUser);
      localStorage.setItem('user', JSON.stringify(loggedUser));
      return true; // Login com sucesso
    }
    return false; // Falha no login
  };

  // Função para deslogar (logout)
  const logout = () => {
    setUser(null);
    localStorage.removeItem('user');
  };

  return (
    <AuthContext.Provider value={{ user, login, logout }}>
      {children}
    </AuthContext.Provider>
  );
}