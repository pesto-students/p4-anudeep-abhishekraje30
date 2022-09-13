const operations = require("./math-operations");

test("add 1 + 2 to equal 3", () => {
  expect(operations.sum(1, 2)).toBe(3);
});

test("Substract 5 - 2 to equal 3", () => {
  expect(operations.diff(5, 2)).toBe(3);
});

test("multiply 1 - 3 to equal 3", () => {
  expect(operations.product(1, 3)).toBe(3);
});
