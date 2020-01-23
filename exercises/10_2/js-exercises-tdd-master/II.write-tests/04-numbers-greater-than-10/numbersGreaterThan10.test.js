let largerThanTen = require("./numbersGreaterThan10");

test("Get numbers greater than 10", function() {
    let numbers = [4, 10, 32, 9, 21];
    let output = largerThanTen(numbers);
  
    expect(output).toEqual([32, 21]);
  });

// input: [4, 10, 32, 9, 21];
// expected output: [32, 21];
