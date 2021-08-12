function matrixElementsSum(matrix) {
  var totalCost = 0;
  for (var i = 0; i < matrix.length; i++) {
    for (var j = 0; j < matrix[0].length; j++) {
      if (matrix[i][j] !== 0) {
        if (i === 0) {
          totalCost += matrix[i][j];
        } else {
          for (var k = i - 1; k >= 0; k--) {
            if (matrix[k][j] === 0) {
              break;
            } else if (k === 0) {
              totalCost += matrix[i][j];
            }
          }
        }

      }
    }
  }

  return totalCost;
}
