FROM node:10.16.0

ENV APP_ROOT /src
ENV BASE_URL http://localhost:3000
ENV MODE "[DEV]"
ENV DEV_API_URL http://qa-cv-api.adjektiv.com.br


RUN mkdir ${APP_ROOT}
WORKDIR ${APP_ROOT}
ADD . ${APP_ROOT}

# RUN npm install
# RUN npm run build

ENV HOST 0.0.0.0
