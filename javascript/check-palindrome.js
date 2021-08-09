function checkPalindrome(inputString) {
  var end = inputString.length;
  for (var i = 0; i < Math.floor(end / 2); i++) {
    if (inputString[i] !== inputString[end - 1 - i]) {
      return false;
    }
  }
  return true;
}
