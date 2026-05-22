import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { FILMES_MOCK } from '../services/filmesMock';

function Home() {
  // 1. Estado para armazenar os filmes da aplicação
  const [filmes, setFilmes] = useState([]);

  // 2. O useEffect simula o carregamento dos dados assim que a página monta
  useEffect(() => {
    // Simulando um pequeno atraso de rede (500ms) para parecer uma API real
    const timer = setTimeout(() => {
      setFilmes(FILMES_MOCK);
    }, 500);

    return () => clearTimeout(timer); // Limpeza do timer ao desmontar
  }, []);

  return (
    <div style={{ padding: '0 20px' }}>
      <h2>Catálogo de Filmes</h2>
      
      {filmes.length === 0 ? (
        <p>Carregando filmes...</p>
      ) : (
        <div style={{ 
          display: 'grid', 
          gridTemplateColumns: 'repeat(auto-fill, minmax(200px, 1fr))', 
          gap: '20px', 
          marginTop: '20px' 
        }}>
          {filmes.map((filme) => (
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
              <p style={{ color: '#666', fontSize: '14px' }}>Ano: {filme.ano}</p>
              
              {/* Link dinâmico que envia o ID do filme na URL */}
              <Link 
                to={`/filme/${filme.id}`} 
                style={{ 
                  display: 'inline-block', 
                  marginTop: '10px', 
                  padding: '5px 10px', 
                  background: '#007bff', 
                  color: '#fff', 
                  textDecoration: 'none', 
                  borderRadius: '4px' 
                }}
              >
                Ver Detalhes
              </Link>
            </div>
          ))}
        </div>
      )}
    </div>
  );
}

export default Home;