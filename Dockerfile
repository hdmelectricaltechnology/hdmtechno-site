# --- Build stage
FROM node:20-alpine AS builder
WORKDIR /app
COPY package.json package-lock.json* pnpm-lock.yaml* yarn.lock* ./
RUN if [ -f pnpm-lock.yaml ]; then corepack enable && pnpm i;     elif [ -f yarn.lock ]; then yarn install --frozen-lockfile;     elif [ -f package-lock.json ]; then npm ci;     else npm install; fi
COPY . .
RUN npm run build || yarn build || (corepack enable && pnpm build)

# --- Runtime stage
FROM node:20-alpine
ENV NODE_ENV=production
WORKDIR /app
COPY --from=builder /app/package.json ./package.json
COPY --from=builder /app/.next ./.next
COPY --from=builder /app/public ./public
RUN npm install --omit=dev || true
EXPOSE 3000
CMD ["node","node_modules/next/dist/bin/next","start","-p","3000"]
