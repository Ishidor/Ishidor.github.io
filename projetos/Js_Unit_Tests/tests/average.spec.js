const average = require('../src/average');

// A função deve receber uma quantidade qualquer de parâmetros
// A função deve retornar a média dos números que receber
// Caso a função receba algum valor não número, o valor undefined deve ser retornado

describe('#average', () => {
  it('expect average of 3, 4, 5 should be 4', () => {
    expect(average(3, 4, 5)).toBe(4);
  });
  it('expect average of 50, 50, 50 should be 50', () => {
    expect(average(50, 50, 50)).toBe(50);
  });
  it('expect average of 3, 4 and a string should be undefined', () => {
    expect(average(3, 4, '5')).toBe(undefined);
  });
  it('expect average of two strings should be undefined', () => {
    expect(average('this', 'that')).toBe(undefined);
  });
});
