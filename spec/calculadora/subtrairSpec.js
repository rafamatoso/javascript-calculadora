describe("Suíte de testes de subtração", () => {
  let calculadora = require("../../src/js/calculadora");

  it("deve retornar 5 para a subtração de 8 e 3", () => {
    expect(calculadora.subtrair(8, 3)).toEqual(5);
  });

  it("deve retornar 5 para a subtração de 8 e 3 em formato de texto", () => {
    expect(calculadora.subtrair("8", "3")).toEqual(5);
  });

  it("deve retornar 4 para a subtração de 5.5 e 1.5", () => {
    expect(calculadora.subtrair(5.5, 1.5)).toEqual(4);
    expect(calculadora.subtrair("5.5", "1.5")).toEqual(4);
  });

  it("deve retornar 0 quando o primeiro parâmetro da subtração não for numérico", () => {
    expect(calculadora.subtrair(undefined, 1)).toEqual(0);
  });

  it("deve retornar 0 quando o segundo parâmetro da subtração não for numérico", () => {
    expect(calculadora.subtrair(1, undefined)).toEqual(0);
  });
});
