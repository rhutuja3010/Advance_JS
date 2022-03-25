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



const fun=()=>{
    setTimeout(()=>{
        let num=[1,2,3,4]
        console.log(num[0])

        setTimeout(()=>{
            let info={
                name1:"Rhutuja",
                sub:"maths"
            }
            console.log(`my name is ${info.name1} fav subject is ${info.sub} roll no is ${num[0]}`)

            setTimeout (()=>{
                    info.hobby="Crafting"
                    console.log(`my name is ${info.name1} fav subject is ${info.sub} roll no is ${num[0]} also hobby is ${info.hobby}`)
            },2000)
        },2000)
    },2000)
}
fun()