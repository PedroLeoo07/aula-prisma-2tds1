# Projeto Node.js + Prisma ORM

Este projeto é uma API RESTful desenvolvida em Node.js utilizando o ORM Prisma para integração com banco de dados PostgreSQL. O objetivo é gerenciar um catálogo de filmes, permitindo operações de CRUD (Create, Read, Update, Delete).

## Tecnologias Utilizadas
- Node.js
- Express
- Prisma ORM
- PostgreSQL
- dotenv

## Estrutura do Projeto
```
├── package.json
├── prisma/
│   ├── schema.prisma
│   └── migrations/
├── src/
│   ├── server.js
│   ├── controllers/
│   │   └── movies.controller.js
│   ├── models/
│   └── routes/
│       ├── index.routes.js
│       └── movies.routes.js
```

## Como Executar

1. **Clone o repositório:**
   ```bash
   git clone <url-do-repo>
   cd aulaPrisma
   ```

2. **Instale as dependências:**
   ```bash
   npm install
   ```

3. **Configure o banco de dados:**
   - Crie um banco PostgreSQL e configure a variável `DATABASE_URL` no arquivo `.env`.

4. **Execute as migrations do Prisma:**
   ```bash
   npx prisma migrate dev
   ```

5. **Inicie o servidor em modo desenvolvimento:**
   ```bash
   npm run dev
   ```

O servidor estará disponível em `http://localhost:4000`.

## Endpoints Principais
- `GET /movies` — Lista todos os filmes
- `POST /movies` — Cria um novo filme
- `PUT /movies/:id` — Atualiza um filme
- `DELETE /movies/:id` — Remove um filme

## Autor
Leonardo Dev

---
MIT License
