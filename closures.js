// function abc() {
//     str = "hello";
//     return function (params2) {
//         return params2 + str;
//     }
// }
// var x = abc();
// //x is now 
// console.log(x("world "));


// function  x() {
//     var a=7;
//     function y() {
//         console.log(a)
//     }
//     return y
// }
// var z=x()
// console.log(z)
// z()


// //global scope//
// var e = 10;
// function sum(a){
//   return function(b){
//     return function(c){
//       // outer functions scope
//       return function(d){
//         // local scope
//         return a + b + c + d + e;
//       }
//     }
//   }
// }
// console.log(sum(1)(2)(3)(4)); // log 20




// // global scope
// var e = 10;
// function sum(a){
//   return function sum2(b){
//     return function sum3(c){
//       // outer functions scope
//       return function sum4(d){
//         // local scope
//         return a + b + c + d + e;
//       }
//     }
//   }
// }
// var sum2 = sum(1);
// var sum3 = sum2(2);
// var sum4 = sum3(3);
// var result = sum4(4);
// console.log(result) //log 20


// var e=10
// function sum(a) {
//   return function sum1(b){
//     return function sum2(c){
//       return function sum3(d){
//         return a+b+c+d+e
//       }
//     }
//   }
// }
// var sum1=sum(1);
// var sum2=sum1(2);
// var sum3=sum2(3);
// var s4=sum3(4)
// console.log(s4)


// function makeAdder(x) {
//   return function(y) {
//     return x + y;
//   };
// }

// var add5 = makeAdder(5);
// var add10 = makeAdder(10);

// console.log(add5(2));  // 7
// console.log(add10(2)); // 12


// //without_anonymous_function
// function sum(a){
//   return function sum1(b){
//     return function sum2(c){
//       return function sum3(d){
//         return a+b+c+d
//       }
//     }
//   }
// }
// var sum1=sum(1)
// var sum2=sum1(2)
// var sum3=sum2(3)
// var sum4=sum3(4)
// console.log(sum4)


////with_anonymous_function//
function sum(a) {
  return function(b) {
    return function (c) {
      return function (d) {
        return a+b+c+d
        }
      }
    }
}
console.log(sum(1)(2)(3)(4))


