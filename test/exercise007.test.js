const { sumDigits } = require("../challenges/exercise007");

describe("sumDigits", () => {
    test("returns the sum of all digits", () => {
        expect(sumDigits(123)).toBe(6);
        expect(sumDigits(6871)).toBe(22);
    });
});