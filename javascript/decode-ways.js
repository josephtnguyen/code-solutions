/**
 * @param {string} s
 * @return {number}
 */
var numDecodings = function (s) {
  const chunks = [];
  let chunk = [];
  for (const number of s) {
    if (number === '0') {
      const anotherChunk = chunk.pop() + '0';
      chunks.push(chunk.join(''), anotherChunk);
      chunk = [];
    } else {
      chunk.push(number);
    }
  }
  chunks.push(chunk.join(''));

  const mults = [];
  for (const chunk in chunks) {
    mults.push(findWays(chunk));
  }

  const ways = mults.reduce((acc, mult) => (acc * mult) % (10 ** 9 + 7), 1);
  return ways;
};

function findWays(s) {
  let total = 0;
  for (let i = 1; i < s.length + 1; i++) {
    total += choose(s.length, i);
  }
  return total;
}

function choose(n, k) {
  let nFacOverKFac = 1;
  for (let i = n; i > k - 1; i--) {
    nFacOverKFac *= i;
  }
  let nMinusKFac = 1;
  for (let i = n - k; i > 1; i--) {
    nMinusKFac *= i;
  }
  return nFacOverKFac / nMinusKFac;
}
