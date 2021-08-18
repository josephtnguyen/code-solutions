function allLongestStrings(inputArray) {
  var longestLength = 0;
  var strings = [];
  for (var i = 0; i < inputArray.length; i++) {
    if (inputArray[i].length > longestLength) {
      longestLength = inputArray[i].length;
      strings = [];
      strings.push(inputArray[i]);
    } else if (inputArray[i].length === longestLength) {
      strings.push(inputArray[i]);
    }
  }
  return strings;
}
