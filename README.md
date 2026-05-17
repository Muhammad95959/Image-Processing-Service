# ShutterNode

Monorepo containing two main projects: a `backend` (API + worker) and a `frontend` (Next.js UI).

The backend implements a production-ready **Node.js + TypeScript** API for user authentication and image processing. The frontend is a minimal Next.js application that consumes the backend APIs.

---

##  Features

- **JWT Authentication** (Register / Login / Profile)
- **Image Uploads** using Multer + Cloudinary
- **Image Transformations** (resize, crop, rotate, format, filters)
- **Paginated Image Listing** per user
- **Background Worker** (BullMQ + Redis)
- **Prisma ORM** with SQLite
- **Centralized Error Handling**
  **Scalable Architecture** (Controller / Service / Model)

---

## Project Structure

```
frontend/
backend/
  ├── package.json
  ├── tsconfig.json
  ├── prisma/
  │   ├── schema.prisma
  │   └── migrations/
  └── src/
      ├── app.ts
      ├── server.ts
      ├── worker.ts
      └── ...
```

- `backend/src/app.ts` sets up routes and middleware
- `backend/src/server.ts` starts the HTTP server
- `backend/src/worker.ts` runs background queue jobs

---

## Tech Stack

- **Node.js**
- **TypeScript**
- **Express**
- **Prisma ORM**
- **SQLite**
- **Cloudinary**
- **Multer**
- **JWT**
- **BullMQ**
- **Redis**

---

## Environment Variables

Create a `.env` file for the `backend` (example):

```env
DATABASE_URL="file:./dev.db"
JWT_SECRET=your_jwt_secret
CLOUDINARY_CLOUD_NAME=xxxx
CLOUDINARY_API_KEY=xxxx
CLOUDINARY_API_SECRET=xxxx
REDIS_URL=redis://localhost:6379
```

---

## Installation

This repository is split into two projects. Install dependencies either per-package or using a workspace-aware package manager (e.g. `pnpm`).

Per-package (works with `npm` / `yarn`):

```bash
# Backend
cd backend && npm install

# Frontend
cd ../frontend && npm install
```

Or, if you use `pnpm` with workspaces from the repository root:

```bash
pnpm install
```

### Backend - generate DB client and apply migrations

```bash
cd backend
npx prisma generate
npx prisma migrate dev --name init
```

---

## Running the Project


## Running the Project

Run each part separately depending on what you need to work on.

Backend (development):

```bash
cd backend
npm run dev
```

Backend (production build):

```bash
cd backend
npm run build
npm start
```

Worker (background jobs):

```bash
cd backend
npm run start_worker
```

Frontend (development):

```bash
cd frontend
npm run dev
```

---


- Frontend URL: http://localhost:3000
- API base URL: http://localhost:5000 (adjust with `NEXT_PUBLIC_API_BASE_URL` in `frontend/.env.local`)

### Frontend features

- Register / Login / Profile (`/users/*`)
- Image upload (`POST /images`)
- Upload status (`GET /images/:id/status`)
- Get image by public ID (`GET /images/:publicId`)
- Paginated images (`GET /images?page=&limit=`)
- Transform image (`POST /images/transform`)

---

## Authentication Endpoints

| Method | Endpoint | Description |
|------|--------|------------|
| POST | `/users/register` | Register user |
| POST | `/users/login` | Login |
| GET | `/users/profile` | Get profile (JWT required) |

---

## Image Endpoints

| Method | Endpoint | Description |
|------|--------|------------|
| POST | `/images` | Upload image (JWT + multipart) |
| POST | `/images/transform` | Transform image |
| GET | `/images?page=1&limit=10` | Paginated images (JWT) |
| GET | `/images/:publicId` | Get image by ID |

---

## 🧠 Architecture Principles

- **Controllers**: HTTP layer only
- **Services**: Business logic
- **Models**: Database access (Prisma)
- **Utils**: Shared helpers
- **Middlewares**: Auth & validation


## Error Handling

All errors go through a centralized error handler:

```json
{
  "status": "error",
  "message": "Error description"
}
```

