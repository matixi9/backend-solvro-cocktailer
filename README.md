# 🍹 Solvro Cocktailer API

[![NestJS](https://img.shields.io/badge/NestJS-E0234E?style=for-the-badge&logo=nestjs&logoColor=white)](https://nestjs.com/)
[![TypeScript](https://img.shields.io/badge/TypeScript-007ACC?style=for-the-badge&logo=typescript&logoColor=white)](https://www.typescriptlang.org/)
[![PostgreSQL](https://img.shields.io/badge/PostgreSQL-316192?style=for-the-badge&logo=postgresql&logoColor=white)](https://www.postgresql.org/)
[![Swagger](https://img.shields.io/badge/Swagger-85EA2D?style=for-the-badge&logo=swagger&logoColor=black)](https://swagger.io/)

Kompleksowe backendowe REST API do zarządzania koktajlami i ich składnikami, zrealizowane jako zadanie rekrutacyjne do koła naukowego Solvro. 

Aplikacja pozwala na pełne zarządzanie bazą drinków z uwzględnieniem dokładnych proporcji składników (wymodelowanych za pomocą kaskadowych relacji w bazie danych) oraz dostarcza paginowane endpointy z walidacją wejściową.

---

## 🛠️ Architektura i Technologie

Projekt został oparty na nowoczesnym stosie technologicznym dla środowiska Node.js:
- **Framework:** NestJS (TypeScript)
- **Baza danych:** PostgreSQL
- **ORM:** TypeORM
- **Walidacja Danych:** `class-validator` oraz `class-transformer` (globalny `ValidationPipe`)
- **Dokumentacja API:** Swagger (OpenAPI)
- **Konteneryzacja:** Docker

---

## 🗄️ Model Danych (Domena)

Aplikacja opiera się na trzech głównych encjach w relacyjnej bazie danych:

1. **Ingredient (Składnik)** - przechowuje podstawowe informacje o dostępnych składnikach (m.in. nazwę, opis, status bycia alkoholem, zdjęcie).
2. **Cocktail (Koktajl)** - główna encja drinka, zawierająca nazwę, kategorię oraz dokładną instrukcję przygotowania.
3. **CocktailIngredient (Tabela Złączeniowa / Proporcje)** - encja realizująca relację *Many-to-Many* z dodatkową kolumną `amount`. Pozwala na przypisanie konkretnej ilości danego składnika do konkretnego koktajlu (np. "50ml wódki" lub "2 plasterki cytryny").

---

## 🚀 Uruchomienie projektu lokalnie

### 1. Wymagania wstępne
Aby uruchomić projekt na swoim komputerze, upewnij się, że posiadasz zainstalowane:
- **Node.js** (w wersji 18+ lub nowszej)
- **NPM** lub **Yarn**
- **Docker Desktop** (do bezproblemowego uruchomienia bazy danych)

### 2. Instalacja zależności
Sklonuj repozytorium na swój dysk, otwórz terminal w głównym folderze projektu i wykonaj polecenie:
```bash
npm install
```

### 3. Konfiguracja Bazy Danych (Docker)
Aplikacja wymaga bazy danych PostgreSQL. Najszybszym sposobem na jej uruchomienie jest skorzystanie z Dockera. Poniższa komenda pobierze obraz, utworzy użytkownika, hasło oraz docelową bazę `cocktailer_db`, na którą nasłuchuje aplikacja na porcie `5432`:
```bash
docker run --name cocktailer-postgres -e POSTGRES_USER=postgres -e POSTGRES_PASSWORD=haslo -e POSTGRES_DB=cocktailer_db -p 5432:5432 -d postgres
```

### 4. Uruchomienie Serwera API
Gdy baza danych jest aktywna, uruchom serwer NestJS w trybie deweloperskim (z automatycznym przeładowywaniem zmian):
```bash
npm run start:dev
```
*Uwaga: Dzięki ustawieniu `synchronize: true` w konfiguracji TypeORM, aplikacja przy pierwszym uruchomieniu automatycznie utworzy wszystkie niezbędne tabele w bazie danych.*

---

## 📖 Dokumentacja API (Swagger)

Aplikacja posiada wbudowaną, interaktywną dokumentację Swagger, która umożliwia testowanie wszystkich endpointów (GET, POST, PATCH, DELETE) bezpośrednio z poziomu przeglądarki, bez konieczności używania narzędzi takich jak Postman.

Po uruchomieniu serwera, dokumentacja jest dostępna pod adresem:  
👉 **http://localhost:3000/api**

---

## 📋 Lista wymagań i postęp prac (Task List)

Zadanie rekrutacyjne zostało podzielone na cele podstawowe oraz dodatkowe ("Nice to have"). Poniżej znajduje się aktualny status realizacji:

### 🎯 Wymagania podstawowe i Główne funkcjonalności
- [x] Stworzenie projektu REST API w NestJS (TypeScript).
- [x] Konfiguracja relacyjnej bazy danych (PostgreSQL + TypeORM).
- [x] Wymodelowanie encji Składnika (`Ingredient` - id, nazwa, opis, czy jest alkoholowy, zdjęcie).
- [x] Wymodelowanie encji Koktajlu (`Cocktail` - id, nazwa, kategoria, instrukcja).
- [x] Prawidłowe wymodelowanie relacji i proporcji (encja złączeniowa `CocktailIngredient` i kaskadowy zapis).
- [x] Implementacja pełnego CRUDa dla koktajli i składników.
- [x] Staranne zastosowanie zasad REST (odpowiednie endpointy i struktury DTO).
- [x] Globalna walidacja wejścia za pomocą globalnego `ValidationPipe` (odrzucanie błędnych payloadów).
- [x] Implementacja globalnej paginacji wyników (parametry `page` oraz `limit` łapane z URL).
- [x] Zwracanie powiązanych danych w GET (pobieranie wszystkich składników i ich proporcji zagnieżdżonych w obiekcie koktajlu).

### 🌟 Nice to have (Dodatkowe funkcjonalności)
- [x] Wygenerowana automatyczna dokumentacja API (Swagger / OpenAPI).
- [ ] Wsparcie dla złożonego filtrowania i sortowania (np. szukanie bezalkoholowych koktajli zawierających miętę, sortowanie po nazwie).
- [ ] Autoryzacja i użytkownicy (Logowanie oraz Rejestracja z użyciem JWT).
- [ ] Różne role użytkowników (podział na Role: User oraz Admin).
- [ ] Powiązanie koktajlu z jego autorem (relacja User -> Cocktail).
- [ ] Uprawnienia: edycja/usuwanie koktajlu dozwolona tylko dla osoby, która go dodała, lub dla Admina.
- [ ] Oceny i recenzje: każdy widzi koktajle, ale tylko zalogowany może zostawić recenzję.
- [ ] Testy automatyczne (jednostkowe, integracyjne lub e2e).
- [ ] Wygenerowany i załączony schemat (screen) diagramu ERD bazy danych.

---
**Autor projektu:** Mateusz Reszel  
**Licencja:** MIT