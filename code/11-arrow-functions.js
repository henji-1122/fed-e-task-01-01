// arrow-functions
// function foo(number){
//     return number+1
// }


// const foo = number => number+1
// console.log(foo(100))

// 筛选处基数
const str = [1, 2, 3, 4, 5, 6, 7]
str.filter(function(item){
    return item%2
})

// 箭头函数实现
str.filter(i => i % 2)