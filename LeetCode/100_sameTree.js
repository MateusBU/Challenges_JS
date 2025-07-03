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

const q = {
  val: 1,
  left: { val: 1, left: null, right: null },
  right: { val: 2, left: null, right: null }
};

function inorderTraversal(p, q) {   
    return (treesAreEqual(p, q));
}
function treesAreEqual(p, q) {
  if(!p && !q) return true;
  if(!p || !q) return false;
  if(p.val !== q.val) return false;
  
  return treesAreEqual(p.left, q.left) && treesAreEqual(p.right, q.right);
  
}
console.log(inorderTraversal(p, q)); 