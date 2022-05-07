
// const fun2 = () => {
//     setTimeout(() => {
//         console.log("fun2 is starting")
//     }, 3000)
// }
// fun1 = () => {
//     console.log("fun1 is starting")
//     fun2()
//     console.log("fun2 is ending")
// }
// fun1()


// let fun2=()=>{
//     setTimeout(()=>{
//         console.log("1")
//     },3000)
// }
// let fun1=()=>{first
//     console.log("2")
//     fun2()
//     console.log("3")
// }
// fun1()


console.log("start")
let fun=()=>{
    setTimeout(()=>{
        console.log("inner")
    },2000)
}
fun()
console.log("end")