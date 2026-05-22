import React, { useState, useEffect } from 'react';
import { useParams, Link } from 'react-router-dom';
import { FILMES_MOCK } from '../services/filmesMock';

function DetalhesFilme() {
  const { id } = useParams();
  const [filme, setFilme] = useState(null);

  useEffect(() => {
    const filmeEncontrado = FILMES_MOCK.find((f) => f.id === id);
    // CORREÇÃO AQUI: tirar o "s" do final para chamar a função correta
    setFilme(filmeEncontrado); 
  }, [id]);

  if (!filme) {
    return <p style={{ padding: '20px' }}>Filme não encontrado!</p>;
  }

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
          
          <button 
            style={{ 
              marginTop: '20px', 
              padding: '10px 15px', 
              background: '#28a745', 
              color: '#fff', 
              border: 'none', 
              borderRadius: '4px', 
              cursor: 'pointer',
              fontSize: '16px'
            }}
          >
            ❤️ Adicionar aos Favoritos
          </button>
        </div>
      </div>
    </div>
  );
}

export default DetalhesFilme;