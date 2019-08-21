const faker = require("faker");
const frisby = require("frisby");
const Joi = frisby.Joi;

describe("Requisições utilizando token", () => {
  const porta = 3000;

  // Autenticar e adicionar o token no header de todas as requisições
  beforeAll(() => {
    return frisby
      .post(`http://localhost:${porta}/auth/login`, {
        email: "paulo@email.com",
        password: "paulo"
      })
      .expect("status", 200)
      .then(response => {
        frisby.globalSetup({
          request: {
            headers: {
              Authorization: `Bearer ${response.json.token}`
            }
          }
        });
      });
  });

  it("GET aluno 2, validar status e id", () => {
    const idAluno = 2;
    return frisby
      .get(`http://localhost:${porta}/alunos/${idAluno}`)
      .expect("status", 200)
      .expect("json", {
        id: idAluno
      });
  });

  it("GET turma 1, validar status e contrato", () => {
    return frisby
      .get(`http://localhost:${porta}/turmas/1`)
      .expect("status", 200)
      .expect("jsonTypes", {
        id: Joi.number(),
        descricao: Joi.string(),
        idHorario: Joi.number(),
        idAluno: Joi.number()
      });
  });

  it("GET turma 2 GET horário, validar status e id [Requisições aninhadas]", () => {
    return frisby
      .get(`http://localhost:${porta}/turmas/2`)
      .expect("status", 200)
      .then((res) => {
        let idHorario = res.json.idHorario;
        return frisby
          .get(`http://localhost:${porta}/horarios/${idHorario}`)
          .expect("status", 200)
          .expect("json", {
            id: idHorario
          });
      });
  });

  it("POST auth/registrar POST auth/login, validar endpoints de autenticação [Requisições aninhadas]", () => {
    const newUserEmail = faker.internet.email()
    const newUserPassword = faker.internet.password()
    json = {
      email: newUserEmail,
      password: newUserPassword
    }
    return frisby
      .post(`http://localhost:${porta}/auth/registrar`, json)
      .expect("status", 201)
      .then(() => {
        return frisby
          .post(`http://localhost:${porta}/auth/login`, json)
          .expect("status", 200);
      });
  });
});
