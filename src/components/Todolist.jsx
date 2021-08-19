import React from 'react'
// import Form from './Form'
import Todo from './Todo'



const Todolist = ({ todos , setTodos, filteredTodos}) => {

    return (
          <ul>
         {filteredTodos.map(todo=> <Todo key={todo.id} todo={todo} todos={todos} setTodos={setTodos}/>) }         
          </ul>

    )
}

export default Todolist
