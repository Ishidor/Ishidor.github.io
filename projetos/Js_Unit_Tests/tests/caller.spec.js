const caller = require('../src/caller');

// A função deve receber 3 parâmetros
// O primeiro parâmetro deve ser uma função
// O segundo e terceiro parâmetros podem ser de qualquer tipo
// A função deve executar a função (primeiro parâmetro) com os outros parâmetros recebidos
// e retornar o resultado

const fnMock = jest.fn((a, b) => a + b);
const fnMock2 = jest.fn((a, b) => a + b);

describe('#caller', () => {
  it('with fn, 30, 70 as parameters, it should return 100', () => {
    expect(caller(fnMock, 30, 70)).toBe(100);
    expect(fnMock).toHaveBeenCalledWith(30, 70);
    expect(fnMock).toHaveBeenCalledTimes(1);
  });
  it('should return 2 strings as 1', () => {
    expect(caller(fnMock2, 'Hello ', 'Tryber')).toBe('Hello Tryber');
    expect(fnMock2).toHaveBeenCalledWith('Hello ', 'Tryber');
  });
});
