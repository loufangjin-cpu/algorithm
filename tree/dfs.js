const tree = {
    val: 'a',
    children: [
        {
            val: 'b',
            children: [
                {
                    val: 'd',
                    children: [],
                },
                {
                    val: 'e',
                    children: [],
                }
            ],
        },
        {
            val: 'c',
            children: [
                {
                    val: 'f',
                    children: [],
                },
                {
                    val: 'g',
                    children: [],
                }
            ],
        }
    ],
};
// 深度优先
// 访问根节点、对根节点的children进行递归操作
const dfs = (root) => {
    console.log(root.val);
    root.children.forEach(dfs);
};

dfs(tree);

