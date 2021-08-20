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
            <span className="todo-item-text">
                {todo.task}
            </span>
            <button className="complete-btn" onClick={handleComplete} title="Mark as completed">
                <TiInputCheckedOutline/>
            </button>
            <button className="edit-btn" onClick={handleEdit} title="Edit the task">
                <TiEdit/>
            </button>
            <button className="delete-btn" onClick={handleDelete} title="Delete the task">
                <TiDeleteOutline/>
            </button>
        </li>
    )
}

export default Todo
