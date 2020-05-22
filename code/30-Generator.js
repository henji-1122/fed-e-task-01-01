// Generator 生成器函数

// 定义生成器函数就是在普通函数的 function 后面加一个*
// function * foo () {
//     console.log('chongchong')
//     return 100
// }
// const result = foo()
// console.log(result.next())


function * bar() {
    console.log('1111')
    yield 100
    console.log('2222')
    yield 200
    console.log('3333')
    yield 300
}
const generator = bar()
console.log(generator.next())
console.log(generator.next())
console.log(generator.next())
console.log(generator.next())