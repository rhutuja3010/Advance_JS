// const age=[33,54,12,34]
// const licene_age=age.filter(check_licene_age)
// console.log(licene_age)
// function check_licene_age(check_age){
//     return check_age>=21
// }check_licene_age()


// const words = ['spray', 'limit', 'elite', 'exuberant', 'destruction', 'present'];
// const l=words.filter(count_length)
// console.log(l)
// function count_length(len_ele){
//     return len_ele.length
// }count_length()



// const words = ['spray', 'limit', 'elite', 'exuberant', 'destruction', 'present'];

// const result = words.filter(word => word.length > 6);

// console.log(result);
// // expected output: Array ["exuberant", "destruction", "present"]




// function isBigEnough(value) {
//     return value >= 10
//   }
  
//   let filtered = [12, 5, 8, 130, 44].filter(isBigEnough)
//   // filtered is [12, 130, 44]
//   console.log(filtered)
  


// const array = [-3, -2, -1, 0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13];

// function isPrime(num) {
//   for (let i = 2; num > i; i++) {
//     if (num % i == 0) {
//       return false;
//     }
//   }
//   return num > 1;
// }

// console.log(array.filter(isPrime)); // [2, 3, 5, 7, 11, 13]


let a=[10,23,44,56,12,34]
let b=a.filter(fun)
console.log(b)
function fun(age) {
  return age>=18
}
fun()




