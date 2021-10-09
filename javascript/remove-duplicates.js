/**
 * @param {number[]} nums
 * @return {number}
 */
var removeDuplicates = function (nums) {
  let k = 1;
  for (let i = 1; i < nums.length; i++) {
    const cur = nums[i];
    const prev = nums[i - 1];

    if (prev < cur) {
      nums[k] = cur;
      k++;
    }
  }

  return k;
};

/*
[0,1,2,3,4,2,2,3,3,4]
                   i
         k

k = 5
i = 9
cur = 4
prev = 3

*/
