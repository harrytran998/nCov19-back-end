FROM node:12.16.1

COPY . /opt/app

WORKDIR /opt/app

RUN yarn

CMD yarn watch