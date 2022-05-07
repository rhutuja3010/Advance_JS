// console.log("0")
// setTimeout(function(){
//     console.log("1")
// },0)
// Promise.resolve(" 2 ")
// .then(function(res){
//     console.log(res)
// })
// console.log("4")  


// let n=5
// for (let i=1;i<=n;i++){
//     let n=require("readline-sync")
//     let num=n.questionInt("enter the no :")
//     store=num
//     // console.log(store)
//     min=store[0]
//     console.log(min)
//     // if(store>min){
//     //     min=store
//     // }
//     // console.log(min)
// }


// for (let i=1;i<=10;i-=-1){
//     console.log(i)
// }


// sum()
// function  sum() {
//     console.log("Rhutuja")
// }

let arr=[]
let n=3
for (let i=1;i<=n;i++){
    let n=require("readline-sync")
    let num=n.questionInt("enter the no :")
    arr.push(num)
}
let min=arr[0]
for (i of arr){
    if (min>i){
        min=i
    }
}
console.log(min)