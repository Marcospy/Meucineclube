import React, { useContext } from 'react';
import { Link } from 'react-router-dom';
import { FavoritosContext } from '../contexts/FavoritosContext'; // <-- Importamos o contexto

function Favoritos() {
  // Consumimos os filmes favoritados e a função de remoção
  const { favoritos, removerFavorito } = useContext(FavoritosContext);

  return (
    <div style={{ padding: '0 20px' }}>
      <h2>Meus Filmes Favoritos</h2>

      {/* Renderização condicional para quando a lista estiver vazia (Passo 9 do slide) */}
      {favoritos.length === 0 ? (
        <p>Você ainda não adicionou nenhum filme aos favoritos.</p>
      ) : (
        <div style={{ 
          display: 'grid', 
          gridTemplateColumns: 'repeat(auto-fill, minmax(200px, 1fr))', 
          gap: '20px', 
          marginTop: '20px' 
        }}>
          {favoritos.map((filme) => (
            <div 
              key={filme.id} 
              style={{ 
                border: '1px solid #ccc', 
                borderRadius: '8px', 
                padding: '10px', 
                textAlign: 'center' 
              }}
            >
              <img 
                src={filme.poster} 
                alt={filme.titulo} 
                style={{ width: '100%', height: '250px', objectFit: 'cover', borderRadius: '4px' }} 
              />
              <h3 style={{ margin: '10px 0 5px 0', fontSize: '18px' }}>{filme.titulo}</h3>
              
              <div style={{ display: 'flex', flexDirection: 'column', gap: '5px', marginTop: '10px' }}>
                <Link 
                  to={`/filme/${filme.id}`} 
                  style={{ 
                    padding: '5px 10px', 
                    background: '#007bff', 
                    color: '#fff', 
                    textDecoration: 'none', 
                    borderRadius: '4px',
                    fontSize: '14px'
                  }}
                >
                  Ver Detalhes
                </Link>
                
                <button 
                  onClick={() => removerFavorito(filme.id)}
                  style={{ 
                    padding: '5px 10px', 
                    background: '#dc3545', 
                    color: '#fff', 
                    border: 'none', 
                    borderRadius: '4px', 
                    cursor: 'pointer',
                    fontSize: '14px'
                  }}
                >
                  Remover
                </button>
              </div>
            </div>
          ))}
        </div>
      )}
    </div>
  );
}

export default Favoritos;