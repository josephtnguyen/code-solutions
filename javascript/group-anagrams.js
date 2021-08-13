/**
 * @param {string[]} strs
 * @return {string[][]}
 */
var groupAnagrams = function (strs) {
  const anagrams = {};
  for (const str of strs) {
    const ordered = str.split('').sort().join('');
    if (anagrams[ordered]) {
      anagrams[ordered].push(str);
    } else {
      anagrams[ordered] = [str];
    }
  }
  return Object.values(anagrams);
};
