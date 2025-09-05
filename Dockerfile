FROM oven/bun:slim

WORKDIR /src

COPY ./src/package.json ./src/bun.lock ./

RUN bun install --frozen-lockfile

COPY ./src ./

EXPOSE 3000

CMD ["bun", "dev"]