FROM node:lts-alpine
WORKDIR /app

RUN apk add --no-cache dumb-init

COPY ./package*.json ./
RUN npm i

COPY . .
RUN npm run build

ENV HOST=0.0.0.0
ENV PORT=7000
ENV NITRO_HOST=0.0.0.0
ENV NITRO_PORT=7000

ENTRYPOINT ["dumb-init"]

CMD ["node", "./.output/server/index.mjs"]
