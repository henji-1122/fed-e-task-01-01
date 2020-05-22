// 1.请说出下列最终的执行结果，并解释为什么？
var a = [];
for(var i = 0; i<10; i++){
    a[i] = function(){
        console.log(i)
    };
}
a[6]()



// 2.请说出下列最终的执行结果，并解释为什么？
var tmp = 123;
if(true){
    console.log(tmp)
    let rmp;
}



// 3.结合ES6新语法，用最简单的方式找出数字中的最小值
var arr = [12, 34, 32, 89, 4]

var result = Math.min(...arr);
console.log(result)



// 5. 请说出下列最终的执行结果，并解释为什么？
var a = 10;
var obj = {
    a: 20,
    fn(){
        setTimeout(()=>{
            console.log(this.a)  
        })
    }
}
obj.fn()



// 9.将下面异步代码使用Promise改进？
setTimeout(function(){
    var a = 'hello';
    setTimeout(function(){
        var b = 'lagou';
        setTimeout(function(){
            var c = 'I LOVE U';
            console.log(a + b + c);
        },10)
    },10)
},10);


return new Promise((resolve, reject) => {
    var a = 'hello';
    var b = 'lagou';
    var c = 'I LOVE U';
    resolve(a + b + c)
}).then((data) => {
    console.log(data)
})