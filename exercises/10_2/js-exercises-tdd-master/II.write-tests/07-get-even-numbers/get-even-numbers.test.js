// example
// input: [22, 13, 73, 82, 4];
// expected: [22, 82, 4];

let getEvenNumbers = require("./get-even-numbers");

test("Get even numbers", function() {
  let numbers = [22, 13, 73, 82, 4];
  let output = getEvenNumbers(numbers);

  expect(output).toEqual([22, 82, 4]);
});
