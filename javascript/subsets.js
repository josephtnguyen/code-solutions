/**
 * @param {number[]} nums
 * @return {number[][]}
 */
var subsets = function (nums) {
  const allSubsets = [];

  for (let i = 0; i < nums.length; i++) {
    const newNum = nums[i];
    const numberOfSubsets = allSubsets.length;
    for (let j = 0; j < numberOfSubsets; j++) {
      const subset = allSubsets[j];
      allSubsets.push([...subset, newNum]);
    }
    allSubsets.push([newNum]);
  }

  return [[],...allSubsets];
};

subsets([1, 2, 3]);
