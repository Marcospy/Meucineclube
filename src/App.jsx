import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Header from './components/Header';
import Home from './pages/Home';
import Login from './pages/Login';
import Favoritos from './pages/Favoritos';

function App() {
  return (
    <BrowserRouter>
      {/* O Header fica fixo no topo de todas as páginas */}
      <Header />
      
      {/* Aqui dentro, o React Router decide qual componente renderizar */}
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/login" element={<Login />} />
        <Route path="/favoritos" element={<Favoritos />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;