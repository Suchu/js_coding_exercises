function findSmallNums(nums) {
  if (!nums) throw new Error("nums is required");
  const smallNums = [];
  nums.forEach(num => {
    if (num < 1) {
      smallNums.push(num);
    }
  });
  return smallNums;
}

function findNamesBeginningWith(names, char) {
  if (!names) throw new Error("names is required");
  if (!char) throw new Error("char is required");
  let firstChar = "";
  const firstCharNames = [];
  names.forEach(name => {
    firstChar = name.charAt(0);
    if (firstChar === char) {
      firstCharNames.push(name);
    }
  });
  return firstCharNames;
}

function findVerbs(words) {
  if (!words) throw new Error("words is required");
  const verbs = []
  words.forEach(word => {
    if ((word.substring(0, 3)) === "to ") {
      verbs.push(word);
    }
  });
  return verbs;
}

function getIntegers(nums) {
  if (!nums) throw new Error("nums is required");
  const integers = [];
  nums.forEach(num => {
    if (Number.isInteger(num)) {
      integers.push(num);
    }
  });
  return integers;
}

function getCities(users) {
  if (!users) throw new Error("users is required");
  const userCities = [];
  let cities = "";

  users.forEach(user => {
    cities = user.data.city.displayName;
    userCities.push(cities);
  });
  return userCities;
}

function getSquareRoots(nums) {
  if (!nums) throw new Error("nums is required");

  return nums.map(function (num) {
    // Fixed decimal places: Avoids type conversion. Reference https://stackoverflow.com/posts/29494612/revisions
    return Math.round(Math.sqrt(num) * 100) / 100;
  });
}

function findSentencesContaining(sentences, str) {
  if (!sentences) throw new Error("sentences is required");
  if (!str) throw new Error("str is required");

  return sentences.filter(function (word) {
    if ((word.toLowerCase()).match(str.toLowerCase())) {
      return word;
    }
  });
}

function getLongestSides(triangles) {
  if (!triangles) throw new Error("triangles is required");
  // Your code here
}

module.exports = {
  findSmallNums,
  findNamesBeginningWith,
  findVerbs,
  getIntegers,
  getCities,
  getSquareRoots,
  findSentencesContaining,
  getLongestSides
};
