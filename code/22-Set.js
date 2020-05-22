// Set 数据结构

// 通过类型构建实例s
const s = new Set()
// 通过实例的add()方法往集合中存放数据
// add()方法会返回实例本身，所以可以链式调用
// 如果添加了重复的数据，会被忽略
s.add(1).add(2).add(3).add(4).add(1)  
console.log(s)

// 遍历集合中的数据
s.forEach(i => console.log(i))

// 用ES2015中的for of循环
for(let i of s){
    console.log(i)
}

// Set的size方法获取集合长度
console.log(s.size)

// 是否存在某个值
console.log(s.has(1))

// 删除集合中的某个值,删除成功返回true
console.log(s.delete(1))
console.log(s)

// 清除集合中的数据
s.clear()
console.log(s)


// Set最常用的场景：数组元素去重-------------------------------
const arr = [1,2,3,4,5,6,2,1]
// const result = new Set(arr)
// 用ES2015新增的Array.from方法 将去重后的集合再次转换为数组
// const result = Array.from(new Set(arr))
// 或者用...展开的方式转换为数组
const result = [...new Set(arr)]

console.log(result)


