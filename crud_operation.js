const Todo =[
    {
        title:'Go for a Walk',
        done:true
    },
    {
        title:'Finish Remaining Chapters in udemy',
        done:false
    },  
    {
        title:'Scrum call @4',
        done:true
    },  
    {
        title:'Code review @5',
        done:false
    }, 
    {
        title:'Fix Bugs in Current projects',
        done:true
    },  
]

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
//         // console.log(todoToUpdateIndex)
//         return todo.title === oldTodo
//     })     

//    Todo[todoToUpdateIndex].title=newTodo;
// //    console.log('');
// //    console.log('TODO 3 IS UPDATED SUCCESSFULLY');
//     // displayTodo()

// }
// updateTodo('Scrum call @4','Scrum call @6')
// console.log(Todo)





const deleteTodo=(title)=>{
    let deleteTodoIndex=Todo.findIndex((todo)=>{
        return todo.title === title
    })

    Todo.splice(deleteTodoIndex,1);
    // console.log('');
    console.log(`TODO ${title} IS DELETED SUCCESSFULLY`);
    // displayTodo()
}
deleteTodo('Code review @5')
console.log(Todo)





