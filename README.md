# Teste de API Rest

[![jest](https://jestjs.io/img/jest-badge.svg)](https://npmjs.com/package/jest)
[![library: frisby.js](https://img.shields.io/badge/library-frisby.js-blue)](https://npmjs.com/package/frisby)
[![assertion library: chai](https://img.shields.io/badge/assertion%20library-chai-blue)](https://npmjs.com/package/chai)



 Material para estudo de testes de API utilizando [frisby](https://npmjs.com/package/frisby), [chai](https://npmjs.com/package/chai) e [jest](https://npmjs.com/package/jest).

## Pré-requisitos

- [Git](https://git-scm.com/download/) e [Node.js](https://nodejs.org/en/download/) instalados.

## Iniciando o ambiente

Os testes serão realizados em cima dos endpoints disponibilizados pelo [ServeRest](https://npmjs.com/package/serverest).

Para iniciar o ambiente que será utilizado, execute o seguinte comando:

```sh
npx serverest
```

## Fazendo o clone e instalando as dependências

Execute os comandos abaixos em uma nova instância do terminal, diferente da que foi utilizada para iniciar o _ServeRest_.

**1** - Faça um clone do repositório e acesse o diretório criado pelo clone:

```sh
git clone https://github.com/PauloGoncalvesBH/api-test.git && cd api-test
```

**2** - Instale as dependências do projeto:

```sh
npm install
```

## Executando os testes

**3** - Para rodar os testes envie o seguinte comando:

```sh
npm test
```

> **Dica:** Pode executar `npm it` para realizar a instalação e execução dos testes.

## Resultado dos testes

Há dois modos de verificar o resultado dos testes:

- Através do report HTML, digitando o seguinte comando:

```sh
npm run report
```

- Pelo prompt de comando, aonde você verá um resultado parecido com esse ao fim da execução dos testes:

```sh
$ npm test

> test-api@ test /home/paulo/git/api-test
> jest api/

 PASS  API/test.spec.js
  Requisições utilizando token
    ✓ GET aluno 2, validar status e id (11ms)
    ✓ GET aluno 1 pelo id, validar status e nome (9ms)
    ✓ GET turma 1, validar status e contrato (8ms)
    ✓ GET turma 2 GET horário, validar status e id [Requisições aninhadas] (12ms)
    ✓ POST auth/registrar POST auth/login, validar endpoints de autenticação [Requisições aninhadas] (5ms)

Test Suites: 1 passed, 1 total
Tests:       5 passed, 5 total
Snapshots:   0 total
Time:        0.835s, estimated 1s
Ran all test suites matching /api\//i.
```

---
[MIT License](./LICENSE)