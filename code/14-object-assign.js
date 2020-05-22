// Object.assign方法
// const source1 = {
//     a: 111,
//     b: 111
// }
// const source2 = {
//     a: 222,
//     c: 222
// }
// const target = {
//     a: 333,
//     d: 333
// }

// const result = Object.assign(target, source1, source2)
// console.log(result)
// console.log(target === result)


// ----------------------------------
const obj = {name:'global obj'}
function func(obj){
    // obj.name = 'func obj'
    // console.log(obj)

    const funcObj = Object.assign({},obj)
    obj.name = 'func obj'
    console.log(funcObj)
}
func(obj)
console.log(obj)