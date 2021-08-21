/**
 * @param {number[]} nums
 * @return {number}
 */
var rob = function (nums) {
  const maxes = [nums[0], Math.max(nums[0], nums[1])];

  for (let i = 2; i < nums.length; i++) {
    maxes.push(Math.max(maxes[i - 2] + nums[i], maxes[i - 1]));
  }

  return maxes[nums.length - 1];
};
