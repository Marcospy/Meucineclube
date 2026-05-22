import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { ThemeProvider } from './contexts/ThemeContext';
import { AuthProvider } from './contexts/AuthContext';
import { FavoritosProvider } from './contexts/FavoritosContext'; // <-- Importe o novo Provider
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
        <FavoritosProvider> {/* <-- Envolva a aplicação com o Provedor de Favoritos */}
          <BrowserRouter>
            <Header />
            <Routes>
              <Route path="/login" element={<Login />} />

              <Route path="/" element={<ProtectedRoute><Home /></ProtectedRoute>} />
              <Route path="/favoritos" element={<ProtectedRoute><Favoritos /></ProtectedRoute>} />
              <Route path="/filme/:id" element={<ProtectedRoute><DetalhesFilme /></ProtectedRoute>} />
            </Routes>
          </BrowserRouter>
        </FavoritosProvider>
      </AuthProvider>
    </ThemeProvider>
  );
}

export default App;