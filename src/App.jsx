import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { ThemeProvider } from './contexts/ThemeContext';
import { AuthProvider } from './contexts/AuthContext';
import { FavoritosProvider } from './contexts/FavoritosContext';
import Header from './components/Header';
import Home from './pages/Home';
import Login from './pages/Login';
import Favoritos from './pages/Favoritos';
import DetalhesFilme from './pages/DetalhesFilme';
import ProtectedRoute from './routes/ProtectedRoute';

function App() {
  return (
    <ThemeProvider>
      <AuthProvider>
        <FavoritosProvider>
          <BrowserRouter>
            <Header />
            <Routes>
              {/* 1. Página de Login continua pública */}
              <Route path="/login" element={<Login />} />

              {/* 2. MODIFICAÇÃO AQUI: A Home agora é pública! Tiramos o ProtectedRoute daqui */}
              <Route path="/" element={<Home />} />

              {/* 3. Os Favoritos continuam privados (só logado acessa) */}
              <Route 
                path="/favoritos" 
                element={
                  <ProtectedRoute>
                    <Favoritos />
                  </ProtectedRoute>
                } 
              />
              
              {/* 4. Os Detalhes do Filme continuam privados (só logado acessa) */}
              <Route 
                path="/filme/:id" 
                element={
                  <ProtectedRoute>
                    <DetalhesFilme />
                  </ProtectedRoute>
                } 
              />
            </Routes>
          </BrowserRouter>
        </FavoritosProvider>
      </AuthProvider>
    </ThemeProvider>
  );
}

export default App;