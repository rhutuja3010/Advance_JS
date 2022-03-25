// function foo(b) {
//     let a = 10
//     return a + b + 11
//   }
  
//   function bar(x) {
//     let y = 3
//     return foo(x * y)
//   }
//   console.log(bar(2))
//   var baz = bar(2) // assigns 42 to baz
//   var baz1 = foo(4) 
// console.log(baz)
// console.log(baz1)  



// console.log('Hi!');

// setTimeout(() => {
//     console.log('Execute immediately.');
// }, 0);

// console.log('Bye!');



function task(message) {
    // emulate time consuming task
    let n = 10000000000;
    while (n > 0){
        n--;
    }
    console.log(message);
}

console.log('Start script...');
task('Call an API');
console.log('Done!');
// Code language: JavaScript (javascript)
