// 参数默认值
// function foo(enable){
//     // enable = enable || true
//     enable = enable === undefined ? true : enable
//     console.log('foo invoked -- enable:')
//     console.log(enable)
// }
// foo(false)


// 参数默认值
function foo(bar, enable=true){
    console.log('foo invoked -- enable:')
    console.log(enable)
}
foo(false)