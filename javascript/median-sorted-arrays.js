/**
 * @param {number[]} nums1
 * @param {number[]} nums2
 * @return {number}
 */
var findMedianSortedArrays = function (nums1, nums2) {
  const len = nums1.length + nums2.length;
  let counter = Math.floor(len / 2);
  let shifted = null;
  while (counter > 0) {
    shifted = nums1[0] === undefined ? nums2.shift() :
      nums2[0] === undefined ? nums1.shift() :
        nums1[0] <= nums2[0] ? nums1.shift() :
          nums2.shift();
    counter--;
  }
  if (len % 2 === 0) {
    const next = nums1[0] === undefined ? nums2.shift() :
      nums2[0] === undefined ? nums1.shift() :
        nums1[0] <= nums2[0] ? nums1.shift() :
          nums2.shift();
    return (shifted + next) / 2;
  } else {
    if (nums1[0] === undefined) {
      return nums2[0];
    } else if (nums2[0] === undefined) {
      return nums1[0];
    } else {
      return Math.min(nums1[0], nums2[0]);
    }
  }
};
