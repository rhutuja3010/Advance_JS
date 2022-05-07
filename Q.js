
// // let number=require("readline-sync")
// // let n=number.questionInt("Enter the number :")
// let n=23;
// let sum=0;
// while (n){
//     sum+=n%10
//     n=Math.floor(n/10)
// }
// console.log(sum)




// function Question(name1){
//     return function (sub){
//         return function (age){
//             return function(hobby){
//                 return (`My Name is  ${name1}, fav subject is  ${sub} ,age is ${age}. and hobby is ${hobby}`)
//             }
//         }
//     }
// }
// console.log(Question("Rhutuja")("Maths")(50)("Crafting"))




// const num=(a,b)=>(c,d)=>(e,f)=>{console.log(a, b, c,d,e,f)
//  return `${a*b} + ${c*d} + ${e*f} = ${a*b+c*d+e*f}`}
// console.log(num(10,20)(30,40)(50,60))


// const num=(a,b)=>(c,d)=>(e,f)=>{
//     return a*b+c*d+e*f
// }
// console.log(num(10,20)(30,40)(50,60))
   

// function Question (a,b){
//     return function(c,d){
//         return function(e,f){
//             return e*f;
//         };
//     } ;
// }
// console.log(Question(10,20)(30,40)(50,60))



// const Question=(name1)=>{
//     if (name1==="Rhutuja"){
//         return function (sub){
//             console.log(`my name is ${name1} ,fav sub is ${sub}`)
//         }
//     }
// }
// Question("Rhutuja")("Maths")



// let n=23;
// let sum=0;
// while (n>0){
//     sum=sum+n%10
//     n=Math.floor(n/10)
// }
// console.log(sum)


// n=7
// let string=""
// let a=1;
// for (let i=1;i<=n;i+=3){
//     for (let j=i;j>=a;j-=2){
//         string+=" "
//         string+=j
        
//     }
//     string+="\n"
//     a+=1
// }
// console.log(string)


// let i=1;
// k=1
// string=""
// while (i<=19){
//     let j=i;
//     while (j>=k){
//         string+=" "
//         string+=j
//         j-=2
// }
//     string+="\n"
//     i+=3
//     k+=1
// }
// console.log(string)






// function checkPalindrome(string){
//     if (string.length===1)
//     return true
//     if (string.length===2)
//     return string[0]===string[1]
//     if (string[0]===string.slice(-1))
//     return checkPalindrome (string.slice(1,-1))
//     return false
// }
// console.log(checkPalindrome("sis"))


// function checkPalindrome(str){
//     if(str.length<=1 || (str.length==2 && str[0]===str[1]))
//     return true
//     if (str[0]===str.slice(-1))
//     return checkPalindrome (str.slice(1,-1))
//     return false
// }
// console.log(checkPalindrome("abba"))

// console.log(true &&"0")

// let ourStr = "I come first. ";
// ourStr += "I come second.";
// console.log(ourStr)

// let a=["rhutuja","rhutu","67","4","sonu"]
// max=0
// for (let i=1;i<a.length;i++){
//     let l=a[i].length
//     if (l>max){
//         max=l
//     }
// }console.log(max)


function fib(n) {
    if(n==2){
        return 1
    }else if(n==1){
        return 0
    }else{
        return fib(n-1)+fib(n-2)
    }
}
console.log(fib(5))









