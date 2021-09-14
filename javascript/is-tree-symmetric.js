//
// Binary trees are already defined with this interface:
// function Tree(x) {
//   this.value = x;
//   this.left = null;
//   this.right = null;
// }
function isTreeSymmetric(t) {
  // if (!t) return true;

  return isSymmetric(t, t);

}

function isSymmetric(nodeA, nodeB) {
  if (nodeA === null && nodeB === null) return true;
  if (nodeA === null || nodeB === null || nodeA.value !== nodeB.value) return false;

  return isSymmetric(nodeA.left, nodeB.right) && isSymmetric(nodeA.right, nodeB.left);

  // let outerGood = false;
  // let innerGood = false;
  // if (nodeA.left === null && nodeB.right === null) {
  //     outerGood = true;
  // } else if (!nodeA.left || !nodeB.right) {
  //     return false;
  // } else if (nodeA.left.value !== nodeB.right.value) {
  //     return false;
  // } else {
  //     outerGood = isSymmetric(nodeA.left, nodeB.right);
  // }

  // if (nodeA.right === null && nodeB.left === null) {
  //     innerGood = true;
  // } else if (!nodeA.right || !nodeB.left) {
  //     return false;
  // } else if (nodeA.right.value !== nodeB.left.value) {
  //     return false;
  // } else {
  //     innerGood = isSymmetric(nodeA.right, nodeB.left);
  // }

  // return outerGood && innerGood;
}

/*
start on left and right
check if left and right are the same
  if both terminate,
    return true
  if only one terminates
    return false
  if their values don't match
    return false
  else we know left and right are the same and they have children
    check if outers and inners are the same

*/

/*
start with a left and right pointer respectively
if outer children do not match,
    return false
else
    if they do not terminate
        return if they are symmetrical or not
if inner children do not match,
    return false
else
    if they do not terminate
        return if they are symmetrical or not

*/
