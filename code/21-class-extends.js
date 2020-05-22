// extends 继承
class Person {
    constructor(name) {
        this.name = name
    }
    say () {
        console.log(`hi, my name is ${this.name}`)
    }
}
// 定义一个Student的类型，继承自Person
// Student类型中就会有Person中的所有成员
class Student extends Person{
    constructor(name, number){
        // 因为name在父类中也用到，所以用到super，super始终指向父类,调用他就调用了父类中的构造函数
        super(name)
        this.number = number
    }
    // 定义Student特有的成员
    hello() {
        super.say() // 通过super访问父类中的成员
        console.log(`my school number is ${this.number}`)
    }
}
// 通过Student类型创建对象p
const p = new Student('chongchong','100');
p.hello()
