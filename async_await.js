// function check(){
//     return new Promise((resolve,reject)=>{
//         setTimeout(()=>{
//         let a=10;
//         if (a==10){
//             resolve(a)
//         }else{
//             reject("wrong")
//         }
//     },2000)
//     })
// }
// async function fun(){
//     console.log("calling")
//     let x=await check()
//     console.log(x)
// }
// fun()



// function check(){
//     return new Promise((resolve,reject)=>{
//         setTimeout(()=>{
//             let a=true;
//             if (a==true){
//                 resolve ("a")
//             }else{
//                 reject("wrong")
//             }
//         },2000)
//     })
// }
// async function fun(){
//     console.log("calling")
//     let x=await check()
//     console.log(x)
// }
// fun()


// const check = new Promise(function (resolve,reject){
//     let a=1;
//     if (a==1){
//         resolve("resolve")
//     }else{
//         reject("r")
//     }                   
// })
// async function fun(){
//     console.log("calling")
//     const x = await check
//     console.log(x)
// }
// fun()


// let check = new Promise (function(resolve,reject){
//     let a=1;
//     if (a==1){
//         resolve("yes")
//     }else{
//         reject("no")
//     }
// })
// async function fun(){
//     console.log("wait")
//     const x=await check
//     console.log(x)
// }
// fun()


// function check(){
//     return new Promise((resolve,reject)=>{
//         setTimeout(()=>{
//             let a=10;
//             if (a!=10){
//                 resolve("yes")
//             }else{
//                 reject("no")
//             }


//         },2000)
//     })
// }
// async function fun(){
//     console.log("first")
//     let x = await check()
//     console.log(x)
// }
// fun()


// function check(){
//     return new Promise((resolve,reject)=>{
//         setTimeout(()=>{
//             let a=require("readline-sync");
//             let num=a.questionInt("enter the no :")
//             if (num%2==0){
//                 resolve("even")
//             }else{
//                 reject("odd")
//             }
//         },2000)
//     })
// }
// async function fun(){
//     console.log("wait")
//     let x=await check()
//     console.log(x)
// }
// fun()



// let check=new Promise(function (resolve,reject) {
//     let a=12;
//     let b=10;
//     if(a!==b){
//         resolve('yes')
//     }else{
//         reject('no')
//     }
// })
// async function fun(){
//     console.log("Hii")
//     let a=await check
//     console.log(a)
// }
// fun()



// let check=new Promise(function(resolve,reject){
//     let a=10;
//     let b=10;
//     if(a===b){
//         resolve("yes")
//     }else{
//         reject("no")
//     }
// })
// async function fun(){
//     console.log("Hii")
//     let c=await check
//     console.log(c)
// }
// fun()


// let check=new Promise(function(resolve,reject){
//     let a=10;
//     let b=10;
//     if (a===b){
//         resolve("yes")
//     }else{
//         reject("no")
//     }
// })
// async  function fun() {
//     console.log("hi")
//     let c=await check
//     console.log(c)
// }
// fun()


// let a=[1,2,3]
// let b=[...a,2,3]
// console.log(b)

let x={a:1,b:2,c:3,d:4}
let {a,b,c,d}=x
// console.log(`${a}`)
console.log(a)
