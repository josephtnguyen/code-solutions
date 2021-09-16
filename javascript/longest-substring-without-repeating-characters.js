/**
 * @param {string} s
 * @return {number}
 */
var lengthOfLongestSubstring = function (s) {
  let longest = 0;
  let start = 0;
  let end = 0;
  const visited = new Set();
  while (end < s.length) {
    const letter = s[end];
    if (visited.has(letter)) {
      while (s[start] !== letter) {
        visited.delete(s[start]);
        start++;
      }
      start++;
    }
    longest = Math.max(longest, end - start + 1);
    visited.add(letter);
    end++;
  }
  return longest;
};

/*
s = "abcabcbb"
          s
           e
letter = b
longest = 3
visited = {a,b,c}
*/
