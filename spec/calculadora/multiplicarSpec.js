describe("Suítes de testes de multiplicação", () => {
  let calculadora = require("../../src/js/calculadora");

  it("deve retornar 6 para a multiplicação de 2 e 3", () => {
    expect(calculadora.multiplicar(2, 3)).toEqual(6);
  });

  it("deve retornar 6 para a multiplicação de 2 e 3 no formato texto", () => {
    expect(calculadora.multiplicar("2", "3")).toEqual(6);
  });

  it("deve retornar 4.5 para a multiplicação de 1.5 e 3", () => {
    expect(calculadora.multiplicar(1.5, 3)).toEqual(4.5);
    expect(calculadora.multiplicar("1.5", "3")).toEqual(4.5);
  });

  it("deve retornar 0 caso o primeiro parâmetro seja não numérico", () => {
    expect(calculadora.multiplicar(undefined, 4)).toEqual(0);
  });

  it("deve retornar 0 caso o segundp parâmetro seja não numérico", () => {
    expect(calculadora.multiplicar(4, undefined)).toEqual(0);
  });
});
