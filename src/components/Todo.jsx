import React from 'react'
import UpdateForm from './UpdateForm'
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
        <div className={`todo-item ${todo.completed ? "completed" : ""}`}>
            {todo.task}
            <button className="complete-btn" onClick={handleComplete}>
                c
            </button>
            <button className="delete-btn" onClick={handleDelete}>
                d
            </button>
            <button className="edit-btn" onClick={handleEdit}>
                e
            </button>
        </div>
    )
}

export default Todo
