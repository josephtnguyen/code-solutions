/**
 * @param {number} num
 * @return {string}
 */
var intToRoman = function (num) {
  let ones = '';
  let toNumeral = num % 10;
  num = num - toNumeral;
  if (toNumeral === 10 - 1) {
    ones += 'IX';
  } else if (toNumeral === 10 - 6) {
    ones += 'IV'
  } else {
    if (toNumeral >= 5) {
      toNumeral -= 5;
      ones += 'V';
    }
    for (let i = 0; i < toNumeral; i++) {
      ones += 'I';
    }
  }

  let tens = '';
  toNumeral = num % 100;
  num = num - toNumeral;
  toNumeral = toNumeral / 10;
  if (toNumeral === 10 - 1) {
    tens += 'XC';
  } else if (toNumeral === 10 - 6) {
    tens += 'XL'
  } else {
    if (toNumeral >= 5) {
      toNumeral -= 5;
      tens += 'L';
    }
    for (let i = 0; i < toNumeral; i++) {
      tens += 'X';
    }
  }

  let hundreds = '';
  toNumeral = num % 1000;
  num = num - toNumeral;
  toNumeral = toNumeral / 100;
  if (toNumeral === 10 - 1) {
    hundreds += 'CM';
  } else if (toNumeral === 10 - 6) {
    hundreds += 'CD'
  } else {
    if (toNumeral >= 5) {
      toNumeral -= 5;
      hundreds += 'D';
    }
    for (let i = 0; i < toNumeral; i++) {
      hundreds += 'C';
    }
  }

  let thousands = '';
  toNumeral = num / 1000;
  for (let i = 0; i < toNumeral; i++) {
    thousands += 'M';
  }

  return thousands + hundreds + tens + ones;
};
