function findSmallNums(nums) {
  if (!nums) throw new Error("nums is required");
  return nums.filter(num => num < 1);
}

function findNamesBeginningWith(names, char) {
  if (!names) throw new Error("names is required");
  if (!char) throw new Error("char is required");
  return names.filter(name => name.charAt(0) === char);
}

function findVerbs(words) {
  if (!words) throw new Error("words is required");
  return words.filter(word => word.substring(0, 3) === "to ");
}

function getIntegers(nums) {
  if (!nums) throw new Error("nums is required");
  return nums.filter(num => Number.isInteger(num));
}

function getCities(users) {
  if (!users) throw new Error("users is required");
  return users.map(user => user.data.city.displayName);
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
  return triangles.map(triangle => Math.max(...triangle));
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
