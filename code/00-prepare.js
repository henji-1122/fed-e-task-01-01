// if(true){
//     // var foo ="wxc"
//     let foo = "chongchong"
// }
// console.log(foo)


//场景1： for循环中的计数器---------------------------------------
// for(var i=0; i<3; i++){
//     for(var i=0; i<3; i++){ //内层的i会覆盖外层的i
//         console.log(i);  // 0 1 2
//     }
//     console.log('内循环结果 i = ' + i);
// }
// ---> 此嵌套循环应该是一个3*3打印9次，但是只打印了3次，这样就出现了问题
// ---> 因为内层的i会覆盖外层的i，内层循环结束后i为3,此时外层就不满足循环条件，所以就不再循环了

// 使用let声明变量
// for(let i=0; i<3; i++){
//     for(let i=0; i<3; i++){ 
//         console.log(i);
//     }
//     console.log('内循环结果 i = ' + i);
// }


//场景2： 循环注册事件---------------------------------------
// 在事件的处理函数中访问循环的计数器
// var elements = [{}, {}, {}];  // dom元素数组
// for(var i=0; i<elements.length; i++){
//     elements[i].onclick = function(){ // 给每个元素添加点击事件
//         console.log(i);  
//     }
// }
// elements[2].onclick()  //3
// 访问elements中任意成员的onclick事件，都返回3
//---> 因为这里打印的i始终是全局作用域中的i，循环结束后i已经被累加到了3

//以上也是闭包的一个典型应用场景，可通过建立闭包的方式解决：
// var elements = [{}, {}, {}];  
// for(var i=0; i<elements.length; i++){
//     elements[i].onclick = (function(i){ 
//         return function(){ // 闭包实际上就是借助函数作用域摆脱全局作用域所产生的影响
//             console.log(i);  
//         }
//     })(i)
// }
// elements[2].onclick()

//有了块级作用域后就不用如此麻烦：
// var elements = [{}, {}, {}];  
// for(let i=0; i<elements.length; i++){
//     elements[i].onclick = function(){ 
//         console.log(i); //使得i只能在块级作用域内被访问
//     }
// }
// elements[2].onclick()
// 其实这内部也是闭包的一种机制，因为在onclick执行的时候循环已经结束，i已被销毁，是因为闭包的机制才能拿到i所对应的值


//场景3： for循环内部2层嵌套作用域---------------------------------------
// for(let i=0; i<3; i++){
//     let i = 'foo';
//     console.log(i) // foo foo foo
// }
// // ---> 说明两个i互补影响，是在不同的作用域中
// // 下面将其拆解开分析：
// let i = 0;
// if(i<3){
//     let i = 'foo';
//     console.log(i) 
// }
// i++;
// if(i<3){
//     let i = 'foo';
//     console.log(i) 
// }
// i++;
// if(i<3){
//     let i = 'foo';
//     console.log(i) 
// }
// i++;
// // ---> 此时会发现let i = 'foo'是块级作用域内部的一个变量，跟外层循环中的计数器i互补影响
// // ---> 此时就会明白为什么是2层嵌套的作用域了，循环体中的i是内层中独立的作用域，外层是循环体本身的作用域



// let不存在变量提升
const obj = {}
obj.name = 'chongchong'  // 并未修改obj在内存中的指向地址,只是修改了这块内存空间中的数据，是被允许的
console.log(obj.name)

// obj = {}  //重新赋值会改变内存中的地址，会报错TypeError 
