// ES2015 for-of循环

// 基本用法-------------------
// 1. 数组的遍历:不同于for...in，for of拿到的是每个成员，而不是下标
const arr = [100,200,300,400]
// for(const item of arr){
//     console.log(item)
// }
// // 这样就可以取代数组的forEach方法，并且for of可以用break关键词随时终止循环
// arr.forEach(item => {
//     console.log(item)
// })

for(const item of arr){
    if(item>100){
        break
    }
    console.log(item)
}
// arr.forEach() //不能跳出循环
//之前终止循环使用的方法
// arr.some() // 终止循环返回true
// arr.every() // 终止循环返回false
// forEach方法中无论返回true还是false都不能终止遍历
// 在for of循环中使用break随时终止遍历



// 2. 伪数组的遍历：与数组的遍历类似
// 例如函数中的arguments对象
// 例如dom列表


// 3. set数据类型的遍历：与数组的遍历类似
const s = new Set(['foo', 'bar'])
for(const item of s){
    console.log(item)
}

// 4. Map对象的遍历：得到的键值对数组
// 配合数组结构语法，获取到键和值
const m = new Map()
m.set('foo','123')
m.set('baz','345')
for(const [key, value]  of m){
    console.log(key, value)
}

// 5. 普通对象的遍历：对象不可被迭代
const obj = {foo:123, bar:345}
for(const item of obj){
    console.log(item)
}

// for of作为所有数组的统一遍历方式，普通对象无法遍历，是为什么，看下一节
