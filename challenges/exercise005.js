const findNextNumber = (nums, n) => {
  if (nums === undefined) throw new Error("nums is required");
  if (n === undefined) throw new Error("n is required");
  let numIndex = nums.indexOf(n);
  return n === nums[nums.length - 1] ? null
    : numIndex !== -1 ? nums[(numIndex) + 1]
      : n !== nums[numIndex] ? null
        : null;
};

const count1sand0s = str => {
  if (str === undefined) throw new Error("str is required");
  let countPlus = 0;
  for (let num of str) {
    countPlus += Number(num);
  }
  return {
    1: countPlus,
    0: str.length - countPlus
  };
};

const reverseNumber = n => {
  if (n === undefined) throw new Error("n is required");
  return Number(String(n).split("").reverse().join(""));
};

const sumArrays = arrs => {
  if (arrs === undefined) throw new Error("arrs is required");
  const reducer = (accumulator, currentValue) => accumulator + currentValue;
  let sum = 0;
  arrs.forEach(arr => {
    sum += arr.reduce(reducer);
  });
  return sum;
};

const arrShift = arr => {
  if (arr === undefined) throw new Error("arr is required");
  if (arr.length >= 2) {
    [arr[0], arr[arr.length - 1]] = [arr[arr.length - 1], arr[0]];
  }
  return arr;
};

const findNeedle = (haystack, searchTerm) => {
  if (haystack === undefined) throw new Error("haystack is required");
  if (searchTerm === undefined) throw new Error("searchTerm is required");
  for (let value of Object.values(haystack)) {
    if ((String(value).toLowerCase()).match(searchTerm.toLowerCase())) {
      return true;
    }
  }
  return false;
};

const getWordFrequencies = str => {
  if (str === undefined) throw new Error("str is required");
  return str.toLowerCase().match(/\w+/g).reduce((stats, word) =>
    Object.assign(stats, {
      [word]: (stats[word]) ? stats[word] + 1 : 1,
    }),
    {}
  );
};

module.exports = {
  findNextNumber,
  count1sand0s,
  reverseNumber,
  sumArrays,
  arrShift,
  findNeedle,
  getWordFrequencies
};
