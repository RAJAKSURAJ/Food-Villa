import { sum } from "../sum";
test("Sum function should calculte the sum of two numbers", () => {
  const result = sum(3, 4);
  //Assertion
  expect(result).toBe(7);
});
