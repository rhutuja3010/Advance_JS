// var arr=[1,2,3,4];
// function postTitle(){
//     console.log('call postTitle fun')
// }
// var postDetails=()=>{
//     console.log('call postDetails fun')
// }
// module.exports={
//     postTitle,
//     postDetails,
//     arr
// }



let arr=[1,2,3,4];
function f_sun(){
    console.log("first call")
}
let second=()=>{
    console.log('second call')
}

module.exports={
    arr,
    f_sun,
    second
}