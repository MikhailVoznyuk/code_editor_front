# --- deps stage ---
FROM node:20-alpine AS deps
WORKDIR /app

COPY package.json package-lock.json* ./

RUN if [ -f yarn.lock ]; then yarn --frozen-lockfile;     elif [ -f package-lock.json ]; then npm ci;     elif [ -f pnpm-lock.yaml ]; then npm i -g pnpm && pnpm i --frozen-lockfile;     else yarn; fi

# --- builder stage ---
FROM deps AS builder

COPY . .

RUN yarn build || npm run build

# --- runner stage ---
FROM node:20-alpine AS runner
WORKDIR /app
ENV NODE_ENV=production
ENV PORT=3000
ENV HOSTNAME=0.0.0.0

EXPOSE 3000

COPY --from=builder /app .
CMD ["npm", "run", "start"]





