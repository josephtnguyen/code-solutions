/**
 * @param {character[][]} grid
 * @return {number}
 */
var numIslands = function (grid) {
  let num = 0;
  for (let i = 0; i < grid.length; i++) {
    for (let j = 0; j < grid[0].length; j++) {
      if (grid[i][j] === '1') {
        num++;
        removeIsland(grid, i, j);
      }
    }
  }
  return num;
};

function removeIsland(grid, i, j) {
  grid[i][j] = '0';
  const neighbors = [[i - 1, j], [i, j - 1], [i + 1, j], [i, j + 1]];
  for (const neighbor of neighbors) {
    const [a, b] = neighbor;
    if (grid[a] && grid[a][b] === '1') removeIsland(grid, a, b);
  }
}
