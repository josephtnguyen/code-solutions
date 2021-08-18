function isLucky(n) {
  var digits = [];

  let number = n;
  for (var i = 5; i >= 0; i--) {
    var digit = Math.trunc(number / Math.pow(10, i));
    number = number - digit * Math.pow(10, i);
    if (!(digit === 0 && digits.length === 0)) {
      digits.push(digit);
    }
  }

  var first = 0;
  var second = 0;
  for (i = 0; i < digits.length; i++) {
    if (i < digits.length / 2) {
      first += digits[i];
    } else {
      second += digits[i];
    }
  }

  if (first === second) {
    return true;
  } else {
    return false;
  }

}
