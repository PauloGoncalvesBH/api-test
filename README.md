# Teste de API

[![library: frisby.js](https://img.shields.io/badge/library-frisby.js-blue)](https://www.frisbyjs.com)

 Um simples material para estudo de testes de APi.

## Pré-requisitos

- [Git](https://git-scm.com/download/) e [Node.js](https://nodejs.org/en/download/) instalados.

## Instalando as dependências e executando os testes

Todos os comandos abaixo são feitos no _prompt de comando_.

**1** - Faça um clone do repositório e acesse o diretório criado pelo clone:

```sh
git clone https://github.com/PauloGoncalvesBH/api-test.git && cd api-test
```

**2** - Instale as dependências do projeto:

```sh
npm install
```
## Executando os testes

Para rodar os testes envie o seguinte comando:

```sh
npm test
```

## Resultado dos testes

Há dois modos de verificar o resultado dos testes:

1. Através do report HTML, digitando o seguinte comando:

```sh
npm run report
```

2. Pelo prompt de comando, aonde você verá um resultado parecido com esse ao fim da execução dos testes:

```sh
$ npm test

> test-api@1.0.0 test C:\test-api
> jest

 PASS  __tests__/test.spec.js
  Requisições utilizando token
    √ GET aluno 2, validar status e id (27ms)
    √ GET turma 1, validar status e contrato (12ms)
    √ GET turma 2 GET horário, validar status e id [Requisições aninhadas] (13ms)
    √ POST auth/registrar POST auth/login, validar endpoints de autenticação [Requisições aninhadas] (12ms)

Test Suites: 1 passed, 1 total
Tests:       4 passed, 4 total
Snapshots:   0 total
Time:        2.8s, estimated 3s
Ran all test suites.

> test-api@1.0.0 posttest C:\test-api
> allure generate --clean

Report successfully generated to allure-report
```
