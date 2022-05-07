// const Todo =[
//     {
//         title:'Go for a Walk',
//         done:true
//     },
//     {
//         title:'Finish Remaining Chapters in udemy',
//         done:false
//     },  
//     {
//         title:'Scrum call @4',
//         done:true
//     },  
//     {
//         title:'Code review @5',
//         done:false
//     }, 
//     {
//         title:'Fix Bugs in Current projects',
//         done:true
//     },  
// ]

// let create=(todo,done)=>{
//     Todo.push({title:todo,done:done})
// }
// create('Code review @8',true)
// console.log(Todo)


// let read=()=>{
//     Todo.forEach((items,index)=>{
//         return console.log(`${index+1} Todo ${items.title} || ${items.done}`)
//     })

// }
// read()

// const addTodo =(todo,done)=>{
//     Todo.push({title:todo,done:done})
//     // console.log("TODO ADDED SUCCESSFULLY");
//     // displayTodo()
// }
// addTodo('Hit the GYM',false)
// console.log(Todo)





// const displayTodo =()=>{
//     Todo.forEach((item,index)=>{
//         return console.log(`${index+1}. Todo : ${item.title}  || 
//         Done : ${item.done}`)
//     })
// }
// displayTodo()


// const updateTodo =(oldTodo ,newTodo)=>{
//     let todoToUpdateIndex= Todo.findIndex((todo)=>{
//         return todo.title === oldTodo
//     })     
//    Todo[todoToUpdateIndex].title=newTodo;
// }
// updateTodo('Scrum call @4','Scrum call @6')
// console.log(Todo)





// const deleteTodo=(title)=>{
//     let deleteTodoIndex=Todo.findIndex((todo)=>{
//         return todo.title === title
//     })

//     Todo.splice(deleteTodoIndex,1);
//     // console.log('');
//     console.log(`TODO ${title} IS DELETED SUCCESSFULLY`);
//     // displayTodo()
// }
// deleteTodo('Code review @5')
// console.log(Todo)




let data=[
    {name:"Rhutuja",sub:"Maths"},
    {name:"veda",sub:"cycology"},
    {name:"Vedu",sub:"science"},
    {name:"piyu",sub:"English"},
]
// let create=(items,value)=>{
//     data.push({name:items,sub:value})
// }
// create("Rhutu","Python")
// console.log(data)


// let read=()=>{
//     data.forEach((items,index)=>{
//         return console.log(`${index+1} name:${items.name},sub:${items.sub}`)
//     })
// }
// read()

// let update=(old,New)=>{
//     let up=data.findIndex((d)=>{
//         return d.name===old
//     })
//     data[up].name=New
// }
// update("piyu","priya")
// console.log(data)


let Delete=(name)=>{
    let del=data.findIndex((d)=>{
        return d.name===name
    })
    data.splice(del,1)
}
Delete("piyu")
console.log(data)