/*
  A função printBinary recebe um parâmetro inteiro ${number}
  e retorna uma lista com todos os números binários existentes com a quantidade ${number} de dígitos
 */

function printBinary(number) {
  if (number === 0 || typeof number !== 'number') {
    return [];
  }

  const list = ['0', '1'];

  for (let i = 1; i < number; i += 1) {
    const listSize = list.length;

    for (let j = 0; j < listSize; j += 1) {
      list.push(`${list[j]}0`);
      list.push(`${list[j]}1`);
    }
  }

  return list.slice(list.length - (2 ** number));
}

module.exports = printBinary;
