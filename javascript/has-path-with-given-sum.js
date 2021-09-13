//
// Binary trees are already defined with this interface:
// function Tree(x) {
//   this.value = x;
//   this.left = null;
//   this.right = null;
// }
function hasPathWithGivenSum(t, s) {
  if (!t) return false;
  if (t.value === s && !t.left && !t.right) return true;
  if (hasPathWithGivenSum(t.left, s - t.value) || hasPathWithGivenSum(t.right, s - t.value)) return true;
  return false;
  // const currentLevel = t ? [t] : [];
  // while (currentLevel.length !== 0) {
  //     const node = currentLevel[0];
  //     const accSum = node.value;
  //     if (node.left) {
  //         node.left.value += accSum;
  //         currentLevel.push(node.left);
  //     }
  //     if (node.right) {
  //         node.right.value += accSum;
  //         currentLevel.push(node.right);
  //     }
  //     if (!node.left && !node.right && node.value === s) {
  //         return true;
  //     }
  //     currentLevel.shift();
  // }

  // return false;
}

/*
bfs
    accumulate sums
    if terminating,
        if final sum is s,
            return true

return false


*/
