const last = require('../src/last');

// A função deve receber uma quantidade qualquer de parâmetros
// A função deve retornar o último elemento do parâmetro passado
// Se a função receber uma lista, deve retornar o último elemento
// Se a função receber uma string, deve retornar o último caractere
// Se a função receber vários parâmetros, deve retornar o último parâmetro

describe('#last', () => {
  it('returns last element of array', () => {
    expect(last([1, 2, 3, 4, 5])).toBe(5);
  });
  it('returns last character of a string', () => {
    expect(last('something')).toBe('g');
  });
  it('returns the last of many parameters', () => {
    expect(last('a', 'b', 'c')).toBe('c');
  });
});
