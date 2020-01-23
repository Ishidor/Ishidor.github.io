let removeVowels = require("./remove-vowels");

  test('Remove vowels, add "_".', function() {
    let result = removeVowels("Samuel");
  
    expect(result).toBe("_a_ue_")
});
