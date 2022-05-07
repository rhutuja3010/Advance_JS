// const memoization=()=>{
//     let chaches={}
//     return (num)=>{
//         if(num in chaches){
//             console.log("from caches")
//             return chaches[num]
//         }else{
//             console.log("result after computation")
//             let result=num+1 
//             chaches[num]=result
//             return result
//         }
//     }
// }
// const store=memoization();
// console.log(store(10))
// console.log(store(12))
// console.log(store(10))
// console.log(store(10))



const memoization=()=>{
    let chache={}
    return (num)=>{
        if (num in chache){
            console.log(" result from cache")
            return chache[num]
        }else{
            let result=num
            chache[num]=result
            console.log("result after chache")
            return result
        }
    }
}
const store = memoization()
console.log(store(10))
console.log(store(13))
console.log(store(10))
console.log(store(10))
console.log(store(13))
    


