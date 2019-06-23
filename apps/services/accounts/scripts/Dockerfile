######################################################################
FROM node:12-alpine as dev-dependencies
######################################################################
WORKDIR /app

COPY package.json yarn.lock ./

RUN yarn --no-cache --ignore-optional --frozen-lockfile

######################################################################
FROM node:12-alpine as builder
######################################################################
WORKDIR /app

COPY --from=dev-dependencies /app /app
COPY . .

ENV NODE_ENV production

RUN ng build services-accounts --prod

EXPOSE 3000

ENTRYPOINT ["node", "dist/apps/services/accounts/main.js"]


