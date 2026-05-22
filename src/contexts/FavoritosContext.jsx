import React, { createContext, useState, useEffect } from 'react';

// 1. Criamos o contexto de favoritos
export const FavoritosContext = createContext();

// 2. Criamos o Provedor (Provider)
export function FavoritosProvider({ children }) {
  // Inicializa o estado buscando o array do localStorage (se houver) ou inicia vazio
  const [favoritos, setFavoritos] = useState(() => {
    const savedFavs = localStorage.getItem('favoritos');
    return savedFavs ? JSON.parse(savedFavs) : [];
  });

  // Salva no localStorage toda vez que a lista de favoritos mudar
  useEffect(() => {
    localStorage.setItem('favoritos', JSON.stringify(favoritos));
  }, [favoritos]);

  // Função para adicionar um filme aos favoritos (evitando duplicados)
  const adicionarFavorito = (filme) => {
    setFavoritos((prevFavoritos) => {
      // Checa se o filme já está na lista para não duplicar
      const jaExiste = prevFavoritos.some((f) => f.id === filme.id);
      if (!jaExiste) {
        return [...prevFavoritos, filme]; // Adiciona mantendo os anteriores (imutabilidade)
      }
      return prevFavoritos; // Retorna a lista sem alterações se já existir
    });
  };

  // Função para remover um filme da lista pelo ID
  const removerFavorito = (id) => {
    setFavoritos((prevFavoritos) => prevFavoritos.filter((filme) => filme.id !== id));
  };

  return (
    <FavoritosContext.Provider value={{ favoritos, adicionarFavorito, removerFavorito }}>
      {children}
    </FavoritosContext.Provider>
  );
}