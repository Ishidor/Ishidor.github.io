/*
  A função duplicate recebe uma lista de parâmetros (tamanho variável)
  e retorna `true` se existe algum elemento duplicado e `false` caso contrário
 */

function duplicate(...params) {
  const duplFinder = new Set(params);
  if ([...duplFinder].length === params.length) {
    return false;
  }
  return true;
}

module.exports = duplicate;
