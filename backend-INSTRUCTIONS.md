# Teste Backend

## Objetivo

O objetivo do teste é:

- Construir uma API para manutenção de laboratórios e exames.

## Contexto

Estamos desenvolvendo uma aplicação para as seguintes situações:

- Laboratório:
  - cadastrar um novo laborário; POST /laboratorio
  - obter uma lista de laboratórios ativos; GET /laboratorio
  - atualizar um laboratório existente; PUT /laboratorio
  - remover logicamente um laboratório ativo. PUT /laboratorio

- Exames:
  - cadastrar um novo exame; POST /exame
  - obter uma lista de exames ativos; GET /exame
  - atualizar um exame existente; PUT /exame/atualizar
  - remover logicamente um exame ativo. PUT /exame/remover

- Associação:
  - associar um exame ativo à um laboratório ativo; PUT /exame/associar
  - desassociar um exame ativo de um laboratório ativo; PUT /exame/desassociar

  **Importante:**

  - Um exame pode estar associado a mais de um laboratório; ARRAY
  - O cadastro de um laboratório/exame é considerado ativo e recebe um `id` gerado automaticamente.

### Informações

- Laboratório
  - nome
  - endereço
  - status [ativo, inativo]

- Exame
  - nome
  - tipo [analise clinica, imagem]
  - status [ativo, inativo]

## Funcionalidades extras

- Possibilidade de executar cadastro, atualização e remoção em lote;
- Endpoint que faz a busca por nome do exame e retorna todos os laboratorios associados a esse exame.

## Requisitos técnicos

- Desenvolver usando *Java 8+*
- Serviço deve respeitar os princípios RESTFul
- Criar um `README.md` (arquitetura, instruções de uso, entre outros)

## Diferenciais

- Publicação do ambiente em um serviço cloud de hospedagens (Heroku, AWS, GCP, etc)
- Configurar a aplicação para rodar em um container
- Documentação da API

Se tiver alguma dúvida, fique a vontade para enviar um email para seu entrevistador!

Boa sorte! :)
