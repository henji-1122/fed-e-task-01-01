// 带标签的模板字符串

//模板字符串一个高级用法，就是在定义模板字符串之前添加一个标签，这个标签是一个特殊的函数
//添加这个标签就是调用这个函数
//用console.log尝试做模板字符串的标签：
// const str = console.log`hello, chongchong`

// 定义一个标签函数
const name = 'chongchong'
const gender = false
function tagFunc(strings, name, gender) {
    // console.log(strings, name)
    // return '123'
    const sex = gender?'man':'woman'
    return strings[0] + name + strings[1] + sex + strings[2]
}
const result = tagFunc`hello, ${name} is a ${gender}`
console.log(result) 

