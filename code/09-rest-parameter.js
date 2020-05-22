// 剩余参数

//arguments
// function foo(){
//     console.log(arguments)
// }
// foo(1,2,3)



// ...
function foo(f, ...args){
    console.log(args)
}
foo(1,2,3)