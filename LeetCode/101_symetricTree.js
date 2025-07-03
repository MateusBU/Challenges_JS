// const p = {
//   val: 1,
//   left: { val: 2, left: null, right: null },
//   right: { val: 3, left: null, right: null }
// };

// const q = {
//   val: 1,
//   left: { val: 2, left: null, right: null },
//   right: { val: 4, left: null, right: null }
// };

const p = {
  val: 1,
  left: { val: 2, left: null, right: null },
  right: { val: 1, left: null, right: null }
};

const root = {
  val: 1,
  left: { val: 2, left: null, right: null },
  right: { val: 2, left: null, right: null }
};

function inorderTraversal(root) {   
    return (treesAreEqual(root.left, root.right));
}
function treesAreEqual(p, q) {
  if(!p && !q) return true;
  if(!p || !q) return false;
  if(p.val !== q.val) return false;
  
  return treesAreEqual(p.left, q.right) && treesAreEqual(p.right, q.left);
  
}
console.log(inorderTraversal(root)); 