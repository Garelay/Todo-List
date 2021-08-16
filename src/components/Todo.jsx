import React from 'react'
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

    return (
        <div className={`todo-item ${todo.completed ? "completed" : ""}`}>
            {todo.task}
            <button className="complete-btn" onClick={handleComplete}>
                c
            </button>
            <button className="delete-btn" onClick={handleDelete}>
                d
            </button>
        </div>
    )
}

export default Todo
