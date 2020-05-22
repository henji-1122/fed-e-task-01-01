// 迭代器设计模式

// 场景：A、B 协同开发一个任务清单应用

// A: 设计存放所有任务的对象---------------------
const todos = {
    life: ['吃饭','睡觉','打豆豆'],
    learn:['语文','数学','外语'],
    //增加work属性
    work: ['开发'],

    // 对外提供数据遍历接口
    each: function(callback){
        const all = [].concat(this.life,this.learn,this.work)
        for(const item of all){
            console.log(item)
        }
    },

    // 迭代器的方式
    [Symbol.iterator]: function(){
        const all = [...this.life, ...this.learn, ...this.work]
        let index = 0
        return {
            next: function(){
                return {
                    value: all[index],
                    done: index++ >= all.length
                }
            }
        }
    }
}

// B：将所有任务项罗列呈现到界面--------------------
// 1. B必须要知道A中对象的数据结构，才能遍历出对象的所有数据
for(const item of todos.life){
    console.log(item)
}
for(const item of todos.learn){
    console.log(item)
}
// 2. 当A中对象的数据结构发生变化(增加work属性)，B中的代码与A中的数据结构是严重耦合的，所以要随之变化
for(const item of todos.work){
    console.log(item)
}

console.log('-------------------------------')

// 3. 此时，如果A中能够对外提供一个统一的数据遍历接口，对于B调用者而言，就不用关系A中对象内部的解构是如何的，更不用担心A中数据解构发生变化后所产生的影响
// 在A中定义一个each的方法，接收外部的回调参数，遍历内部所有的数据
// 在外部只需调用这个统一的遍历接口即可，所有数据都以回调的方式输出，可直接使用
todos.each(function(item){
    console.log(item)
})

console.log('-------------------------------')

// 4. 实现可迭代接口也是相同的道理，尝试用迭代器的方式实现
for(const item of todos){
    console.log(item)
}


//--------------------------------
// 这就是实现迭代器的意义
// 迭代器模式他的核心：对外提供统一遍历接口，让外部调用不再关心数据内部结构
// each方法只使用与当前这个数据结构，而迭代器是语言层面实现了迭代器模式，适用于任意数据结构，只需要我们通过代码实现iterator方法，实现他的迭代逻辑即可
// 这种设计模式在很多地方都会用到，只是大部分我们都关注于表象，不曾关心内部实现而已
