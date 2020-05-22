// Map 数据结构

const obj = {}
// 试将数值、Boolean、对象作为对象的键：
obj[123] = 'value'
obj[true] = 'value'
obj[{a:1}] = 'value'
// 在获取对象的键时，原本其他类型的键都会被toString的方式转换为了字符串
console.log(Object.keys(obj))
// 也就是说，如果存入的键类型不是字符串，内部默认会将其转为字符串类型


// 假设，用对象去存储学生的成绩，如果用学生对象作为键，不管对象内部的属性有什么不同，toString后的结果都是一样的
// 无法做到区分

// Map才是真正严格意义上的键值对集合，用来映射2个任意类型键值对数据之间的对应关系
const m = new Map()

const tom = {name:'tom'}
m.set(tom, 90)
// console.log(m)
// // 获对应键的取值
// console.log(m.get(tom))
// // 判断是否存在某个键
// console.log(m.has(tom))
// // 删除某个键
// console.log(m.delete(tom))
// // 清空所有键值
// console.log(m.clear(tom))
// console.log(m)

// 遍历Map对象当中所有的键值,使用实例对象的forEach方法
m.forEach((value, key) => {// (被遍历的值，被遍历的键)
    console.log(value, key) 
})

