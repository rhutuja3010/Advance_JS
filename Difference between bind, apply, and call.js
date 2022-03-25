// let name1={
//     fristname:"Rhutuja",
//     lastname:"Patil"}

//     let printfullname=function () {
//         console.log(this.fristname+" "+this.lastname)
//     }

// printfullname.call(name1)
// let name2={
//     fristname:"Veda",
//     lastname:"Patil"
// }
// printfullname.call(name2)



// let name1={
//     fname:"Rhutuja",
//     lname:"Patil",
//     fullname:function (city) {
//         console.log(this.fname+" "+this.lname,"from",city)
//     }
// }
// name1.fullname("thane")
// let name2={
//     fname:"Veda",
//     lname:"Patil"
// }
// name1.fullname.call(name2,"Mumbai")


// let name1={
//     fname:"Rhutuja",
//     lname:"Patil"
// }
// let fullname=function (city,sub,lang,age) {
//     console.log(this.fname+" "+this.lname,"from",city,"fav",sub,lang,age)   
// }
// fullname.call(name1,"palghar","maths","marathi",21)
// // fullname.call(name1,["palghar","maths","marathi",21])
// // let my=fullname.bind(name1,"palghar","maths","marathi",21)
// // console.log(my)
// // my()
// let name2={
//     fname:"Veda",
//     lname:"Patil"
// }
// fullname.call(name2,"Thane","sanskrit","english",17)
// fullname.apply(name2,["Thane","sanskrit","english",17])
// let m1=fullname.bind(name2,"Thane","sanskrit","english",17)
// console.log(m1)
// m1()


// let name1={
//     fname:"Rhutuja",
//     lname:"Patil",
//     fullname:function (city,age) {
//         console.log(`${this.fname} ${this.lname} from ${city} ${age}`)
//     }
// }
// let n=name1.fullname.bind(name1,"mumbai",21)
// n()
// name1.fullname.call(name1,"Mumbai",21)

// name1.fullname.apply(name1,["Mumbai",21])



// name1={
//     fname:"Rhutuja",
//     lname:"Patil",
//     fullname:function (sub,age,city) {
//         console.log(`My name is ${this.fname} surname is ${this.lname} fav sub is ${sub} ${age} ${city}`)
//     }
// }
// name1.fullname.call(name1,"Maths",21,"Palghar")
// name1.fullname.apply(name1,["Maths",21,"Palghar"])
// let bind_fun=name1.fullname.bind(name1,"Maths",21,"Palghar")
// bind_fun()


////example call bind apply () method////
// name1={
//     fname:"Rhutuja",
//     lname:"Patil",
// }
// let fullname=function (city,sub) {
//     console.log(`My name ${this.fname} surname is ${this.lname} ${city} ${sub}`)
// }
// // fullname.call(name1,"Palghar","Maths") 
// fullname.apply(name1,["Palghar","Maths"]) 
// // let bind_fun=fullname.bind(name1,"Palghar","Maths")
// // bind_fun() 
// name2={
//     fname:"Veda",
//     lname:"Patil"
// }
// // fullname.call(name2,"Thane","Cycology")
// fullname.call(name2,["Thane","Cycology"])
// // bindfun1=fullname.bind(name2,"Thane","Cycology")
// // bindfun1()


// function Product(name, price) {
//   this.name = name;
//   this.price = price;
// }

// function Food(name, price) {
//   Product.call(this, name, price);
//   this.category = 'food';
// }

// console.log(new Food('cheese', 5).name);
// // expected output: "cheese"




// function Product(name, price) {
//     this.name = name;
//     this.price = price;
//   }
  
//   function Food(name, price) {
//     Product.call(this, name, price);
//     this.category = 'food';
//   }
  
//   console.log(new Food('cheese', 5).name);
//   // expected output: "cheese"



// //find the max and min 
// const numbers = [5, 6, 2, 3, 7];

// const max = Math.max.apply(null,numbers);

// console.log(max);
// // expected output: 7

// const min = Math.min.apply(null, numbers);

// console.log(min);
// // expected output: 2


////push the element
// const array = ['a', 'b'];
// const elements = [0, 1, 2];
// array.push.apply(array, elements);
// console.info(array); // ["a", "b", 0, 1, 2]


// let a=[1,2,3];
// let b=[4,5,6];
// a.push.apply(a,b);
// console.log(a)



// / min/max number in an array
// const numbers = [5, 6, 2, 3, 7];

// // using Math.min/Math.max apply
// let max = Math.max.apply(null, numbers);
// // This about equal to Math.max(numbers[0], ...)
// // or Math.max(5, 6, ...)

// let min = Math.min.apply(null, numbers);

// // vs. simple loop based algorithm
// const numbers = [5, 6, 2, 3, 7];
// max = -Infinity; 
// min = +Infinity;
// // max = 0; 
// // min = numbers[0];
// for (let i = 0; i < numbers.length; i++) {
//   if (numbers[i] > max) {
//     max = numbers[i];
//   }
//   if (numbers[i] < min) {
//     min = numbers[i];
//   }
// }
// console.log(max)
// console.log(min)

  
  

// let name1={
//     fname:"Rhutuja",
//     lname:"Patil",
// }
// fullname=function (city,age) {
//     console.log(`My name is ${this.fname} surname is ${this.lname} city name is ${city} and my age is ${age}`)
// }
// // fullname.call(name1,"Palghar",21)
// // fullname.call(name1,["Palghar",21])
// let bindfun=fullname.bind(name1)
// bindfun()



// ////bind_method_Ex
// name1={
//     fname:"Rhutuja",
//     lname:"Patil"
// }
// name2={
//     fname:"Rhutuja1",
//     lname:"Patil1"
// }
// name3={
//     fname:"Rhutuja2",
//     lname:"Patil2"
// }
