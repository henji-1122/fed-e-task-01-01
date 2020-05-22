// 箭头函数与this

// 普通函數
// const person = {
//     name: 'chongchong',
//     sayHi: function(){
//         console.log(`hi, my name is ${this.name}`)
//     }
// }
// person.sayHi()


// 箭頭函數
const person = {
    name: 'chongchong',
    sayHi: () => {
        console.log(`hi, my name is ${this.name}`)
    },
    saySync: function(){
        setTimeout(() => {
            console.log(`hi, my name is ${this.name}`) 
        })
    }
}
person.sayHi()
person.saySync()