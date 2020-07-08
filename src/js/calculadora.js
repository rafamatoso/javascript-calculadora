let Calculadora = {
  ADICAO: "+",
  SUBTRACAO: "-",
  DIVISAO: "/",
  MULTIPLICACAO: "*",

  adicionar: (num1, num2) => {
    return Calculadora.calcular(num1, num2, Calculadora.ADICAO);
  },
  subtrair: (num1, num2) => {
    return Calculadora.calcular(num1, num2, Calculadora.SUBTRACAO);
  },
  multiplicar: (num1, num2) => {
    return Calculadora.calcular(num1, num2, Calculadora.MULTIPLICACAO);
  },
  dividir: (num1, num2) => {
    if (num2 === 0) {
      return "Erro";
    }
    return Calculadora.calcular(num1, num2, Calculadora.DIVISAO);
  },

  calcular: (num1, num2, op) => {
    let resultado = 0;

    if (isNaN(num1) || isNaN(num2)) {
      return 0;
    }

    num1 = parseFloat(num1);
    num2 = parseFloat(num2);

    switch (op) {
      case Calculadora.ADICAO:
        resultado = num1 + num2;
        break;
      case Calculadora.SUBTRACAO:
        resultado = num1 - num2;
        break;
      case Calculadora.DIVISAO:
        resultado = num1 / num2;
        break;
      case Calculadora.MULTIPLICACAO:
        resultado = num1 * num2;
        break;
      default:
        resultado = 0;
        break;
    }
    return resultado;
  },
};

if (typeof module !== "undefined" && typeof module.exports !== "undefined") {
  module.exports = Calculadora;
}
