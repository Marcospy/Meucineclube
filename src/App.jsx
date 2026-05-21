import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { ThemeProvider } from './contexts/ThemeContext'; // <-- Importamos o provedor
import Header from './components/Header';
import Home from './pages/Home';
import Login from './pages/Login';
import Favoritos from './pages/Favoritos';

function App() {
  return (
    <ThemeProvider> {/* <-- Colocamos o Provedor por fora de tudo */}
      <BrowserRouter>
        <Header />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/login" element={<Login />} />
          <Route path="/favoritos" element={<Favoritos />} />
        </Routes>
      </BrowserRouter>
    </ThemeProvider>
  );
}

export default App;