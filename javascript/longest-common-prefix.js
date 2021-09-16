/**
 * @param {string[]} strs
 * @return {string}
 */
var longestCommonPrefix = function (strs) {
  let prefix = strs[0];
  for (let i = 1; i < strs.length; i++) {
    let nextPrefix = '';
    for (let j = 0; j < strs[i].length; j++) {
      const char = strs[i][j];
      if (char === prefix[j]) nextPrefix += char;
      else if (j === 0) return '';
      else break;
    }
    prefix = nextPrefix;
  }
  return prefix;
};

/*
start with first string as prefix
loop through next strings
for each string
  loop through chars of string
    if the char matches the char in the prefix
      append it to a new prefix
    if the first chars do not match
      return ''
    terminate once the chars no longer match
    replace prefix with new prefix
return final prefix
*/
