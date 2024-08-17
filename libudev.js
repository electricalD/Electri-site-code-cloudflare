FROM node:20.9.0
WORKDIR /src
COPY . /src
#RUN apk add git && \
RUN apt-get install git && npm install -g npm@10.2.3 && \
         yarn add storybook-addon-playwright @storybook/addon-knobs --dev
#RUN chown -R node. /src
#USER node
RUN npm install --legacy-peer-deps && npm rebuild --arch=x64 --platform=linux --libc=musl sharp
VOLUME /src/playwright-report
VOLUME /src/build
VOLUME /src/node_modules
VOLUME /home/node/.npm/_logs/
EXPOSE 3000/tcp
ENTRYPOINT ["npm", "run"]