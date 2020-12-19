const bt = require('./bt');
// 先序遍历递归版 （根左右）
const preorder = (root) => {
    if (!root) { return; }
    console.log(root.val);
    preorder(root.left);
    preorder(root.right);
};
// 先序遍历非递归版
// const preorder = (root) => {
//     if (!root) { return; }
//     const stack = [root];
//     while (stack.length) {
//         const n = stack.pop();
//         console.log(n.val);
//         if (n.right) stack.push(n.right);
//         if (n.left) stack.push(n.left);
//     }
// };

preorder(bt);


// leedCode 104 找出最大深度
// 根节点到最远叶子节点的最长路径上的节点数
// 叶子节点是指没有子节点的节点
// 二叉树的时间复杂度和空间复杂度、 最好的空间复杂度是log n ?
var maxDepth = function (root) {
    let res = 0
    function dfs (n, l) {
        if(!n) return
        if(!n.left && !n.right) {
            res = Math.max(res, l)
        }
        dfs(n.left, l+1);
        dfs(n.right, l+1);
    }
    dfs(root, 1)
    return res
}
console.log('max', maxDepth(bt))