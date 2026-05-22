# 🎬 MeuCineClube

Uma aplicação web real e simples desenvolvida em React para o catálogo e gestão de filmes favoritos. O projeto foi construído de forma incremental como atividade prática da disciplina de Desenvolvimento de Software para Web.

## 🚀 Funcionalidades

- **Autenticação Simulada:** Área de Login persistida no `localStorage` com controle de acesso (bloqueio de rotas públicas/privadas).
- **Catálogo de Filmes:** Listagem dinâmica na página inicial a partir de um serviço de dados simulado (Mock).
- **Página de Detalhes:** Rota dinâmica (`/filme/:id`) que captura parâmetros da URL para exibir informações específicas de cada obra.
- **Gestão de Favoritos:** Contexto global para adicionar e remover filmes do clube de favoritos, com persistência de dados.
- **Modo Claro/Escuro:** Alternador de temas integrado na interface e aplicado globalmente.

## 🛠️ Tecnologias Utilizadas

- **React** (Componentes Funcionais e Hooks)
- **Vite** (Build tool rápido para ambiente de desenvolvimento)
- **React Router Dom** (Gerenciamento de rotas e navegação SPA)
- **Context API** (Gerenciamento de estados globais para Tema, Autenticação e Favoritos)

## 📁 Estrutura de Pastas

```text
src/
├── components/  # Componentes reutilizáveis (Header, etc.)
├── contexts/    # Contextos globais (Auth, Theme, Favoritos)
├── pages/       # Páginas da aplicação (Home, Login, Favoritos, Detalhes)
├── routes/      # Componentes de rotas e proteção (ProtectedRoute)
├── services/    # Serviços e mocks de dados de filmes
├── App.jsx      # Componente centralizador e mapeamento de rotas
└── main.jsx     # Ponto de entrada da aplicação