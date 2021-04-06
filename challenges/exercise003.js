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
  let subArray = [];
  let count = 0;
  for (let i in people) {
    subArray[i] = people[i].subjects;
    if (subArray[i].length !== 0) {
      count += subArray[i].length;
    }
  }
  return count;
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
  let newArray = [];
  let finalArray = [];
  for (let i = 0; i < arr1.length; i++) {
    for (let j = 0; j < arr2.length; j++) {
      if (arr1[i] === arr2[j]) {
        newArray.push(arr1[i]);
        newArray.sort();
      }
    }
  }
  for (let k = 0; k < newArray.length; k++) {
    if (finalArray.indexOf(newArray[k]) === -1) {
      finalArray.push(newArray[k]);
    }
  }
  return finalArray;
}

module.exports = {
  getSquares,
  camelCaseWords,
  getTotalSubjects,
  checkIngredients,
  duplicateNumbers
};
