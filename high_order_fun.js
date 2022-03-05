// const question=(name1)=>{
//     if (name1==="Rhutuja"){
//         return function (topic){
//             console.log(`my name is ${name1} and  ${topic} is solve the 1st Q`)
//         }
//     }
// }

// question("name1")("UI")



let question=(name1)=>{
    if(name1==="Rhutuja"){
        return function(topic){
            console.log(`my name is ${name1}. and Q is ${topic} explain me `)
        }
    }
    if(name1==="Veda"){
        return function(topic){
            console.log(`my name is ${name1} and Q is ${topic} explain me `)
        }
    }
    if(name1==="Anu"){
        return function(topic){
            console.log(`my name is ${name1} and Q is ${topic} explain me `)
        }
        
    
    
}

question("Rhutuja")("UI")
// question("Veda")("React")
// question("Anu")("back_end")


// else{
//     return function(){
//         console.log("welcome")
    
// }
// }

