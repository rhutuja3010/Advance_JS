const  question_int=(name1)=>{
    if(name1==="Rhutuja"){
        return function(topic){
            console.log(`my name ${name1} Q is ${topic} explain me 1st Q`)
        }
    }
    if(name1==="Veda"){
        return function(topic){
            console.log(`my name ${name1} Q is ${topic} explain me 2nd Q`)
        }
    }
    if(name1==="Anu"){
        return function(topic){
            console.log(`my name ${name1} Q is ${topic} explain me 3rd Q`)
        }
    }
    else{
        return function(){
            console.log("Good")
        }

    }
    
}
question_int("Rhutuja")("Ul")
question_int("Veda")("React")
question_int("Anu")("Node")