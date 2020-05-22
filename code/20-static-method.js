// static 方法
class Person {
    constructor(name){
        this.name = name
    }
    say () {
        console.log(`hi, my name is ${this.name}`)
    }

    // static 方法 创建person类型的实例
    static create (name) {
        return new Person(name)
    }
}
// 调用静态方法
// 注：因为静态方法是挂在到类型上的，所以在静态方法内部this不会指向某个实例对象，而是当前类型
const p = Person.create('chongchong')
p.say()