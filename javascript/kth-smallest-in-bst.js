//
// Binary trees are already defined with this interface:
// function Tree(x) {
//   this.value = x;
//   this.left = null;
//   this.right = null;
// }
function kthSmallestInBST(t, k) {
  const ordered = expand(t);
  return ordered[k - 1];
}

function expand(t) {
  if (!t) return [];

  return [...expand(t.left), t.value, ...expand(t.right)];
}

/*
expand t into an array
    return array[k - 1]
*/
