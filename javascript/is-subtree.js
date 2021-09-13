//
// Binary trees are already defined with this interface:
// function Tree(x) {
//   this.value = x;
//   this.left = null;
//   this.right = null;
// }
function isSubtree(t1, t2) {
  if (!t2) return true;

  const matchingNodes = [];
  const queue = t1 ? [t1] : [];
  while (queue.length !== 0) {
    const node = queue.shift();
    if (node.value === t2.value) matchingNodes.push(node);
    if (node.left) queue.push(node.left);
    if (node.right) queue.push(node.right);
  }
  for (const node of matchingNodes) {
    if (treesAreEqual(node, t2)) return true;
  }
  return false;
}

function treesAreEqual(t1, t2) {
  if (!t1 && !t2) return true;
  if (!t1 || !t2 || t1.value !== t2.value) return false;
  return treesAreEqual(t1.left, t2.left) && treesAreEqual(t1.right, t2.right);
}

/*
bfs of t1 and push all matching nodes to a list

check if nodes are equal
    if both terminate
        return true
    if n1 or n2 terminate or n1.value != n2.value
        return false
    return n1.left = n2.left && n1.right = n2.right
*/
