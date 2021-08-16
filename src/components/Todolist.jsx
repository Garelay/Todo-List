import React from 'react'
// import Form from './Form'
import Todo from './Todo'



const Todolist = ({ todos , setTodos}) => {
    // const list = todos.map(todo=>{
    //     <Todo key={todo.id} task={todo.task}/>
    // })
    return (
          <ul>
         {todos.map(todo=> <Todo key={todo.id} todo={todo} todos={todos} setTodos={setTodos}/>) }         
          </ul>

    )
}

export default Todolist
