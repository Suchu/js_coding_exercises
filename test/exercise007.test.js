const { sumDigits, createRange } = require("../challenges/exercise007");

describe("sumDigits", () => {
    test("returns the sum of all digits", () => {
        expect(sumDigits(123)).toBe(6);
        expect(sumDigits(6871)).toBe(22);
    });
});

describe("createRange", () => {
    test("creates a range of numbers as an array", () => {
        expect(createRange(3, 11, 2)).toEqual([3, 5, 7, 9, 11]);
        expect(createRange(0, 4, 1)).toEqual([0, 1, 2, 3, 4]);
        expect(createRange(0, 4)).toEqual([0, 1, 2, 3, 4]);
    });

    test("If step is not provided, assume the step is 1", () => {
        expect(createRange(0, 4)).toEqual([0, 1, 2, 3, 4]);
    });
});