//
// Binary trees are already defined with this interface:
// function Tree(x) {
//   this.value = x;
//   this.left = null;
//   this.right = null;
// }
function kthSmallestInBST(t, k) {
  // const ordered = expand(t);
  // return ordered[k - 1];

  let current = t;
  while (true) {
    current = getLeftMost(current);
    if (k === 1) {
      return current.value;
    } else if (current.right) {
      current.right.parent = current;
      k--;
      current = current.right;
    } else {
      parent = current.parent;
      if (current.value < parent.value) {
        k--;
        parent.left = null;
      } else {
        parent.right = null;
      }
      current = parent;
    }
  }
}

function getLeftMost(t) {
  let current = t;
  while (current.left) {
    const left = current.left;
    left.parent = current;
    current = left;
  }
  return current;
}

// function expand(t) {
//     if (!t) return [];

//     return [...expand(t.left), t.value, ...expand(t.right)];
// }

/*
expand t into an array
    return array[k - 1]
    note this is an O(n) solution
*/

/*
traverse to leftmost node while giving nodes a pointer back to parent
if k = 1
    return node.value
else if there is a right node
    decrement k and move to right node
else if there is neither left or right
    if in left node
        decrement k and move to parent
    else in right node
        move to parent
    remove pointer from parent to node

*/
