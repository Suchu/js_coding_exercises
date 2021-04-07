const findNextNumber = (nums, n) => {
  if (nums === undefined) throw new Error("nums is required");
  if (n === undefined) throw new Error("n is required");

  return n === nums[nums.length - 1] ? null
    : nums.indexOf(n) !== -1 ? nums[(nums.indexOf(n)) + 1]
      : n !== nums[nums.indexOf(n)] ? null
        : null;
};

const count1sand0s = str => {
  if (str === undefined) throw new Error("str is required");
  
  let countPlus = 0;
  for (let i = 0; i < str.length; i++) {
    countPlus += Number(str[i]);
  }
  return {
    1: countPlus,
    0: str.length - countPlus
  };
};

const reverseNumber = n => {
  if (n === undefined) throw new Error("n is required");
  // Your code here!
};

const sumArrays = arrs => {
  if (arrs === undefined) throw new Error("arrs is required");
  // Your code here!
};

const arrShift = arr => {
  if (arr === undefined) throw new Error("arr is required");
  // Your code here!
};

const findNeedle = (haystack, searchTerm) => {
  if (haystack === undefined) throw new Error("haystack is required");
  if (searchTerm === undefined) throw new Error("searchTerm is required");
  // Your code here!
};

const getWordFrequencies = str => {
  if (str === undefined) throw new Error("str is required");
  // Your code here!
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
