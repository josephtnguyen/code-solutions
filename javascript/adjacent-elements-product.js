function adjacentElementsProduct(inputArray) {
  var max = inputArray[0] * inputArray[1];
  for (var i = 1; i < inputArray.length - 1; i++) {
    if (max < inputArray[i] * inputArray[i + 1]) {
      max = inputArray[i] * inputArray[i + 1];
    }
  }
  return max;
}
