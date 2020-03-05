/*
  A função average recebe uma lista de parâmetros (tamanho variável)
  e retorna a média dos valores recebidos
  Caso a função receba algum valor não número, o valor undefined deve ser retornado
*/

function average(...params) {
  const isNumber = params.every(x => typeof x === 'number');
  if (isNumber) {
    const totalSum = params.reduce((accumulator, currentValue) => accumulator + currentValue);
    return totalSum / params.length;
  }
  return undefined;
}

module.exports = average;
