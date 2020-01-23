// example
// input = [90, 5, 11, 8, 6];
// expected output = [6, 8];

// also test that the original array has not changed

let getSecondThird = require("./get-second-third");

test("Get 2nd & 3rd smallest number", function() {
  const originalNumbers = [90, 5, 11, 8, 6];
  let numbers = [90, 5, 11, 8, 6];
  let output = getSecondThird(numbers);

  expect(output).toEqual([6, 8]);
  expect(numbers).toEqual(originalNumbers);
});