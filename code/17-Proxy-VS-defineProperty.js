// proxy
const person = {
    name:'chongchong',
    age:18
}

// 优势1. delete操作：
// 在代理处理对象中添加一个deleteProperty的代理方法，此方法在外部对代理对象进行delete操作时自动执行
const personProxy = new Proxy(person, {
    deleteProperty(target, property){ // 代理对象，所要删除的属性名称
        console.log('delete', property)
        delete target[property] // 删除属性
    }
})
delete personProxy.age
console.log(person)
// 出delete以外还有很多对象操作都能被监视到


// 优势2. 更好的支持数组对象的监视
const arr = []
const arrProxy = new Proxy(arr, {
    set(target, property, value){
        console.log('set', property, value)
        target[property] = value
        return true // 标识设置成功
    }
})
arrProxy.push(100)


// 优势3. Proxy是以非侵入的方式监管了对象的读写
const person = {}
Object.defineProperty(person, 'name', {
    get(){
        console.log('name 被访问')
        return person._name
    },
    set(value){
        console.log('name 被设置')
        person._name = value
    }
})

Object.defineProperty(person, 'age', {
    get(){
        console.log('age 被访问')
        return person._age
    },
    set(value){
        console.log('age 被设置')
        person._age = value
    }
})
person.name = 'tom'
console.log(person.name)


// Proxy 方式更为合理
const person2 = {
    name: 'chongchong',
    age: 18
}
const personProxy = new Proxy(person2, {
    get(target, property){
        return target[property]
    },
    set(target, property, valye){
        target[property] = value
    }
})
personProxy.name = 'tom'
console.log(personProxy.name)