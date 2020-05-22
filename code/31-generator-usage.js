// Generator 应用

// 案例1：发号器
function * createIdMaker () {
    let id =1
    while(true){
        yield id++
    }
}
const idMaker = createIdMaker()
console.log(idMaker.next().value)
console.log(idMaker.next().value)
console.log(idMaker.next().value)

// 案例2： 使用Generator函数实现Iterator方法
const todos = {
    life: ['吃饭','睡觉','打豆豆'],
    learn:['语文','数学','外语'],
    work: ['开发'],
    [Symbol.iterator]: function * (){
        const all = [...this.life, ...this.learn, ...this.work]
        // 不再手动返回迭代器对象，直接在iterator方法中遍历所有的成员，然后用yield返回每一个被遍历到的对象即可
        // const index = 0
        // return {
        //     next: function(){
        //         return {
        //             value: all[index],
        //             done: index++ >= all.length
        //         }
        //     }
        // }
        for(const item of all){
            yield item
        }
    }
}
for(const item of todos){
    console.log(item)
}


// 以上是生成器函数的一些简单的用途，但是他最主要的用途还是用来解决异步编程中回调嵌套过深产生的问题