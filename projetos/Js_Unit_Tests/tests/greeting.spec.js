const greeting = require('../src/greeting');

// A função deve receber uma string ${param} e retornar a mensagem 'Hello ${param}!'
// Se nenhum parâmetro for passado um erro deve ser lançado
// A mensagem do erro deve ser 'You must send something to greet!'

describe('#greeting', () => {
  it('returns Hello (inputted parameter)', () => {
    expect(greeting('Trybers')).toBe('Hello Trybers!');
  });
  it('returns error message when no parameters have been passed', () => {
    expect(greeting).toThrow('You must send something to greet!');
  });
});
