import React from 'react'
// import Form from './Form'
import Todo from './Todo'



const Todolist = ({ todos }) => {
    // const list = todos.map(todo=>{
    //     <Todo key={todo.id} task={todo.task}/>
    // })
    return (
          <ul>
         {todos.map(todo=> <Todo key={todo.id} task={todo.task}/>) }         
          </ul>

    )
}

export default Todolist
