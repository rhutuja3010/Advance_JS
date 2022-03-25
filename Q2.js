console.log("0")
setTimeout(function(){
    console.log("1")
},0)
Promise.resolve(" 2 ")
.then(function(res){
    console.log(res)
})
console.log("4")    