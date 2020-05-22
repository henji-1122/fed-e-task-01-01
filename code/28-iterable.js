// 实现迭代接口(Iterable)

const obj = { // 1. 自定义对象，实现了可迭代接口Iterable,这个接口约定在内部必须有一个用于返回迭代器的iterator方法
    // 因为是symbol提供的一个常量，所以用计算属性名的方式定义到字面量当中
    [Symbol.iterator]: function(){
        return { // 2. iterator返回的对象，实现了迭代器接口Iterator，内部约定了必须有一个用于迭代的next方法
            next: function (){
                return { // 3. 实现了迭代结果接口IterationResult，内部约定了必须要有一个value属性用于标识当前被迭代到的数据，值可以是任意类型，done标识迭代是否结束
                    value: 'chongchong',
                    done: true
                }
            } 
        }
    }
}
// 试运行遍历obj对象时并不报错，说明实现的这个可迭代接口能被for of循环遍历
// 只是并没有执行循环体,因为next方法中的返回值是写死的，内部第一次调用next返回结果中的done为true表示循环结束，就不会执行循环体了
for(const item of obj){
    console.log(item)
}


// -------------------------------------------
const obj1 = {
    store: ['foo', 'bar', 'baz'],

    [Symbol.iterator]: function(){
        let index = 0
        const self = this
        return {
            next: function(){
                const result = {
                    value: self.store[index],
                    done: index >= self.store.length
                }
                index++
                return result
            }
        }
    }
}

for(const item of obj1){
    console.log('循环体', item)
}