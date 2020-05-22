// 对象的解构
const obj = {name:'chongchong', age:18}
// const {name, age} = obj
// console.log(age)

// const name = 'haha'
// const {name} = obj
// console.log(name)

//因为obj中的name属性必须要用name去提取，冲突不可避免，所以这里可以用重命名的方式解决，也可以设定默认值
// const {name:objName = 'hehe'} = obj
// console.log(objName)


// ------------------------------------
// 结构对象的应用场景会很多，都是为了简化代码
// 如：当大量用到console这个方法时，我们可以将其单独结构出来：
const {log} = console
log('chongchong')
log('123')