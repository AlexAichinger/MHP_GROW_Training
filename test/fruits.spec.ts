import * as fruits from "../src/fruits";

describe("Testing our fruit methods", () => {
  test("Testing that the fruits are sorted by alphabet", () => {
    const sorted = fruits.getFruits().sort((n1, n2) => {
      return n1.name > n2.name ? 1 : -1;
    });
    expect(fruits.orderByAlphabet(fruits.getFruits())).toEqual(sorted);
  });

  test("3 is 3", () => {
    expect(3).toBe(3);
  });

  test("Testing that there are no toxic fruits", () => {
    const result = fruits.filterAllToxicFruits(fruits.getFruits());

    result.forEach((f) => expect(f.isToxic).toBeFalsy());
  });

  test("Testing that fruits are grouped correctly", () => {
    expect(3).toBe(5);
  });
});
