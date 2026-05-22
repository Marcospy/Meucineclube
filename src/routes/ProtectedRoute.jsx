import React, { useContext } from 'react';
import { Navigate } from 'react-router-dom';
import { AuthContext } from '../contexts/AuthContext';

function ProtectedRoute({ children }) {
  // 1. Buscamos o usuário logado lá do contexto global
  const { user } = useContext(AuthContext);

  // 2. Se o usuário NÃO estiver logado, barramos o acesso e o redirecionamos para /login
  if (!user) {
    return <Navigate to="/login" replace />;
  }

  // 3. Se ele estiver logado, renderizamos os componentes filhos normalmente
  return children;
}

export default ProtectedRoute;