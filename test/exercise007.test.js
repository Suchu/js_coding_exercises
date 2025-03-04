const {
    sumDigits,
    createRange,
    getScreentimeAlertList,
    hexToRGB,
    findWinner } = require("../challenges/exercise007");

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

describe("getScreentimeAlertList", () => {
    test("return an array of usernames of users who have used more than 100 minutes of screentime for a given date.", () => {
        const users = [
            {
                username: "beth_1234",
                name: "Beth Smith",
                screenTime: [
                    { date: "2019-05-01", usage: { twitter: 34, instagram: 22, facebook: 40 } },
                    { date: "2019-05-02", usage: { twitter: 56, instagram: 40, facebook: 31 } },
                    { date: "2019-05-03", usage: { twitter: 12, instagram: 15, facebook: 19 } },
                    { date: "2019-05-04", usage: { twitter: 10, instagram: 56, facebook: 61 } },
                ]
            },
            {
                username: "sam_j_1989",
                name: "Sam Jones",
                screenTime: [
                    { date: "2019-06-11", usage: { mapMyRun: 0, whatsApp: 0, facebook: 0, safari: 10 } },
                    { date: "2019-06-13", usage: { mapMyRun: 0, whatsApp: 0, facebook: 0, safari: 16 } },
                    { date: "2019-06-14", usage: { mapMyRun: 0, whatsApp: 0, facebook: 0, safari: 31 } },
                ]
            },
        ];

        expect(getScreentimeAlertList(users, "2019-05-04")).toEqual(["beth_1234"]);
    });

    test("return an empty array if screentime is less than 100 minute for a given day", () => {
        const users = [
            {
                username: "beth_1234",
                name: "Beth Smith",
                screenTime: [
                    { date: "2019-05-01", usage: { twitter: 34, instagram: 22, facebook: 40 } },
                    { date: "2019-05-02", usage: { twitter: 56, instagram: 40, facebook: 31 } },
                    { date: "2019-05-03", usage: { twitter: 12, instagram: 15, facebook: 19 } },
                    { date: "2019-05-04", usage: { twitter: 10, instagram: 56, facebook: 61 } },
                ]
            },
            {
                username: "sam_j_1989",
                name: "Sam Jones",
                screenTime: [
                    { date: "2019-06-11", usage: { mapMyRun: 0, whatsApp: 0, facebook: 0, safari: 10 } },
                    { date: "2019-06-13", usage: { mapMyRun: 0, whatsApp: 0, facebook: 0, safari: 16 } },
                    { date: "2019-06-14", usage: { mapMyRun: 0, whatsApp: 0, facebook: 0, safari: 31 } },
                ]
            },
        ];

        expect(getScreentimeAlertList(users, "2019-06-14")).toEqual([]);
    });

    test("date format should be YYYY-MM-DD", () => {
        const users = [
            {
                username: "beth_1234",
                name: "Beth Smith",
                screenTime: [
                    { date: "2019-05-01", usage: { twitter: 34, instagram: 22, facebook: 40 } },
                    { date: "2019-05-02", usage: { twitter: 56, instagram: 40, facebook: 31 } },
                    { date: "2019-05-03", usage: { twitter: 12, instagram: 15, facebook: 19 } },
                    { date: "2019-05-04", usage: { twitter: 10, instagram: 56, facebook: 61 } },
                ]
            },
            {
                username: "sam_j_1989",
                name: "Sam Jones",
                screenTime: [
                    { date: "2019-06-11", usage: { mapMyRun: 0, whatsApp: 0, facebook: 0, safari: 10 } },
                    { date: "2019-06-13", usage: { mapMyRun: 0, whatsApp: 0, facebook: 0, safari: 16 } },
                    { date: "2019-06-14", usage: { mapMyRun: 0, whatsApp: 0, facebook: 0, safari: 31 } },
                ]
            },
        ];

        expect(getScreentimeAlertList(users, "2019-06-14")).toEqual([]);
    });
});

describe("hexToRGB", () => {
    test("returns string of RGB code format from hex code.", () => {
        expect(hexToRGB("#FF1133")).toBe("rgb(255,17,51)");
    });

    test("returns string of RGB code format from 3 character hex code. Example: #F13 into rgb(255,17,51)", () => {
        expect(hexToRGB("#F13")).toBe("rgb(255,17,51)");
    });

    test("ignore blank spaces.", () => {
        expect(hexToRGB(" #FF1133 ")).toBe("rgb(255,17,51)");
    });

    test("only support hex code format as a input.", () => {
        expect(hexToRGB("yellow")).toBe("");
    });

});

describe("findWinner", () => {
    test("return 'X' if X player has won.", () => {
        const board = [
            ["X", "0", null],
            ["X", null, "0"],
            ["X", null, "0"]
        ];
        expect(findWinner(board)).toEqual("X");
    });

    test("return '0' if 0 player has won.", () => {
        const board = [
            ["0", null, "X"],
            ["X", "0", "0"],
            ["X", null, "0"]
        ];
        expect(findWinner(board)).toEqual("0");
    });

    test("return null if no one player has won.", () => {
        const board = [
            [null, null, null],
            ["X", null, "0"],
            ["X", null, "0"]
        ];
        expect(findWinner(board)).toEqual(null);
    });

    test("return 'Not finished!' if board isn't yet finished.", () => {
        const board = [
            [null, "X", ""],
            ["X", "", "0"],
            ["X", "0", "0"]
        ];
        expect(findWinner(board)).toEqual("Not finished!");
    });

    test("return 'Draw!' if it's a draw.", () => {
        const board = [
            ["X", null, "0"],
            ["X", null, "0"],
            ["X", "0", "0"]
        ];
        expect(findWinner(board)).toEqual("Draw!");
    });
});