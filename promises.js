// var promise = new Promise(function(resolve, reject) {
//     const x = "geeksforgeeks";
//     const y = "geeksforgeeks"
//     if(x === y) {
//       resolve("r");
//     } else {
//       reject("t");
//     }
//   });
// async function fun(){
//     console.log("hii")
//     const a=await promise
//     console.log(a)
// }
// fun()




// const check =new Promise(function(resolve,reject){
//     setTimeout(()=>{
//         // console.log("yes")
//         let a=10;
//         if (a!=10){
//             resolve("true")
//         }    
//     },3000)
// }).then((r)=>{
//     console.log(r)

// }).catch((q)=>{
//     console.log(q)
// })



     
//   promise.
//       then(function () {
//           console.log('Success, You are a GEEK');
//       }).
//       catch(function () {
//           console.log('Some error has occurred');
//       });
  


// var promise = new Promise(function(resolve, reject) {
//     reject('Promise Rejected')
// })
   
// promise
//     .then(function(successMessage) {
//         console.log(successMessage);
//     }, function(errorMessage) {
//        //error handler function is invoked
//         console.log(errorMessage);
//     })




//EX. resolve_promise//

// const check_prom=new Promise((resolve,reject)=>{
//     setTimeout(()=>{
//         let roll_no=[1,2,3,4]
//         resolve(roll_no)
//     },2000)
// })
// check_prom.then((rollno)=>{
//     console.log(rollno)
// })


//EX. reject_promise//

// const check=new Promise((resolve,reject)=>{
//     setTimeout(()=>{
//         let a=10
//         if (a==10){
//             resolve("true")
//         }else{
//             reject("false")
//         }
//         // resolve (roll_no)
//         // reject("no")
//     },1000)
// }).then(()=>{
//     console.log("syntax")
// },()=>{console.log("error")})
// // .catch(()=>{
// //     console.log("error")
// // })



// function resolveAfter2Seconds() {
//     return new Promise(resolve => {
//       setTimeout(() => {
//         resolve('resolved');
//       }, 2000);
//     });
//   }
  
//   async function asyncCall() {
//     console.log('calling');
//     const result = await resolveAfter2Seconds();
//     console.log(result);
//     // expected output: "resolved"
//   }
  
//   asyncCall();

// function fun() {
//     return new Promise(resolve=>{
//         setTimeout(()=>{
//             let a=[1,2,3]
//             resolve(a)
//         },2000)
//     })
// }
// async function show() {
//     console.log("calling")
//     const x=await fun()
//     console.log(x)
// }
// show()


// const check=new Promise((resolve,reject)=>{
//     setTimeout(()=>{
//         let roll_no=[1,2,3]
//         resolve (roll_no)
//         // reject("no")
//     },2000)
// })
// .then((erro)=>{
//     console.log(erro)
// })
// .catch((error)=>{
//     console.log(error)
// })
// .finally(()=>{
//     console.log("finally_complete")
// })
// async function show() {
//     console.log("wait")
//     const x=await check("Rhutuja")
//     console.log(x)
// }
// show()




////EX. resolve_promise , reject_promise and object_make



// const check_prom=new Promise((resolve,reject)=>{
//     setTimeout(()=>{
//         let roll_no=[1,2,3,4]
//         resolve(roll_no)
//         // reject("promise is fail")
//     },2000)
// })
// const getbiodata=((indexdata)=>{
//     return new Promise((resolve,reject)=>{
//         setTimeout((indexdata)=>{
//             let biodata={
//                 name:"Rhutuja",
//                 surname:"Patil"
//             }
//             resolve(`my name is ${biodata.name}. My roll no is ${indexdata} and my fav subject is ${biodata.surname} `)
//         },2000,indexdata)
//     })
// })
// check_prom.then((rollno)=>{
//     console.log(rollno)
//     return getbiodata(rollno[0])
// }).then((kuchbhi)=>{
//     console.log(kuchbhi)
// }).catch((error)=>{
//     console.log(error)
// })




////simple_easy_example
// let promise=new Promise( (resolve,reject)=> {
//     let req=true;
//     if (req==false){
//         resolve([1,2,3,4])
//     }else{
//         reject("name1")
//     }
// }).then((a)=>{
//     console.log(a)
// }).catch((e)=>{
//     console.log(e)
// })



// function fun() {
//     return new Promise(resolve=>{
//         setTimeout(()=>{
//             let a=10
//             if (a==10){
//             resolve(a)
//         }else{
//             reject("wrong")
//         }
//         },2000)
//     })
// }
// async function show() {
//     console.log("calling")
//     const x=await fun()
//     console.log(x)
// }
// show()


// //async_await_Ex
// function check() {
//     return new Promise((resolve,reject)=>{
//         setTimeout(()=>{
//             let a=11;
//             if (a==10){
//                 resolve(a)
//             }else{
//                 reject("promise is reject")
//             }
//         },2000)
//     })
// }
// async function fun() {
//     console.log("calling")
//     const x=await check()
//     console.log(x)
// }
// fun()



////promise_example//

// const check = new Promise((resolve)=>{
//     setTimeout(()=>{
//         const roll=[1,2,3,4]
//         resolve(roll)
//     },2000)
// })
// check.then((rollno)=>{
//     console.log(rollno)
// })



// const fun=new Promise(function (resolve,reject) {
//     let a ='rhutu' ;
//     let b='rhutu'
//     if(a!==b){
//         resolve("correct")
//     }else{
//         reject("wrong")
//     }

// }).then(function(){
//     console.log("yes")
// }).catch(function () {
//     console.log("no")
// })


// let fun=new Promise(function(resolve,reject){
//     let a=10;
//     let b=20;
//     if (a===b){
//         resolve('success')
//     }else{
//         reject("angy")
//     }
// }).then(function () {
//     console.log('yes')
// }).catch(function(){
//     console.log('no')
// })


let check=new Promise(function(resolve,reject){
    let a="Rhutuja"
    let b="Rhutuja"
    if(a===b){
        resolve()
    }else{
        reject()
    }
}).then(function () {
    console.log("success")
}).catch(function () {
    console.log("loose")
})