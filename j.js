// const  question_int=(name1)=>{
//     if(name1==="Rhutuja"){
//         return function(topic){
//             console.log(`my name ${name1} Q is ${topic} explain me 1st Q`)
//         }
//     }
//     if(name1==="Veda"){
//         return function(topic){
//             console.log(`my name ${name1} Q is ${topic} explain me 2nd Q`)
//         }
//     }
//     if(name1==="Anu"){
//         return function(topic){
//             console.log(`my name ${name1} Q is ${topic} explain me 3rd Q`)
//         }
//     }
//     else{
//         return function(){
//             console.log("Good")
//         }

//     }
    
// }
// question_int("Rhutuja")("Ul")
// question_int("Veda")("React")
// question_int("Anu")("Node")



// var countDownDate = new Date("Jan 5, 2024 ").getTime();
// console.log(countDownDate)


// let text = "How are you doing today?";
// let text =12
// const myArray = text.split(' ');
// console.log(myArray)


// var number = 23,
//     // output = [],
//     sNumber = number.toString();
// for (var i = 0, len = sNumber.length; i < len; i += 1) {
//     output.push(+sNumber.charAt(i));
// }

// console.log(output);





// var number = 23,
//     // output = [],
//     sNumber = number.toString();
// for (var i = 0, len = sNumber.length; i < len; i += 1) {
//     // output.push(+sNumber.charAt(i));
//     console.log(Number(number[i]))
// }

// // console.log(output);




// function splitNum(num) {
//     return String(num),Number(num),split("").map(Number);


// }
// console.log(splitNum(13)); // [1, 5, 2, 3]
// console.log(splitNum(2341)); // [2, 3, 4, 1]
// console.log(splitNum(325)); // [3, 2, 5]



// function splitToDigit(n){
//     return [...n + ''].map(Number)

//   }
  
//   console.log(splitToDigit(13))



// function splitToDigit(n){
//     return [...n + ''].map(Number)
//   }
  
//   console.log(splitToDigit(17))


// var num = 12;

// var result = num.toString().split('').map((item) => parseInt(item))
// .reduce((previousValue, currentValue) => previousValue + currentValue, 0);

// console.log(result(12)); // returns 21


// const sum = (number) => {
//   const items = [...(number + '')]
//   const result = items.reduce((total, item) => {
//     return total + Number(item)
//   }, 0)
//   console.log(result)
//   return result % 2 === 0 ? 'EVEN' : 'ODD'
// }
// console.log(sum(56))
// console.log(sum(745))



// const sumOfDigits = num => [...""+num].reduce((acc, dig) => acc + +dig, 0);
// console.log('Sum of digits: ', sumOfDigits(56))
// first=sumOfDigits%2==0?'EVEN':'ODD'
// console.log(first)

// console.log('Sum of digits: ', sumOfDigits(745))
// r=sumOfDigits%2==0?'EVEN':'ODD'
// console.log(r)


// d={"c1":"red","c2":"green","c3":None}
// dic={'c1': 'Red', 'c2': 'Green', 'c3': None}
// del (dic['c3'])
// console.log(dic)




// var is_array = function(input) {
//     if (toString.call(input) === "[object Array]")
//       return true;
//     return false;   
//       };
//   console.log(is_array('w3resource'));
//   console.log(is_array([1, 2, 4, 0]));


// let n=23;
// let sum=0;
// while (n>0){
//     sum=sum+n%10
//     num=Math.floor(n/10)
// }
// console.log(sum)



// obj2 = {
//     "aName": 1,
//     "bName": 2,
//     "c": 3,
//     "d": 4
// }
// const obj1 = "Name";
// console.log(obj2["a" + obj1])

// rhutuja = {
//     "aname": 34,
//     "bname": 23,
//     "c": 4,
//     "d": 7
// }
// const s = "name";
// console.log(rhutuja["a" + s])


// obj = {
//     "aName": 1,
//     "aname": 2,
//     "c": 3,
//     "d": 4
// }
// let obj1 = "Name";
// console.log(obj["a" + obj1])

a=1
b="1"
console.log(a===b)
