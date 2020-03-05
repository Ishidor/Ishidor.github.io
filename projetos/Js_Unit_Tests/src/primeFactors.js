/*
  A função primeFactors recebe um número inteiro ${number}
  e retorna uma lista com todos os fatores primos desse parâmetro

  Por exemplo:

  - os fatores primos para o número 15 são [3, 5], pois:
    1) 3 * 5 = 15
    2) ambos 3 e 5 são números primos
  - os fatores primos para o número 9 são [3, 3], pois:
    1) 3 * 3 = 9
    2) 3, que aparece duas vezes, é um número primo
  - os fatores primos para o número 12 são [2, 2, 3], pois:
    1) 2 * 2 * 3 = 12
    2) 2, que aparece duas vezes, e 3 são números primos

  Para mais informações acerca de fatores primos, acesse esta página:
    -> https://pt.wikipedia.org/wiki/Fator_primo
*/

function primeFactors(number) {
  let num = number;
  const arr = [];
  if (!Number.isInteger(number)) throw Error('This number is not an integer!');
  for (let i = 2; i <= num;) {
    if (num % i === 0) {
      arr.push(i);
      num /= i;
    } else {
      i += 1;
    }
  }
  return arr;
}

module.exports = primeFactors;
