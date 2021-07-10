/**
 * @param {number} x
 * @return {number}
 */
var reverse = function (x) {
  let strung = x.toString().split('');
  let reversedString = '';
  if (strung[0] === '-') {
    reversedString = strung.shift();
  }
  for (let i = strung.length - 1; i >= 0; i--) {
    reversedString += strung[i];
  }
  const final = parseInt(reversedString);
  return final > 2 ** 31 || final < -(2 ** 31) ? 0 : final;
};
