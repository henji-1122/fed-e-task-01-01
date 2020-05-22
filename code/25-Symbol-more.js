// ES2015 Symobl数据类型

console.log(
    Symbol() === Symbol(),
    Symbol('111') === Symbol('222')
)


// 全局复用一个相同的Symbol值,可通过Symbol类型提供的静态for方法实现
// for()方法接收一个字符串参数，相同的字符串一定会返回相同Symbol类型的值，此方法内部维护了一个全局的注册表，为字符串和Symbol值提供一个一一对应的关系
const s1 = Symbol.for('111')
const s2 = Symbol.for('111')
console.log(s1 === s2)

// 这个方法内部维护的是字符串与symbol之间的对应关系，如果传入的不是字符串，方法内部会自动转换为字符串
console.log(
    Symbol.for(true) === Symbol.for('true')
)

// 内置的Symbol常量
console.log(Symbol.iterator)
console.log(Symbol.hasInstance)



// 自定义对象的toString标签
const obj = {
    // 若使用字符串类型添加标识符可能会跟内部成员重复，所以要求使用Symbol值实现此接口
    // toStringTag就是一个内置的Symbol常量，这种Symbol在后面为对象实现迭代器时会用到
    [Symbol.toStringTag]: 'XObject'  // [object XObject]  此时的 toString标签就是XObject
}
console.log(obj.toString())  // 对象的toString标签


//---------------------------
// 用Symbol的值作为对象的属性名时，
const obj1 = {
    [Symbol()]: 'symbol value',
    foo: 'normal value'
}
// 传统的for in循环是无法拿到的
for(var key in obj1){
    console.log(key)
}
// Object.keys也是无法拿到symbol属性名的
console.log(Object.keys(obj1))
// 通过JSON.stringify()序列化对象为json字符串时，symbol属性也会被忽略掉
console.log(JSON.stringify(obj1))

//------>所有这些特性都使得Symbol类型的属性特别适合对象的私有属性
// 获取Symbol类型的属性名用Object.getOwnPropertySymbols(),类似于Object.keys，只是Object.keys获取的是字符串属性名，Object.getOwnPropertySymbols得到的是symbol类型的属性名
console.log(Object.getOwnPropertySymbols(obj1))