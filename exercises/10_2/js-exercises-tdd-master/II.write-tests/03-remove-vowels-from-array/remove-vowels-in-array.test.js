let removeVowelsForWords = require("./remove-vowels-in-array");

test('remove vowels from all words in array', function() {
  let words = ["Irina", "Etza", "Daniel"];
  let result = removeVowelsForWords(words);
  expect(result).toEqual(["__i_a", "___a", "_a_ie_"]);
});
// example
// input: ["Irina", "Etza", "Daniel"]
// expected output: ["rn", "tz", "Dnl"]
