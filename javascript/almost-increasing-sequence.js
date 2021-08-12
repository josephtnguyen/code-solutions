function almostIncreasingSequence(sequence) {
  var solutionFound = false;

  for (var i = 0; i < sequence.length - 1; i++) {
    if (!(sequence[i] < sequence[i + 1])) {
      if ((sequence[i] < sequence[i + 2]) || !(sequence[i + 2])) {
        if (!solutionFound) {
          solutionFound = true;
          i++;
        } else {
          return false;
        }
      } else if ((sequence[i - 1] < sequence[i + 1]) || !(sequence[i - 1])) {
        solutionFound = true;
      }
      else {
        return false;
      }
    }
  }

  return true;
}
