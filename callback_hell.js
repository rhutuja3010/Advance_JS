// const fun=()=>{
//     setTimeout(()=>{
//         console.log("Hiiiii")
//         let num=[1,2,3]
//         console.log(num[1])
//         setTimeout((num)=>{
//            let info={
//                name1:"Rhutuja",
//                sub:"maths"
//         }
//         console.log(`my name is ${info.name1} roll no is ${num}`)  
//         setTimeout(()=>{
//                 info.hobby="crafting";
//                 console.log(`my name is ${info.name1} fav sub is ${info.sub} roll no is ${num} hobby is ${info.hobby} `) 
//         },2000,info.name1)
//         },2000 , num[1] )
//     },2000)
// }
// fun()



// const fun=()=>{
//     setTimeout(()=>{
//         let num=[1,2,3,4]
//         console.log(num[0])

//         setTimeout(()=>{
//             let info={
//                 name1:"Rhutuja",
//                 sub:"maths"
//             }
//             console.log(`my name is ${info.name1} fav subject is ${info.sub} roll no is ${num[0]}`)

//             setTimeout (()=>{
//                     info.hobby="Crafting"
//                     console.log(`my name is ${info.name1} fav subject is ${info.sub} roll no is ${num[0]} also hobby is ${info.hobby}`)
//             },2000)
//         },2000)
//     },2000)
// }
// fun()


// const fun=()=>{
//     setTimeout(()=>{
//         console.log("Hiiiiiii")
//         roll_no=[1,2,3,4,5]
//         console.log(roll_no[0])
//         setTimeout(()=>{
//             const info={
//                 name1:"Rhutu",
//                 sub:'maths'
//             } 
//             console.log(`${info.name1}`)
//             setTimeout(()=>{
//                 info.city='thane'
//                 console.log(`may name is ${info.name1} , roll no is ${ roll_no[0]} and fav subject is ${info.sub}`)
//             },2000)
//         },2000,roll_no[2])
//     },2000)
// }
// fun()


const fun=()=>{
    console.log("Hiiiiiii")
    setTimeout(()=>{
        let r=[1,2,3]
        console.log(`my roll no is ${r[1]}`)
        setTimeout(()=>{
            let obj={
                n:"Rhutu",
                s:"Patil"
            }
            console.log(`My name ${obj.n} nd roll no is ${r[0]}`)
        },2000)
    },2000)
}
fun()