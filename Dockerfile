FROM centos:7

RUN yum update -y

RUN curl -sL https://rpm.nodesource.com/setup_10.x | bash -
RUN yum install -y nodejs

WORKDIR /home

RUN mkdir dasa-code-challenge

WORKDIR /home/dasa-code-challenge

COPY ./bin /home/dasa-code-challenge/bin
COPY ./src /home/dasa-code-challenge/src
COPY ./.env /home/dasa-code-challenge
COPY ./app.js /home/dasa-code-challenge
COPY ./package.json /home/dasa-code-challenge
COPY ./package-lock.json /home/dasa-code-challenge
COPY ./swagger.json /home/dasa-code-challenge

RUN npm install

ENTRYPOINT npm start