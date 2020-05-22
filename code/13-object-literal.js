// 对象字面量
const bar = '123'
const obj = {
    foo: 333,
    // bar: bar,
    bar, // 属性名与变量名相同时可省略
    // foo: function(){
    //     console.log('foo')
    // }
    foo(){
        console.log('foo')
    },
    [Math.random()]:123  // 计算属性名
}
// obj[Math.random()]=123
console.log(obj)