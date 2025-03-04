/**
 * This function takes a number, e.g. 123 and returns the sum of all its digits, e.g 6 in this example.
 * @param {Number} n
 */
const sumDigits = n => {
  if (n === undefined) throw new Error("n is required");
  if (!/^\d+$/.test(n)) throw new Error("Enter a valid number");
  let sum = 0;
  while (n != 0) {
    sum += n % 10;
    n = Math.floor(n / 10);
  }
  return sum;
};

/**
 * This function creates a range of numbers as an array. It received a start, an end and a step. Step is the gap between numbers in the range. For example, if start = 3, end = 11 and step = 2 the resulting range would be: [3, 5, 7, 9, 11]
 * Both the start and the end numbers are inclusive.
 * Step is an optional parameter. If it is not provided, assume the step is 1.
 * @param {Number} start
 * @param {Number} end
 * @param {Number} step
 */
const createRange = (start, end, step) => {
  if (start === undefined) throw new Error("start is required");
  if (end === undefined) throw new Error("end is required");
  if (step === undefined) step = 1;
  let len = Math.floor((end - start) / step) + 1;
  return Array.from({ length: len }, (_, i) => start + (i * step))
};

/**
 * This function takes an array of user objects and their usage in minutes of various applications. The format of the data should be as follows:
 * [
 *  {
 *    username: "beth_1234",
 *    name: "Beth Smith",
 *    screenTime: [
 *                 { date: "2019-05-01", usage: { twitter: 34, instagram: 22, facebook: 40} },
 *                 { date: "2019-05-02", usage: { twitter: 56, instagram: 40, facebook: 31} },
 *                 { date: "2019-05-03", usage: { twitter: 12, instagram: 15, facebook: 19} }, 
 *                 { date: "2019-05-04", usage: { twitter: 10, instagram: 56, facebook: 61} },
 *                ]
 *   },
 *   {
 *    username: "sam_j_1989",
 *    name: "Sam Jones",
 *    screenTime: [
 *                 { date: "2019-06-11", usage: { mapMyRun: 0, whatsApp: 0, facebook: 0, safari: 10} },
 *                 { date: "2019-06-13", usage: { mapMyRun: 0, whatsApp: 0, facebook: 0, safari: 16} },
 *                 { date: "2019-06-14", usage: { mapMyRun: 0, whatsApp: 0, facebook: 0, safari: 31} },
 *                ]
 *   },
 * ]
 *
 * The function should return an array of usernames of users who have used more than 100 minutes of screentime for a given date.
 * The date will be provided in the format "2019-05-04" (YYYY-MM-DD)
 * For example, if passed the above users and the date "2019-05-04" the function should return ["beth_1234"] as she used over 100 minutes of screentime on that date.
 * @param {Array} users
 */
const getScreentimeAlertList = (users, date) => {
  if (users === undefined) throw new Error("users is required");
  if (date === undefined) throw new Error("date is required");
  if (!date.match(/(\d{4})-(\d{2})-(\d{2})/)) throw new Error("Enter valid date format YYYY-MM-DD");
  const userNames = [];
  let totalUsage = 0;
  users.forEach(user => {
    user.screenTime.forEach(time => {
      if (time.date === date) {
        for (let st in time.usage) {
          totalUsage += time.usage[st];
        }
        if (totalUsage > 100) {
          userNames.push(user.username);
        }
      }
    })
  });
  return userNames;
};

/**
 * This function will receive a hexadecimal color code in the format #FF1133. A hexadecimal code is a number written in hexadecimal notation, i.e. base 16. If you want to know more about hexadecimal notation:
 * https://www.youtube.com/watch?v=u_atXp-NF6w
 * For colour codes, the first 2 chars (FF in this case) represent the amount of red, the next 2 chars (11) represent the amound of green, and the last 2 chars (33) represent the amount of blue.
 * Colours can also be represented in RGB format, using decimal notation.
 * This function should transform the hex code into an RGB code in the format:
 * "rgb(255,17,51)"
 * Hint: You will need to convert each hexadecimal value for R, G and B into its decimal equivalent!
 * @param {String} hexsStr
 * @returns {String}
 */
const hexToRGB = hexStr => {
  if (hexStr === undefined) throw new Error("hexStr is required");
  let str = "";
  hexStr = hexStr.replace(/\s/g, '');
  if (/^#([0-9A-F]{3}){1,2}$/i.test(hexStr)) {
    hexStr = hexStr.substr(1);
    if (hexStr.length === 3) {
      hexStr = hexStr.split('').map(str => str + str).join('');
    }
    let r = parseInt(hexStr.slice(0, 2), 16),
      g = parseInt(hexStr.slice(2, 4), 16),
      b = parseInt(hexStr.slice(4, 6), 16);
    str = "rgb(" + r + "," + g + "," + b + ")";
  }
  return str;
};

/**
 * This function takes a noughts and crosses board represented as an array, where an empty space is represented with null.
 * [
 *  ["X", "0", null],
 *  ["X", null, "0"],
 *  ["X", null, "0"]
 * ]
 * The function should return "X" if player X has won, "0" if the player 0 has won, and null if there is currently no winner.
 * @param {Array} board
 * @return {String}
 */
const findWinner = board => {
  if (board === undefined) throw new Error("board is required");
  let winner = "";
  let hasEmpty = false;
  let xCount = 0;
  let oCount = 0;
  board.forEach(row => {
    if (row.some(spot => spot === "")) {
      hasEmpty = true;
    }
    // Horizontals
    if (row[0] === "X" && row[1] === "X" && row[2] === "X") {
      winner = "X";
      xCount++;
    }
    else if (row[0] === "0" && row[1] === "0" && row[2] === "0") {
      winner = "0";
      oCount++;
    }
  });
  // Verticals
  for (let i = 0; i < 3; i++) {
    if (board[0][i] === "X" && board[1][i] === "X" && board[2][i] === "X") {
      winner = "X";
      xCount++;
    }
    else if (board[0][i] === "0" && board[1][i] === "0" && board[2][i] === "0") {
      winner = "0";
      oCount++;
    }
  }
  // Diagonals for Xs
  if (board[0][0] === "X" && board[1][1] === "X" && board[2][2] === "X") {
    winner = "X";
    xCount++;
  }
  else if (board[0][2] === "X" && board[1][1] === "X" && board[2][0] === "X") {
    winner = "X";
    xCount++
  }
  // Diagonals for 0s
  else if (board[0][0] === "0" && board[1][1] === "0" && board[2][2] === "0") {
    winner = "0";
    oCount++;
  }
  else if (board[0][2] === "0" && board[1][1] === "0" && board[2][0] === "0") {
    winner = "0";
    oCount++;
  }
  if (hasEmpty) {
    return "Not finished!";
  } else if (xCount !== 1 && oCount !== 1) {
    return null;
  } else if (xCount === oCount) {
    return "Draw!";
  } else {
    return winner;
  }
};

module.exports = {
  sumDigits,
  createRange,
  getScreentimeAlertList,
  hexToRGB,
  findWinner
};
