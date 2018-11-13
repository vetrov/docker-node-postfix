FROM node:10

RUN apt-get update \
    && DEBIAN_FRONTEND=noninteractive apt-get install -y postfix \
    && apt-get install -y \
        mailutils \
        vim \
        net-tools

WORKDIR /app
COPY . .
RUN npm install

CMD bash entrypoint.sh