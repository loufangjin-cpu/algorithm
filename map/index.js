const m = new Map();

// 增
m.set('a', 'aa');
m.set('b', 'bb');

// 删
m.delete('b');
// m.clear();

// 改
m.set('a', 'aaa');
// 求两个数的交集
// 以其中一个数组创建字典、然后在另外一个数组中判断哪些值在字典里面有
function diff (n1,n2) {
    const map = new Map()
    n1.forEach(item => {
    map.set(item, true)
    });
    const res = []
    n2.forEach(item => {
        if(map.get(item)) {
         res.push(item)
        map.delete(item) // 已经了就删除，避免重复push相同的值
     }
    })
     return res
}
