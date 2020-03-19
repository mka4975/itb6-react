FROM node:12.16-slim as build-deps

ENV NPM_CONFIG_LOGLEVEL warn

ADD . /home/nodeuser/app
ENV HOME /home/nodeuser
WORKDIR /home/nodeuser/app

RUN useradd -ms /bin/bash nodeuser
RUN chown -R nodeuser:nodeuser /home/nodeuser
USER nodeuser
COPY package.json package-lock.json ./

ENV NODE_PATH=/home/nodeuser/app/node_modules
ENV PATH=$PATH:/home/nodeuser/app/node_modules/.bin

RUN npm install && npm run build && rm -r /home/nodeuser/app/node_modules

FROM nginx:1.17-alpine
RUN rm -rf /etc/nginx/conf.d
COPY conf /etc/nginx
COPY --from=build-deps /home/nodeuser/app/public /usr/share/nginx/html

EXPOSE 3000
CMD ["nginx", "-g", "daemon off;"]
