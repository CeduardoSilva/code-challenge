# Code Challenge

Teste para a vaga de Desenvolvedor Backend. A seguir estão descritos a arquitetura utilizada no projeto assim como requisitos, documentação da API e instruções de deploy.

## Requisitos
----------

Para rodar a aplicação localmente é necessário:
* [Node.JS](https://nodejs.org/en/download/), versão >= 12

Para rodar a partir de um Docker container é necessário:
* [Docker](https://www.docker.com/products/docker-desktop), versão >= 19

## Arquitetura
----------

A aplicação foi criada seguindo conceitos de Arquitetura Limpa [(Clean Architecture)](https://blog.cleancoder.com/uncle-bob/2012/08/13/the-clean-architecture.html) que visa produzir sistemas altamente desacoplados e testáveis procurando reduzir dependências de UI, bancos de dados, frameworks e agentes externos no geral. O foco é que a lógica de negócios não saiba nada sobre o mundo externo.


## Acessando a aplicação publicada no Digital Ocean
----------

A aplicação tem uma instância hospedada no Digital Ocean. Para visualizar a documentação da API e testa-la basta acessar: http://178.128.195.250:3000/api-docs/# e no menu servers escolher `http://178.128.195.250:3000/ - Digital Ocean server`.


## Rodando a aplicação localmente
----------

Para rodar a aplicação localmente basta executar os  comandos abaixo no diretório raiz do projeto:

Para instalar as dependências:
```
npm install
```

Para rodar a aplicação:
```
npm start
```

Caso a aplicação execute com sucesso você deve ver no terminal uma saída semelhante a essa:

```
> dasa-code-challenge@0.0.0 start /Users/ceduardo/Documents/Projetos/dasa-code-challenge
> node ./bin/www

Listening on port 3000
MongoDB Connected
```

## Rodando a aplicação a partir de um container
----------

### Gerando a imagem da aplicação

Para rodar a aplicação a partir de um container primeiro é necessário gerar a imagem docker da aplicação com o seguinte comando no diretório raiz da aplicação:

```
docker build --tag dasa-challenge:1.0 .
```

Caso a imagem seja gerada com sucesso você deve ver ela listada como `dasa-challenge` ao executar o comando:

```
docker images
```

### Rodando o container

Para rodar o container basta executar o comando abaixo:

```
docker run -d --name dasa-challenge -p 3000:3000 -e AUTH=no dasa-challenge:1.0
```

## Documentação da API
----------

A documentação da API foi criada utilizando [Swagger UI](https://swagger.io/tools/swagger-ui/). Para acessa-la basta rodar a aplicação e navegar para http://localhost:3000/api-docs/#/. 


## Alterando o banco de dados da aplicação
----------

Note, no arquivo `./.env`, que a aplicação está configurada para rodar na porta `3000` e seu banco de dados está apontado para um MongoDB criado especificamente para esse teste e hospedado no [Digital Ocean](https://www.digitalocean.com). Caso queira utilizar outro MongoDB basta alterar o `.env` e reconstruir a imagem da aplicação ou roda-la localmente.

## Rodando testes automatizados
----------

Para rodar os testes automatizados basta executar o seguinte comando no diretório raiz da aplicação:

```
npm test
```
