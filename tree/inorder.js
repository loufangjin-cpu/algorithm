const bt = require('./bt');
// 中序遍历递归版
// const inorder = (root) => {
//     if (!root) { return; }
//     inorder(root.left);
//     console.log(root.val);
//     inorder(root.right);
// };
// 中序遍历非递归版
// const inorder = (root) => {
//     if (!root) { return; }
//     const stack = [];
//     let p = root;
//     while (stack.length || p) {
//         while (p) {
//             stack.push(p);
//             p = p.left;
//         }
//         const n = stack.pop();
//         console.log(n.val);
//         p = n.right;
//     }
// };

// inorder(bt);

// leedCode 94 输出二叉树的中序遍历
// 递归版
var middle = function (root) {
    const res = []
    function deep (n) {
        if(!n) return
        deep(n.left)
        // console.log(n.val)
        res.push(n.val)
        deep(n.right)
    }
    deep(root)
}
// 中序
// 非递归版
var middle = function (root) {
   const stack = []
   const res = []
   let p = root
   while(stack.length || p) {
        while(p) {
            stack.push(p)
            p = p.left
        }
        const cur = stack.pop()
        // console.log(cur.val)
        res.push(cur.val)
        p = cur.right
   }

    return res
}
console.log('min', middle(bt1))