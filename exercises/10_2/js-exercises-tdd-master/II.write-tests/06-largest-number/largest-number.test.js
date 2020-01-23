// example
// input: [3, 21, 88, 4, 36];
// expected: 88;

// also test that the original array hasn't changed

let largestNumber = require("./largest-number");

test("Get largest number", function() {
  let originalNumbers = [3, 21, 88, 4, 36];
  let numbers = [3, 21, 88, 4, 36];
  let output = largestNumber(numbers);

  expect(output).toEqual(88);
  expect(originalNumbers).toEqual(numbers);
});
