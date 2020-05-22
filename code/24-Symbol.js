// ES2015 Symobl数据类型

const cache = {}
// a.js------
cache['foo'] = Math.random

// b.js-------
cache['foo'] = 123

console.log(cache)

// ------> 此时这个对象的值就会产生冲突
// 解决方案可以是约定不同文件中属性名的不同命名
cache['a_foo'] = 456
// 但是约定并未彻底解决问题

// ES2015新增的Symbol数据类型可以解决此问题
const s = Symbol()
console.log(s)
console.log(typeof s)  // 说明Symbol是一个全新的数据类型


// 通过Symbol()函数创建的值是唯一的
console.log(Symbol() === Symbol())

//方便在开发过程中的调试，允许传入一个参数，作为这个Symbol的描述文本
console.log(Symbol('111'))
console.log(Symbol('222'))

//Symbol作为对象属性名
const obj = {}
obj[Symbol()] = '123'
obj[Symbol()] = '456'
console.log(obj) 

// 以计算属性名的方式用Symbol作为属性名
const obj1 = {
    [Symbol()]: 123
}
console.log(obj1)


// 模拟私有成员
// a.js----------------
const name = Symbol()
const person = {
    [name]:  'chongchong',
    say() {
        console.log(this[name])
    }
}
// b.js----------------
console.log(person[Symbol()])
person.say()