# Projeto Livros: Back-end com Express e Mongoose + Front-end com React, Next.js e Angular

## 📋 Descrição
Este projeto é um sistema para gerenciamento de livros, utilizando Node.js com Express e Mongoose no back-end, integrado ao banco de dados MongoDB. O front-end é implementado com React, Next.js e Angular, permitindo testar múltiplos frameworks no cliente.
O objetivo principal é criar uma aplicação prática e funcional que simule um ambiente de mercado, desenvolvendo habilidades em tecnologias modernas para o desenvolvimento full stack.

## 🚀 Funcionalidades
### Back-end
Gerenciamento de livros (Create, Read e Delete).
Conexão com banco de dados MongoDB usando Mongoose.
Rotas para as seguintes operações:
- `GET /livros:` Listar todos os livros.
- `POST /livros:` Inserir um novo livro.
- `DELETE /livros/:id:` Excluir um livro pelo seu ID.

### Front-end
- **React:**
  - Integração com a API para listar, adicionar e excluir livros.
  - Componentes reutilizáveis para exibição e manipulação dos dados.
- **Next.js:**
  - Renderização estática e server-side.
  - Consumo da API para exibição e gerenciamento dos dados.
- **Angular:**
  - Estrutura modular para integração com a API.
  - Componentes para exibição e gerenciamento dos livros.

## 🛠️ Tecnologias Utilizadas
### Back-end
- Node.js
- Express
- Mongoose
- MongoDB
- CORS
### Front-end
- React.js
- Next.js
- Angular

## ⚙️ Requisitos para Execução
1. Ferramentas Necessárias:

- Node.js 
- MongoDB (local ou na nuvem)
- Visual Studio Code
- Navegador da Web
2. Bibliotecas e Dependências:
- Express
- Mongoose
- CORS
- Ferramentas do front-end (React, Next.js, Angular)

## 🛠️ Configuração e Execução
### 1. Configuração do Back-end
  1. Clone o repositório:
```
git clone https://github.com/Larissa-Gnandt/livro-servidor.git
cd livro-servidor
```
  2. Instale as dependências:
```
npm install
```
  3. Configure o MongoDB no arquivo modelo/conexao.js.
  4. Execute o servidor:
```
npm start
```
  5.Teste as rotas no Postman ou navegador:
- `http://localhost:3030/livros`

### 2. Configuração do Front-end
  1. Na pasta clientes, abra o projeto desejado (livros-react, livros-next, ou livros-angular).
  2. Instale as dependências:
```
npm install
```
  3. Execute o projeto:
```
npm start
```
  4. Acesse o front-end no navegador:
- `React: http://localhost:3000`
- `Next.js: http://localhost:3000`
- `Angular: http://localhost:4200`
