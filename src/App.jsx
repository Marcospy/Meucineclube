import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { ThemeProvider } from './contexts/ThemeContext';
import { AuthProvider } from './contexts/AuthContext'; // <-- Importamos o AuthProvider
import Header from './components/Header';
import Home from './pages/Home';
import Login from './pages/Login';
import Favoritos from './pages/Favoritos';

function App() {
  return (
    <ThemeProvider>
      <AuthProvider> {/* <-- Adicionamos o Provedor de Autenticação aqui */}
        <BrowserRouter>
          <Header />
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/login" element={<Login />} />
            <Route path="/favoritos" element={<Favoritos />} />
          </Routes>
        </BrowserRouter>
      </AuthProvider>
    </ThemeProvider>
  );
}

export default App;