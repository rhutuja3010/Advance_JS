
//-------sum

// let array=[3,4,6,1];
// let sum=array.reduce(fun,1);
// console.log(sum)
// function fun(total,value){
//     return total+value
// }fun()




//-------product

// let array=[3,2,8,5]
// let sum=array.reduce((accum,curr)=>{
// return accum*curr
// },2)
// console.log(sum);


//-------average

// let array=[5,5,5,5,5]
// let sum=array.reduce((accum,curr)=>{
//     c=accum+curr
//     return c
// },0)

// console.log(c/5)







// let array=[3,2,8,5]
// let avg=array.reduce((accum,cur)=>{
//     // avg2=accum+cur
//     console.log(cur)
//     return avg2=accum+cur
// },2)
// console.log(avg2)




// let sum = [0, 1, 2, 3].reduce(function (previousValue, currentValue) {
//     return previousValue + currentValue
//   }, 1)
// console.log(sum)
//   // sum is 6
  
//   Alternatively written with an arrow function:
  
//   let total = [ 0, 1, 2, 3 ].reduce(
//     ( previousValue, currentValue ) => previousValue + currentValue,
//     0
//   )node 


// const x = Symbol('hey');
// console.log(x.description); // hey
  

let a=[1,2,3,4,5]
let b=a.reduce(fun)
// console.log(b)
function fun(prev,current) {
    console.log(prev)
    return prev+current
}fun()