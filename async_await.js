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


function check(){
    return new Promise((resolve,reject)=>{
        setTimeout(()=>{
            let a=10;
            if (a!=10){
                resolve("yes")
            }else{
                reject("no")
            }


        },2000)
    })
}
async function fun(){
    console.log("first")
    let x = await check()
    console.log(x)
}
fun()


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



