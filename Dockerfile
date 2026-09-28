# Build stage
FROM oven/bun:1 AS build
WORKDIR /app

COPY package.json bun.lock ./
RUN bun install --frozen-lockfile

COPY . .

# Build for a Node server (Railway) instead of the default edge target
ENV NITRO_PRESET=node_server
RUN bun run build

# Run stage
FROM oven/bun:1
WORKDIR /app

COPY --from=build /app/dist ./dist

ENV PORT=3000
EXPOSE 3000

CMD ["bun", "dist/server/index.mjs"]
