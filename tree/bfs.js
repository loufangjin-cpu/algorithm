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
// 广度遍历： 入队出队的操作
// 口诀
// 新建一个队列，把根节点入队；
//把对头出队并访问；
//把对头的chaldren挨个入队；
//重复第二、三步，直到队列为空。
const bfs = (root) => {
    const q = [root];
    while (q.length > 0) {
        const n = q.shift();
        console.log(n.val);
        n.children.forEach(child => {
            q.push(child);
        });
    }
};

bfs(tree);
