FROM node:current-alpine
WORKDIR /usr/src/app
COPY package.json pnpm-lock.yaml ./
RUN npm run ci
ENV NODE_ENV="production"
COPY . .
CMD [ "pnpm", "run", "prod" ]
