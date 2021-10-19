FROM node:14-alpine as builder
# FROM strapi/base

WORKDIR /app

COPY yarn.lock ./

COPY package*.json ./

RUN yarn install

COPY . .

# RUN export NODE_OPTIONS="--max-old-space-size=8192"
RUN yarn build


FROM node:14-alpine

WORKDIR /app


COPY --from=builder /app /app

ENV PORT=8001
ENV STRAPI_LOG_LEVEL=debug
ENV NODE_ENV=production

EXPOSE ${PORT}

CMD [ "yarn", "start" ]
