import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { ThemeProvider } from './contexts/ThemeContext';
import { AuthProvider } from './contexts/AuthContext';
import Header from './components/Header';
import Home from './pages/Home';
import Login from './pages/Login';
import Favoritos from './pages/Favoritos';
import ProtectedRoute from './routes/ProtectedRoute'; // <-- Importamos a rota protegida

function App() {
  return (
    <ThemeProvider>
      <AuthProvider>
        <BrowserRouter>
          <Header />
          <Routes>
            {/* A página de Login é pública, qualquer um pode ver */}
            <Route path="/login" element={<Login />} />

            {/* Protegemos a Home: ela só abre se passar pela checagem da ProtectedRoute */}
            <Route 
              path="/" 
              element={
                <ProtectedRoute>
                  <Home />
                </ProtectedRoute>
              } 
            />

            {/* Protegemos os Favoritos da mesma forma */}
            <Route 
              path="/favoritos" 
              element={
                <ProtectedRoute>
                  <Favoritos />
                </ProtectedRoute>
              } 
            />
          </Routes>
        </BrowserRouter>
      </AuthProvider>
    </ThemeProvider>
  );
}

export default App;