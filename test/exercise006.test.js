const { sumMultiples, isValidDNA, getComplementaryDNA } = require("../challenges/exercise006");

describe("sumMultiples", () => {
    test("returns the sum of any numbers which are a multiple of 3 or 5", () => {
        expect(sumMultiples([1, 3, 5])).toBe(8);
    });

    test("returns 0 if there are no multiples of 3 or 5 ", () => {
        expect(sumMultiples([1, 4, 7, 11])).toBe(0);
    });

    test("returns 0 if the sum of any numbers which are a multiples of 3 or 5 is negative ", () => {
        expect(sumMultiples([2, -3, 7, -5])).toBe(0);
    });
});

describe("isValidDNA", () => {
    test("returns true if string of characters contain characters C, G, T or A only", () => {
        expect(isValidDNA("GTCAATG")).toBe(true);
    });

    test("returns false if string of characters doesn't contain characters C, G, T or A", () => {
        expect(isValidDNA("MBBS")).toBe(false);
    });

    test("returns false if string of characters contain characters C, G, T or A with other character", () => {
        expect(isValidDNA("MBBSGTAC")).toBe(false);
    });

    test("Ignore lowercase", () => {
        expect(isValidDNA("gaaccgtt")).toBe(true);
    });
});

describe("getComplementaryDNA", () => {
    test("returns string of characters contain characters C, G, T or A only", () => {
        expect(getComplementaryDNA("GTACGTAAC")).toBe("CATGCATTG");
    });

    test("returns a valid DNA string of the complementry base pairs with characters C, G, T and A", () => {
        expect(getComplementaryDNA("ACTG")).toBe("TGAC");
    });

    test("returns a invalid DNA characters", () => {
        expect(getComplementaryDNA("MBBS")).toBe("Oops! DNA should only contain characters C, G, T and A.");
    });
});
