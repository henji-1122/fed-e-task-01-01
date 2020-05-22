// Reflect 对象
const obj = {
    foo: '123',
    bar: '333'
}
const proxy = new Proxy(obj, {
    // 处理对象当中并没有添加任何成员
    // 在此可以添加不同的方法成员，监听对象成员的操作
    // 若不添加具体的处理方法，如get set，他内部是怎样执行的?
    // 其实Proxy处理对象内部默认实现的逻辑就是调用了Reflect对象当中对应的方法
    // 即我们没有定义get方法，就等同于是定义了一个get方法，在内部将参数原封不动的交给Reflect的get方法，结果是一样的
    // 这表明我们在实现自定义的get set这样的逻辑时，更标准的方式是先实现自己所需要的的监视逻辑，然后通过返回reflect对象中所对应方法的调用结果
    get(target, property){
        console.log('watch logic...')
        return Reflect.get(target, property)
    }
})
console.log(proxy.foo)



//统一提供了一套用于操作对象的API------------------
const person = {
    name: 'chongchong',
    age: 18
}
// 同样是操作一个对象，有时用操作符 有时用方法，会不统一
// 判断是否存在某个属性: in操作符
console.log('name' in person)
// 删除某个属性：delete操作符
console.log(delete person['name'])
// 获取所有的属性名：Object.keys()方法
console.log(Object.keys(person))

// Reflect方法
console.log(Reflect.has('name'))
console.log(Reflect.deleteProperty(person,'name'))
console.log(Reflect.ownKeys(person))