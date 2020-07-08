describe("Suítes de testes de divisão", () => {
  let calculadora = require("../../src/js/calculadora");

  it("deve retornar 2 para a divisão de 6 por 3", () => {
    expect(calculadora.dividir(6, 3)).toEqual(2);
  });

  it("deve retornar 2 para a divisão de 6 por 3 no formato texto", () => {
    expect(calculadora.dividir("6", "3")).toEqual(2);
  });

  it("deve retornar 1.5 para a divisão de 4.5 por 3", () => {
    expect(calculadora.dividir(4.5, 3)).toEqual(1.5);
    expect(calculadora.dividir("4.5", "3")).toEqual(1.5);
  });

  it("deve retornar 'Erro' para a divisão por 0", () => {
    expect(calculadora.dividir(5, 0)).toEqual("Erro");
  });

  it("deve retornar 0 se o primeiro parâmetro for não numérico", () => {
    expect(calculadora.dividir(undefined, 1)).toEqual(0);
  });

  it("deve retornar 0 se o segundo parâmetro for não numérico", () => {
    expect(calculadora.dividir(1, undefined)).toEqual(0);
  });
});
