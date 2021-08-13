/**
 * @param {string} s
 * @return {number}
 */
var romanToInt = function (s) {
  let value = 0;
  for (let i = 0; i < s.length; i++) {
    const numeral = s[i];
    if (numeral === 'I') {
      if (s[i + 1] === 'V') {
        value += 4;
        i++;
      } else if (s[i + 1] === 'X') {
        value += 9;
        i++;
      } else {
        value++;
      }
    } else if (numeral === 'V') {
      value += 5;
    } else if (numeral === 'X') {
      if (s[i + 1] === 'L') {
        value += 40;
        i++;
      } else if (s[i + 1] === 'C') {
        value += 90;
        i++;
      } else {
        value += 10;
      }
    } else if (numeral === 'L') {
      value += 50;
    } else if (numeral === 'C') {
      if (s[i + 1] === 'D') {
        value += 400;
        i++;
      } else if (s[i + 1] === 'M') {
        value += 900;
        i++;
      } else {
        value += 100;
      }
    } else if (numeral === 'D') {
      value += 500;
    } else if (numeral === 'M') {
      value += 1000;
    }
  }
  return value;
};
