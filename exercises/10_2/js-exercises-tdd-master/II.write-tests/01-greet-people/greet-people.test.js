let greetPeople = require("./greet-people.js");

test("print list of mentors prefixed with Hello", function() {
  let mentors = ["Irina", "Ashleigh", "Etza"];
  let result = greetPeople(mentors);
  expect(result).toBe("Hello IrinaAshleighEtza");
});
  // Arrange
  // Act
  // Assert

