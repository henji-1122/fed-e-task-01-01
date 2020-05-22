// 展开数组参数

// 以往用下标取
// const arr = ['bar', 'baz', 'foo']
// console.log(arr[0], arr[1], arr[2])




// 函数的.apply方法实现
//第一个参数是this的指向，这里是console调用的，所以是其本身
//第二个参数为实参类别数组
// const arr = ['bar', 'baz', 'foo']
// console.log.apply(console, arr)  



// ...实现
const arr = ['bar', 'baz', 'foo']
console.log(...arr)
