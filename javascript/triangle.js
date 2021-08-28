/**
 * @param {number[][]} triangle
 * @return {number}
 */
var minimumTotal = function (triangle) {
  let minimumArray = triangle[0];

  for (let i = 1; i < triangle.length; i++) {
    minimumArray = minimumNextArray(minimumArray, triangle[i]);
  }

  return Math.min(...minimumArray);
};

function minimumNextArray(currentArray, nextArray) {
  const minimumArray = [];

  for (let i = 0; i < nextArray.length; i++) {
    const number = nextArray[i];
    const choice1 = currentArray[i - 1];
    const choice2 = currentArray[i];
    if (choice1 === undefined) {
      minimumArray.push(number + choice2);
    } else if (choice2 === undefined) {
      minimumArray.push(number + choice1);
    } else {
      minimumArray.push(Math.min(number + choice1, number + choice2));
    }
  }

  return minimumArray;
}

console.log(minimumTotal([[2], [3, 4], [6, 5, 7], [4, 1, 8, 3]]));
