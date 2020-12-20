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

// leedCode 111  找出找出最小深度
var bt1 = {
    val: 1,
    left: {
        val: 2,
        left: {
            val: 4,
            left: null,
            right: null,
        },
        right: {
            val: 5,
            left: null,
            right: null,
        },
    },
    right: {
        val: 3,
        left: {
            val: 6,
            left: null,
            right: null,
        },
        right: {
            val: 7,
            left: null,
            right: null,
        },
    },
};
var minDepth = function (root) {
    if(!root) return 0
    const que = [[root, 1]]
    while(que.length) {
        const [cur, l] = que.shift()
        // console.log(cur.val)
        if(!cur.left && !cur.right) {
            return l
        }
        if(cur.left) que.push([cur.left, l + 1])
        if(cur.right) que.push([cur.right, l + 1])
    }
}
console.log('min', minDepth(bt1))