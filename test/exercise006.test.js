const { sumMultiples, isValidDNA, getComplementaryDNA, isItPrime, createMatrix, areWeCovered } = require("../challenges/exercise006");

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

describe("isItPrime", () => {
    test("returns true if number is prime number", () => {
        expect(isItPrime(3)).toBe(true);
    });

    test("returns false if number is not a prime number", () => {
        expect(isItPrime(4)).toBe(false);
    });

    test("returns false if number is 1", () => {
        expect(isItPrime(1)).toBe(false);
    });

    test("returns false for negative numbers", () => {
        expect(isItPrime(-7)).toBe(false);
    });
});

describe("createMatrix", () => {
    test("returns arrays of given number and make a matrix with given filler of string", () => {
        /**
         * Received: Serializes to the same string
         * Changed .toBe to toEqual
         * Reason: The .toBe method tests for exact equality. In order to compare, have to use the .toEqual method.
         */
        expect(createMatrix(3, "foo")).toEqual(
            [
                ['foo', 'foo', 'foo'],
                ['foo', 'foo', 'foo'],
                ['foo', 'foo', 'foo']
            ]
        );
        expect(createMatrix(2, 100)).toEqual(
            [
                [100, 100],
                [100, 100]
            ]
        );
    });
});

describe("areWeCovered", () => {
    test("returns true if there are enough staff given day", () => {
        const staff = [
            { name: "Sally", rota: ["Monday", "Tuesday", "Friday"] },
            { name: "Pedro", rota: ["Saturday", "Sunday", "Tuesday", "Wednesday"] },
            { name: "Emily", rota: ["Monday", "Tuesday", "Wednesday", "Friday"] },
            { name: "Rose", rota: ["Sunday", "Tuesday", "Wednesday"] },
        ];
        expect(areWeCovered(staff, "Tuesday")).toBe(true);
    });

    test("returns false if there are not enough staff for given day", () => {
        const staff = [
            { name: "Sally", rota: ["Monday", "Tuesday", "Friday"] },
            { name: "Pedro", rota: ["Saturday", "Sunday", "Tuesday", "Wednesday"] },
            { name: "Rose", rota: ["Sunday", "Wednesday"] },
        ];
        expect(areWeCovered(staff, "Tuesday")).toBe(false);
    });

    test("string should be case insensitive", () => {
        const staff = [
            { name: "Sally", rota: ["Monday", "Tuesday", "Friday"] },
            { name: "Pedro", rota: ["Saturday", "Sunday", "Tuesday", "Wednesday"] },
            { name: "Emily", rota: ["Monday", "Tuesday", "Wednesday", "Friday"] },
            { name: "Rose", rota: ["Sunday", "Tuesday", "Wednesday"] },
        ];
        expect(areWeCovered(staff, "wednesday")).toBe(true);
    });
});
