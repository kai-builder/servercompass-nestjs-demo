# NestJS Demo - Server Compass

> A production-ready NestJS application template for self-hosting with [Server Compass](https://servercompass.app/)

This demo shows how to deploy a NestJS (TypeScript/Node.js) application to any VPS using Server Compass. It renders environment variables on a dark-themed landing page and exposes a JSON endpoint — a practical starting point for anyone looking to self host NestJS apps.

## Quick Start

### Local Development

```bash
cp .env.example .env
npm install
npm run start:dev
```

Visit http://localhost:3000

### Docker

```bash
docker build -t servercompass-nestjs-demo .
docker run -p 3000:3000 --env-file .env.example servercompass-nestjs-demo
```

Visit http://localhost:3000

## Environment Variables

| Variable | Description | Default |
|---|---|---|
| `APP_NAME` | Application display name | `ServerCompass NestJS Demo` |
| `API_URL` | Server Compass API endpoint | `https://api.servercompass.app` |
| `ENVIRONMENT` | Deployment environment | `production` |
| `VERSION` | Application version | `1.0.0` |
| `DATABASE_URL` | PostgreSQL connection string | _(kept server-side)_ |
| `API_SECRET_KEY` | Secret API key | _(kept server-side)_ |
| `PORT` | HTTP port to listen on | `3000` |

`DATABASE_URL` and `API_SECRET_KEY` are intentionally kept server-side and never exposed to the browser.

## Endpoints

| Path | Description |
|---|---|
| `GET /` | Landing page with public env vars |
| `GET /api/env` | JSON response of public env vars |
| `GET /health` | Health check — returns `{"status":"ok"}` |

## Project Structure

```
servercompass-nestjs-demo/
├── src/
│   ├── main.ts            # Bootstrap: loads dotenv, mounts hbs views
│   ├── app.module.ts      # Root NestJS module
│   ├── app.controller.ts  # Routes: /, /api/env, /health
│   └── app.service.ts     # Reads and filters public env vars
├── views/
│   └── home.hbs           # Handlebars template (Server Compass dark theme)
├── Dockerfile             # Multi-stage build (builder + runtime)
├── .dockerignore
├── .env.example
├── nest-cli.json
├── tsconfig.json
└── package.json
```

## Deploy to Your VPS

Deploy this NestJS application to any VPS in minutes with [Server Compass](https://servercompass.app/) — the modern way to self host NestJS applications on your own infrastructure.

Server Compass handles:
- Docker image builds and registry pushes
- Environment variable injection
- Zero-downtime deployments
- Health monitoring and auto-restart

Visit [servercompass.app](https://servercompass.app/) to get started.

---

<!-- Keywords: self host nestjs, deploy nestjs to vps, install nestjs, nestjs docker deployment, nestjs self-hosted -->
