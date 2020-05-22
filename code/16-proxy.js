// proxy
const person = {
    name:'chongchong',
    age:18
}

const personProxy = new Proxy(person, { // 代理的目标对象，代理的处理对象
    // 监视属性的访问
    get (target, property) { // 代理的目标对象，外部所访问属性的属性名
        // 方法的返回值作为外部访问此属性的结果
        // 内部正常的逻辑是：先判断代理目标对象中此属性是否存在，若存在则返回对应的值，若不存在可返回undefined或默认值
        return property in target ? target[property] : 'default'
        // console.log(target, property)
        // return target[property]  
        // return 100
    },
    // 监视属性的设置
    set (target, property, value) { // 代理目标对象，写入的属性名称，写入的属性值
        // 内部正常逻辑是：为代理目标对象设置指定的属性
        // 先做一些数据校验
        if(property === 'age'){
            if(!Number.isInteger(value)){
                throw new TypeError(`${value} is not a int`)
            }
        }
        console.log(target, property, value)  //{ name: 'chongchong', age: 18 } gender true
    }
})
personProxy.gender = true 
personProxy.age = 33
console.log(personProxy.name)
console.log(personProxy.sss)