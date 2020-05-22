// ECMAScript 2016

// Array.prototype.includes------
const arr = ['11','22','333',NaN,false]
// ES2016前使用indexOf判断数组中是否存在某个值，有返回下标，无返回-1
console.log(arr.indexOf('11'))
// 但是indexOf无法判断NaN的存在
console.log(arr.indexOf(NaN))

// includes可直接判断是否存在某个值，存在返回true
console.log(arr.includes(NaN))



// 指数运算符 ------
// ES2016前使用Math.pow()
console.log(Math.pow(2, 10))
// ES2016中的指数运算符是语言本身的运算符,跟+ - * 一样
console.log(2 ** 10)
// 这种新的运算符对数学密集型的应用是个很好的补充，但平常开发中很少用到