let ast = [],
// Defina o número de linhas do triangulo
i, j = 5;

for (i = 0; i < j; i++) {
  ast[i] = new Array(j - i).join(' ') + new Array(i + 2).join("*");
  console.log(ast[i]);
}