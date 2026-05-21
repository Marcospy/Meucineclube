import React, { createContext, useState, useEffect } from 'react';

// 1. Criamos o contexto propriamente dito
export const ThemeContext = createContext();

// 2. Criamos o componente Provedor (Provider)
export function ThemeProvider({ children }) {
  // Inicializa o estado buscando do localStorage (se existir) ou padrão 'light'
  const [theme, setTheme] = useState(() => {
    const savedTheme = localStorage.getItem('theme');
    return savedTheme ? savedTheme : 'light';
  });

  // Função para alternar entre light e dark
  const toggleTheme = () => {
    setTheme((prevTheme) => (prevTheme === 'light' ? 'dark' : 'light'));
  };

  // Toda vez que o tema mudar, salvamos no localStorage e aplicamos uma classe no body
  useEffect(() => {
    localStorage.setItem('theme', theme);
    
    // Um truque simples de CSS: injetar cores globais direto na tag <body> do HTML
    if (theme === 'dark') {
      document.body.style.backgroundColor = '#121212';
      document.body.style.color = '#ffffff';
    } else {
      document.body.style.backgroundColor = '#ffffff';
      document.body.style.color = '#000000';
    }
  }, [theme]);

  return (
    <ThemeContext.Provider value={{ theme, toggleTheme }}>
      {children}
    </ThemeContext.Provider>
  );
}