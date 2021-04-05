function getSquares(nums) {
  if (nums === undefined) throw new Error("nums is required");
  let newArray = [];
  for (let i = 0; i < nums.length; i++) {
    newArray.push(Math.pow(nums[i], 2));
  }
  return newArray;
}

function camelCaseWords(words) {
  if (words === undefined) throw new Error("words is required");
  let result = "";
  for (let i = 0; i < words.length; i++) {
    if (i == 0) {
      result += words[i].toLowerCase();
    }
    else {
      result += words[i].substr(0, 1).toUpperCase() + words[i].substr(1);
    }
  }
  return result;
}

function getTotalSubjects(people) {
  if (people === undefined) throw new Error("people is required");
  let subArray=[];
  let count = 0;
  for (let i in people) {
    subArray = people[i].subjects;
    for (let j in subArray) {
      if (Array.isArray(subArray[j]) || subArray[j].length)
      count++;
    }
  }
  return count;
}

function checkIngredients(menu, ingredient) {
  if (menu === undefined) throw new Error("menu is required");
  if (!ingredient) throw new Error("ingredient is required");
  // Your code here!
}

function duplicateNumbers(arr1, arr2) {
  if (arr1 === undefined) throw new Error("arr1 is required");
  if (arr2 === undefined) throw new Error("arr2 is required");
  // Your code here!
}

module.exports = {
  getSquares,
  camelCaseWords,
  getTotalSubjects,
  checkIngredients,
  duplicateNumbers
};
