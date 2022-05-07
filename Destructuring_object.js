// let biodata = {
//     "name1": "Rhutuja",
//     "hobby": "crafting",
//     "deg": "Bsc",
//     "sub": {
//         "sub1": "Chemistry ",
//         "sub2": "Botany ",

//     }


// }
// let name1, deg, hobby, sub;
// ({ name1, deg, hobby, sub } = biodata);
// console.log(`My name is ${name1} , hobby is ${hobby},deg is ${deg},sub is ${sub.sub1}`)








// let biodata = {
//     name1: "Rhutuja",
//     surname: "Patil",
//     sub: {
//         sub1: "Chemistry",
//         sub2: "Maths"
//     }
// }
// let {
//     name1,
//     surname,
//     sub
// } = biodata;
// console.log(`my name is ${name1} sub is ${sub.sub1}`)let biodata = {






//Rename the Keys

// let biodata = {
//     name1: "Rhutuja",
//     surname: "Patil",
//     sub: {
//         sub1: "Chemistry",
//         sub2: "Maths"
//     }
// }
// let {
//     name1: name2,
//     surname,
//     sub
// } = biodata;
// console.log(`my name is ${name2} sub is ${sub.sub1}`)










let o={
    'a':1,
    'b':2,
    'c':3,
    'd':4,
    'e':{
        'x':10,
        'y':20
    }
}
let {a,b,c,d,e}=o
console.log(`${a} ${e.x}`)