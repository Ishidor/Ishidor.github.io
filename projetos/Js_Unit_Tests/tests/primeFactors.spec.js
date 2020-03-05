const primeFactors = require('../src/primeFactors');
const assert = require('assert');

// A função recebe um inteiro e retorna a lista com os fatores primos desse número
// Se o parâmetro recebido for um valor não inteiro um erro deve ser lançado

describe('primeFactors tests', () => {
  test('prime factors of 15 should be 3 & 5', () => {
    assert.deepEqual(primeFactors(15), [3, 5]);
  });
  test('prime factors of 9 should be 3 & 3', () => {
    assert.deepEqual(primeFactors(9), [3, 3]);
  });
  test('prime factors of 12 should be 2, 2 & 3', () => {
    assert.deepEqual(primeFactors(12), [2, 2, 3]);
  });
  test('if not number is not an integer it should throw an error', () => {
    assert.throws(() => primeFactors(1.1), /This number is not an integer!/);
  });
});
