/**
 * @param {number} target
 * @param {number[]} nums
 * @return {number}
 */
var minSubArrayLen = function (target, nums) {
  let front = 0;
  let back = 0;
  let sum = 0;
  let min = Infinity;
  while (back < nums.length) {
    sum += nums[back];
    while (sum >= target) {
      min = Math.min(min, back - front + 1);
      sum -= nums[front];
      front++;
    }
    back++;
  }

  return min === Infinity ? 0 : min;
};
