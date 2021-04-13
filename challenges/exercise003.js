function getSquares(nums) {
  if (nums === undefined) throw new Error("nums is required");
  for (let i = 0; i < nums.length; i++) {
    nums[i] = Math.pow(nums[i], 2);
  }
  return nums;
}

function camelCaseWords(words) {
  if (words === undefined) throw new Error("words is required");
  let camelWords = "";
  for (let i = 0; i < words.length; i++) {
    if (i == 0) {
      camelWords += words[i].toLowerCase();
    }
    else {
      camelWords += words[i].substr(0, 1).toUpperCase() + words[i].substr(1);
    }
  }
  return camelWords;
}

function getTotalSubjects(people) {
  if (people === undefined) throw new Error("people is required");
  let allSubjects = [];
  let countSubject = 0;
  for (let i in people) {
    allSubjects[i] = people[i].subjects;
    if (allSubjects[i].length !== 0) {
      countSubject += allSubjects[i].length;
    }
  }
  return countSubject;
}

function checkIngredients(menu, ingredient) {
  if (menu === undefined) throw new Error("menu is required");
  if (!ingredient) throw new Error("ingredient is required");
  let isIncluded = false;
  menu.forEach(recipe => {
    recipe.ingredients.forEach(ingredientList => {
      if (ingredientList === ingredient) {
        isIncluded = true;
      }
    });
  });
  return isIncluded;
}

function duplicateNumbers(arr1, arr2) {
  if (arr1 === undefined) throw new Error("arr1 is required");
  if (arr2 === undefined) throw new Error("arr2 is required");
  let dublicateNums = [];
  let nonRepeatedNums = [];
  for (let i = 0; i < arr1.length; i++) {
    for (let j = 0; j < arr2.length; j++) {
      if (arr1[i] === arr2[j]) {
        dublicateNums.push(arr1[i]);
        dublicateNums.sort();
      }
    }
  }
  for (let k = 0; k < dublicateNums.length; k++) {
    if (nonRepeatedNums.indexOf(dublicateNums[k]) === -1) {
      nonRepeatedNums.push(dublicateNums[k]);
    }
  }
  return nonRepeatedNums;
}

module.exports = {
  getSquares,
  camelCaseWords,
  getTotalSubjects,
  checkIngredients,
  duplicateNumbers
};
