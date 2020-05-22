// 数组的解构
// 以往我们获取数组中的元素需要通过索引访问
const arr = [100, 200, 300]
// const foo = arr[0]
// const baz = arr[1]
// const bar = arr[2]
// console.log(foo,baz,bar)


//解构方式快速提取数组中的成员：
//具体用法：将以前定义变量名的地方用[]，[]中就是所要提取出的数据所存放的变量名，数组内部就会自动分配数组当中所对应位置的的数值：
// const [foo,baz,bar] = arr
// console.log(foo,baz,bar)

//提取指定位置的成员
// const [,,bar] = arr
// console.log(bar)

//提取从当前位置开始以后的所有成员，放在一个数组中
// const [foo, ...rest] = arr
// console.log(rest)

//结构位置的成员小于数组长度，会从头提取，后面不会被提取到
// const [foo] = arr
// console.log(foo) 

//结构位置的成员大于数组的长度，提取到的就是undefined
// const [foo,baz,bar,more] = arr
// console.log(more) 

//给提取的成员设置默认值,如果变量没有提取到值就会取到默认值
// const [foo=111,baz,bar,more='hehe'] = arr
// console.log(foo)




// 应用场景：拆分一个字符串，然后提取拆分后指定位置的值
const path = 'foo/bar/baz'
// 传统用法 用一个变量做过渡
// const tmp = path.split('/')
// console.log(tmp[1])

const [, rootdir] = path.split('/')
console.log(rootdir)