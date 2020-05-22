// class关键词

// ES6之前都是通过定义函数以及函数原型对象的方式实现类型

// 定义一个Person的类型，先定义一个Person的函数作为这个类型的构造函数
function Person(name){
    this.name = name
}
//这个类型所有的实例之间通过原型prototype的方式进行共享成员
Person.prototype.say = function(){
    console.log(`hi, my name is ${this.name}`)
}


// 从ES2015起，用class关键词声明一个类型
// 这种独立定义类型的方法相比较之前函数的方式更容易理解，结构也更清晰
class Person{
    constructor(name){ // 当前类型的构造函数
        this.name = name // 使用this访问当前类型的实例对象
    }
    // 给这个类型定义实例方法
    say () {
        console.log(`hi, my name is ${this.name}`)
    }
}

// 用new关键词创建类型的实例
const p = new Person('chongchong')
p.say()