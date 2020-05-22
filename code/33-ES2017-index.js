// ECMAScript 2017

// 1：对Object对象的3个扩展方法 *******************************
const obj = {
    name:'chongchong',
    age: 18
}
// 1.1 Object.values--------------------
// 与ES5中的Object.keys类似，只是Object.keys返回对象键组成的数组，Object.values返回值组成的数组
console.log(Object.values(obj))


// 1.2 Object.entries--------------------
// 以数组的形式返回对象中所有的键值对
console.log(Object.entries(obj))
// 使得直接使用for of循环遍历普通对象
for(const [key, vlaue] of Object.entries(obj)){
    console.log(key, vlaue)
}
// Map的构造函数需要的就是这种格式的数组，所以可以借助于entries方法将对象转换成一个Map类型的对象
console.log(new Map(Object.entries(obj)))


// 1.3 Object.getOwnPropertyDescriptors--------------------
// 作用：获取对象当中属性的完整描述信息
// 从ES5后就可以为对象定义get set属性，而这些属性是不能直接通过Object.assign方法完全复制的，如：
const p1 = {
    firstName:'xc',
    lastName:'Wang',
    get fullName () {
        return this.firstName +' '+this.lastName
    }
}
console.log(p1.fullName)

// 复制出一个p2对象
const p2 = Object.assign({}, p1)
p2.firstName = 'chongchong'
console.log(p2.fullName)
// 输出的结果并不是chongchong Wang，而是p1中的firstName
// 这是因为Object.assign方法在复制时只是将fullName当做一个普通的属性复制了
console.log(p2)

// 此时可以用Object.getOwnPropertyDescriptors方法获取对象中属性的完整信息，再使用Object.defineProperties方法将描述信息定义到一个新的对象当中
// 这样就可以将get set类型的属性做到复制
const descriptors = Object.getOwnPropertyDescriptors(p1)
// console.log(descriptors)
const p3 = Object.defineProperties({}, descriptors)
p3.firstName = 'chongchong'
console.log(p3.fullName)
// ----> 以上就是Object.getOwnPropertyDescriptors方法的意义，主要就是配合ES5中新增的get set去使用





// 2：Sring.prototype.padStart / Sring.prototype.padEnd *******************************
// 字符串填充方法，功能简单，但很使用
const page = {
    html: 4,
    css: 12,
    javascript: 222
}
for(const [name, count] of Object.entries(page)){
    console.log(name, count)
}
// 将输出对齐:用给定字符串填充目标字符串的开始和结束位置直到字符串达到指定长度位置为止
for(const [name, count] of Object.entries(page)){
    console.log(`${name.padEnd(16, '-')}|${count.toString().padStart(3, '0')}`)
}



// 3：在函数参数中添加尾逗号 *******************************
// function foo(bar, baz,) {}
// 如，数组中的最后一项有无逗号均可，但是有逗号后的好处：
// -------> 1.每一项格式相同，在移动位置时很容易
// -------> 2.在尾部新增项时只需改动一行
// -------> 3.让源代码的管理工具更精确的定位到实际发生改动的位置
const arr = [
    100,
    200,
    300,
]
// 尾逗号本身只是一个很小的变化，并不影响实际功能层面的变化。
// ES2017只是允许在调用函数或者传递参数时尾部添加逗号，但并不影响实际功能