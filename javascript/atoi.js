/**
 * @param {string} s
 * @return {number}
 */
var myAtoi = function (s) {
  s = s.trimStart();
  let sign = '+';
  if (s[0] === '-' || s[0] === '+') {
    sign = s[0];
    s = s.substring(1);
  }

  let numberStr = '';
  while (Number.isInteger(parseInt(s[0]))) {
    numberStr += s[0];
    s = s.substring(1);
  }

  let number = numberStr === '' ? 0 : parseInt(numberStr);
  const limit = 2 ** 31;
  if (sign === '-') {
    if (number > limit) {
      return -limit;
    } else {
      return -number;
    }
  }

  if (number > limit - 1) {
    return limit - 1;
  } else {
    return number;
  }
};
