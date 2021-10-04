/**
 * @param {number} dividend
 * @param {number} divisor
 * @return {number}
 */
var divide = function (dividend, divisor) {
  let negative = false;
  if (dividend < 0) {
    negative = !negative;
    dividend = -dividend;
  }
  if (divisor < 0) {
    negative = !negative;
    divisor = -divisor;
  }

  let quotient = 0;
  let sum = divisor;
  while (sum <= dividend) {
    let subtractor = divisor;
    let times = 1;
    while (sum + subtractor + subtractor < dividend) {
      subtractor += subtractor;
      times += times;
    }
    sum += subtractor;
    quotient += times;
  }

  const answer = negative ? -quotient : quotient;
  if (answer > 2147483647) return 2147483647;
  return answer;
}

/*
remove signs
calculate final sign

while divident is greater than divisor
  subtract divisor from divident
  increment counter(solution)

implement sign
return solution


*/
