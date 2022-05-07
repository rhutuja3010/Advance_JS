// const x = 10;
// if (x === 10) {
//   let x = 20;
//   console.log(x); // 20:  reference x inside the block
// }
// console.log(x); // 10: reference at the begining of the script


// function increase() {
//     var counter = 10;
// }
// console.log(counter)
// (increase())
// cannot access the counter variable here

// for (let i = 0; i < 3; i++) {
//     console.log("Inside the loop:", i);
//   }
  
//   console.log("Outside the loop:", i);

// const person = { age: 20 };
// console.log(person.age); // 20

// person.age = 30; // OK
// console.log(person.age); // 30


// class  rquare {
//     constructor() {
//       this.length = 3;
//     }
//     get area() {
//       return this.length * this.length;
//     }
//     set area(value) {
//       this.area = value;
//     }
//   }
// console.log(new rquare())


// var a = 1, b = 2, c = 3;
//   obj = {
//     a,
//     b,
//     c
//   };
// console.log(obj);

////ES5
// var calculation = {
//     sum:  function(a, b) { return a + b; },
//     multiply: function(a, b) { return a * b; }
//   };
//   console.log( calculation.sum(5, 3) );  // 8
//   console.log( calculation.multiply(5, 3) ); // 15


////ES6
// var calculation = {
//     sum(a, b) { return a + b; },
//     multiply(a, b) { return a * b; }
//   };
//   console.log( calculation.sum(5, 3) );  // 8
//   console.log( calculation.multiply(5, 3) ); // 15


// var
//   key = 'three',
//   obj = {
//     one: 1,
//     two: 2
//   };
// obj[key] = 3;
// console.log(obj)

// const key = "three";
// obj={
//     "one":1,
//     "two":2,
//     [key]:3
// }
// console.log(obj)

// const Button = `
//   display: inline-block;
//   border-radius: 3px;
// `
// console.log(Button)


// const user = { firstName: 'John', lastName: 'Kary'};
// const {firstName, lastName} = user;


// console.log(firstName, lastName); // John, Kary


////Array destructuring:

// const [one, two, Three] = [1,2,3];
// console.log(one, two, Three); // one, two, three

// var one;
// function fun(){
//     // var one=1
//     // one=1
//     // return one
// }
// console.log(fun())


// a=["ab","abcd","abe","abhrt","a"]
// let max=0
// for (let i=0;i<a.length;i++){
//     let l=a[i].length
//     if (max<l){
//         max=l

//     }
// }
// console.log(max)


// console.log((1+true))

////name function*****************
// function fun(a,b){
//     return a+b
// }
// console.log(fun(2,3))



////arrow fun*****************
// const a=(a,b)=>a+b 
// console.log(a(2,3))



////self invoked fun*****************
// (function (a,b){
// // console.log(a+b)
// return a+b
// })(2,3)


////anonemous fun*****************
// let fun=function(a,b){
//     // console.log("first")
//     return a+b
// }
// console.log(fun(2,3))



// function fun(){
//     console.log("rhutuja")
// }
// fun()


// const fun=()=>{
//     console.log("rhutuja")
// }
// fun()

// (function(){
//     console.log("rhutuja")
// }())



// (function () {
//     console.log("rhutuja")
    
// })()


// let fun=function(){
//     console.log("Rhutuja")
// }
// fun()



////arrow
// const fun=()=>{
//     console.log("Rhutuja")
// }
// fun()

//self invoked
// (function(){
//     console.log("Rhutuja")
// }())


// const fun=function(){
//     console.log("rhutuja")
// }
// fun()

// var v1=Symbol("hello")
// var v1=Symbol("hello")
// console.log(v1===v1)



// let a=2;
// let b=3;
// let c=a;
// a=b
// b=c
// console.log(a,b)




// let a=2;
// let b=3;
// a=a+b
// b=a-b
// a=a-b
// console.log(a,b)

// a,b=b,a
// console.log(a,b)

// a=a*b
// b=a/b
// a=a/b
// console.log(a,b)



// let a=2;
// let b=3;
// let c=4;
// a=a+b+c
// b=a-(b+c)
// c=a-(b+c)
// a=a-(b+c)
// console.log(a,b,c)


// let babyAge = 1;
// let isBirthday = true;

// if (isBirthday) {
// 	let babyAge = 2; 
//     console.log(babyAge)
// }

// console.log(babyAge); // Hmmmm. This prints 1


// var babyAge = 1;
// var isBirthday = true;

// if (isBirthday) {
// 	var babyAge = 2;
//     console.log(babyAge) 
// }

// console.log(babyAge); // Ah! This prints 2


// console.log(x);
//     var x = 6;
//     console.log(x);

// console.log(x);
// console.log(z);
// var x = 6;
// let z = 6;
// console.log(x);
// console.log(z);


// var x = 6;
//     let z = 6;
//     console.log(x);
//     console.log(z);
//     console.log(x);
//     console.log(z);


////switch_case
// let number="%";
// switch (true){
//     case number<0:
//         console.log("negative no")
//         break
//     case number>0:
//         console.log("positive no")
//         break
//     case number==0:
//         console.log("zero")
//         break
//     default:
//         console.log("NaN")
// }

// console.log(typeof(null))



// const firstName = 'John';
// console.log(`Hello ${firstName}!
// Good morning!`);
// // console.log("my name is 'Rhutuja'")


// var globalVariable = "Hello world";

// function sendMessage(){
//   return globalVariable; // can access globalVariable since it's written in global space
// }

// function sendMessage2(){
//   return sendMessage(); // Can access sendMessage function since it's written in global space
// }

// console.log(sendMessage2());  // Returns “Hello world”



// {
//     let x = 45;
// //   }
// console.log(x); // Gives reference error since x cannot be accessed outside of the block
// for(let i=0; i<2; i++){
    // do something
    // console.log(i)
//   }
// console.log(i); // Gives reference error since i cannot be accessed outside of the for loop block
  

// var Person = function(pName){
//     var name = pName;
//     this.getName = function(){
//       return name;
//     }
//   }
// var person = new Person("Neelesh");
// console.log(person.getName());



// let y = 24;
// function favFunction(){
//   let x = 667;
//   let anotherFavFunction = function(){
//     console.log(x); // Does not find x inside anotherFavFunction, so looks for variable inside favFunction, outputs 667
//   }
//     let yetAnotherFavFunction = function(){
//     console.log(y); // Does not find y inside yetAnotherFavFunction, so looks for variable inside favFunction and does not find it, so looks for variable in global scope, finds it and outputs 24
//   }
//     anotherFavFunction();
//     yetAnotherFavFunction();
// }
// favFunction();


// function memoizedAddTo256(){
//   var cache = {};

//   return function(num){
//     if(num in cache){
//       console.log("cached value");
//       return cache[num]

//     }
//     else{
//       cache[num] = num + 256;
//       // console.log(cache[num])
//       return cache[num];
//     }
//   }
// }

// var memoizedFunc = memoizedAddTo256();

// memoizedFunc(20); // Normal return
// memoizedFunc(20); // Cached return


// function add(number) {
//   if (number <= 0) {
//     return 0;
//   } else {
//     return number + add(number - 1);
//   }
// }

// console.log(add(5))