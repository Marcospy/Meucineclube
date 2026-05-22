import React, { useState, useEffect, useContext } from 'react';
import { useParams, Link } from 'react-router-dom';
import { FILMES_MOCK } from '../services/filmesMock';
import { FavoritosContext } from '../contexts/FavoritosContext'; // <-- Importamos o contexto

function DetalhesFilme() {
  const { id } = useParams();
  const [filme, setFilme] = useState(null);

  // Consumimos a lista e as funções de favoritos
  const { favoritos, adicionarFavorito, removerFavorito } = useContext(FavoritosContext);

  useEffect(() => {
    const filmeEncontrado = FILMES_MOCK.find((f) => f.id === id);
    setFilme(filmeEncontrado);
  }, [id]);

  if (!filme) {
    return <p style={{ padding: '20px' }}>Filme não encontrado!</p>;
  }

  // Verifica se o filme atual já está na lista de favoritos
  const estaFavoritado = favoritos.some((f) => f.id === filme.id);

  const handleFavoritoClick = () => {
    if (estaFavoritado) {
      removerFavorito(filme.id);
    } else {
      adicionarFavorito(filme);
    }
  };

  return (
    <div style={{ padding: '20px', maxWidth: '800px', margin: '0 auto' }}>
      <Link to="/" style={{ textDecoration: 'none', color: '#007bff' }}>← Voltar para a Home</Link>
      
      <div style={{ display: 'flex', gap: '30px', marginTop: '20px', flexWrap: 'wrap' }}>
        <img 
          src={filme.poster} 
          alt={filme.titulo} 
          style={{ width: '300px', height: '400px', objectFit: 'cover', borderRadius: '8px' }} 
        />
        
        <div style={{ flex: 1, minWidth: '300px' }}>
          <h2>{filme.titulo}</h2>
          <p><strong>Ano:</strong> {filme.ano}</p>
          <p><strong>Diretor:</strong> {filme.diretor}</p>
          <p style={{ marginTop: '15px', lineHeight: '1.6' }}><strong>Sinopse:</strong> {filme.sinopse}</p>
          
          {/* Botão dinâmico: muda de estilo e ação dependendo se está favoritado */}
          <button 
            onClick={handleFavoritoClick}
            style={{ 
              marginTop: '20px', 
              padding: '10px 15px', 
              background: estaFavoritado ? '#dc3545' : '#28a745', 
              color: '#fff', 
              border: 'none', 
              borderRadius: '4px', 
              cursor: 'pointer',
              fontSize: '16px'
            }}
          >
            {estaFavoritado ? '💔 Remover dos Favoritos' : '❤️ Adicionar aos Favoritos'}
          </button>
        </div>
      </div>
    </div>
  );
}

export default DetalhesFilme;