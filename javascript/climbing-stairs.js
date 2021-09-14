function climbingStairs(n) {
  let total = 0;
  for (let steps = Math.ceil(n / 2); steps <= n; steps++) {
    const twos = n - steps;
    const ones = steps - twos;
    total += choose(steps, twos);
  }
  return total;
}

function choose(n, k) {
  // n!/k!(n - k)!
  return fact(n) / (fact(k) * fact(n - k));
}

function fact(x) {
  let total = 1;
  for (let i = x; i >= 2; i--) {
    total *= i;
  }
  return total;
}

/*
for a given n, it takes between ceil(n/2) and n steps to get to the top
    for each number of steps:
        ones + twos = num
        ones + 2twos = n
    or twos = n - nums; ones = nums - twos
    therefore, we have num C twos choices for each num
    sum the choices to get the total
*/
