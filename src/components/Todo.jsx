import React from 'react'
import UpdateForm from './UpdateForm'
import {TiInputCheckedOutline, TiEdit, TiDeleteOutline} from 'react-icons/ti'


function Todo({todo, todos, setTodos}) {
    const handleComplete = () =>{
        setTodos(todos.map((item)=>{
            if (item.id===todo.id){
                return {
                    ...item, completed: !item.completed
                }
            }
            return item
        }))
    }
    const handleDelete = () =>{
        setTodos(todos.filter((item)=>item.id !== todo.id))
    }
    const handleEdit = () =>{
        setTodos(todos.map((item)=>{
            if (item.id===todo.id){
                return {
                    ...item, edit: !item.edit
                }
            }
            return item
        }))
    }

    if (todo.edit) {
        return (
        <UpdateForm todo={todo} todos={todos} setTodos={setTodos} />
        )
    }

    return (
        <li className={`todo-item ${todo.completed ? "completed" : ""}`}>
            {todo.task}
            <button className="complete-btn" onClick={handleComplete}>
                <TiInputCheckedOutline/>
            </button>
            <button className="edit-btn" onClick={handleEdit}>
                <TiEdit/>
            </button>
            <button className="delete-btn" onClick={handleDelete}>
                <TiDeleteOutline/>
            </button>
        </li>
    )
}

export default Todo
