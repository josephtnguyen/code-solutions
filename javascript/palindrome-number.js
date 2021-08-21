/**
 * @param {number} x
 * @return {boolean}
 */
var isPalindrome = function (x) {
  const int = x.toString();
  let i = 0;
  let j = int.length - 1;
  while (i < j) {
    if (int[i] !== int[j]) {
      return false;
    }
    i++;
    j--;
  }
  return true;
};
