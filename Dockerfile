FROM --platform=$BUILDPLATFORM node:lts as COMPILER
WORKDIR /app
COPY . .
RUN npm i
RUN yarn build

FROM --platform=$BUILDPLATFORM node:lts as PRODUCTION
WORKDIR /app
COPY --from=COMPILER /app .
RUN npm i --omit=dev
RUN rm -rf src
RUN rm tailwind.config.js postcss.config.js pnpm-lock.yaml vitest.config.ts tsconfig.json yarn-error.log yarn.lock .dockerignore
CMD yarn start

LABEL description='Avraham\'s portfolio image'