/**
 * @param {string} s
 * @return {number}
 */
var lengthOfLongestSubstring = function (s) {
  let longest = 0;
  let currentSubStr = '';
  for (let i = 0; i < s.length; i++) {
    while (currentSubStr.includes(s[i])) {
      currentSubStr = currentSubStr.substr(1, currentSubStr.length - 1);
    }
    currentSubStr += s[i];
    if (currentSubStr.length > longest) {
      longest = currentSubStr.length;
    }
  }
  return longest;
};
