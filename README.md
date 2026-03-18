# 🍹 Solvro Cocktailer API

[![NestJS](https://img.shields.io/badge/NestJS-E0234E?style=for-the-badge&logo=nestjs&logoColor=white)](https://nestjs.com/)
[![TypeScript](https://img.shields.io/badge/TypeScript-007ACC?style=for-the-badge&logo=typescript&logoColor=white)](https://www.typescriptlang.org/)
[![PostgreSQL](https://img.shields.io/badge/PostgreSQL-316192?style=for-the-badge&logo=postgresql&logoColor=white)](https://www.postgresql.org/)
[![Swagger](https://img.shields.io/badge/Swagger-85EA2D?style=for-the-badge&logo=swagger&logoColor=black)](https://swagger.io/)

A comprehensive backend REST API for managing cocktails and their ingredients, developed as a recruitment task for the Solvro science club. 

The application allows for full management of a drinks database, taking into account exact ingredient proportions (modeled using cascading relationships in the database), and provides paginated endpoints with strict input validation.

---

## 🛠️ Architecture and Technologies

The project is built on a modern tech stack for the Node.js environment:
- **Framework:** NestJS (TypeScript)
- **Database:** PostgreSQL
- **ORM:** TypeORM
- **Data Validation:** `class-validator` and `class-transformer` (global `ValidationPipe`)
- **API Documentation:** Swagger (OpenAPI)
- **Containerization:** Docker

---

## 🗄️ Data Model (Domain)

The application is based on three main entities in a relational database:

1. **Ingredient** - stores basic information about available ingredients (e.g., name, description, alcoholic status, photo).
2. **Cocktail** - the main drink entity, containing the name, category, and exact preparation instructions.
3. **CocktailIngredient (Pivot Table / Proportions)** - an entity implementing a *Many-to-Many* relationship with an additional `amount` column. It allows assigning a specific quantity of an ingredient to a specific cocktail (e.g., "50ml of vodka" or "2 slices of lemon").

---

## 🚀 Running the project locally

### 1. Prerequisites
To run the project on your machine, make sure you have installed:
- **Node.js** (v18+ or newer)
- **NPM** or **Yarn**
- **Docker Desktop** (for a seamless database setup)

### 2. Installation
Clone the repository to your local drive, open the terminal in the main project folder, and run:
```bash
npm install
```

### 3. Database Configuration (Docker)
The application requires a PostgreSQL database. The fastest way to start it is by using Docker. The following command will download the image, create a user, password, and the target `cocktailer_db` database, which the application listens to on port `5432`:
```bash
docker run --name cocktailer-postgres -e POSTGRES_USER=postgres -e POSTGRES_PASSWORD=haslo -e POSTGRES_DB=cocktailer_db -p 5432:5432 -d postgres
```

### 4. Running the API Server
Once the database is up and running, start the NestJS server in development mode (with hot-reload):
```bash
npm run start:dev
```
*Note: Thanks to the `synchronize: true` setting in the TypeORM configuration, the application will automatically create all necessary tables in the database upon the first startup.*

---

## 📖 API Documentation (Swagger)

The application features built-in, interactive Swagger documentation, allowing you to test all endpoints (GET, POST, PATCH, DELETE) directly from your browser, without the need for tools like Postman.

Once the server is running, the documentation is available at:  
👉 **http://localhost:3000/api**

---

## 📋 Task List and Progress

The recruitment task was divided into core requirements and additional ("Nice to have") features. Below is the current implementation status:

### 🎯 Core Requirements and Features
- [x] Create a REST API project in NestJS (TypeScript).
- [x] Configure a relational database (PostgreSQL + TypeORM).
- [x] Model the `Ingredient` entity (id, name, description, isAlcoholic, photo).
- [x] Model the `Cocktail` entity (id, name, category, instruction).
- [x] Properly model relationships and proportions (`CocktailIngredient` pivot entity with cascade saving).
- [x] Implement full CRUD functionality for cocktails and ingredients.
- [x] Carefully apply REST principles (proper endpoints and DTO structures).
- [x] Global input validation using a global `ValidationPipe` (rejecting invalid payloads).
- [x] Implement global result pagination (`page` and `limit` query parameters).
- [x] Return relational data in GET requests (fetching all ingredients and their proportions nested within the cocktail object).

### 🌟 Nice to have (Additional Features)
- [x] Generate automated API documentation (Swagger / OpenAPI).
- [x] Support for complex filtering and sorting (e.g., searching for non-alcoholic cocktails, sorting by name).
- [x] Authorization and users (Login and Registration using JWT).
- [x] Different user roles (Role breakdown: User and Admin).
- [x] Link cocktail to its author (User -> Cocktail relationship).
- [x] Permissions: editing/deleting a cocktail allowed only for the creator or an Admin.
- [ ] Ratings and reviews: everyone can view cocktails, but only logged-in users can leave a review.
- [ ] Automated tests (unit, integration, or e2e).
- [ ] Generate and attach an ERD database schema (screenshot).

---
**Author:**  Mateusz Reszel  
**License:** MIT