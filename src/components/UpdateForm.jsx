import React, {useState} from 'react'

function UpdateForm({todo, todos, setTodos}) {
        const [input, setInput] = useState(todo.task)    
        const handleChange = e => {
            setInput(e.target.value)            
        }
        const handleUpdate = (e) =>{
            e.preventDefault();
            setTodos(todos.map((item)=>{
                if (item.id===todo.id){
                    return {
                        ...item, task:input, edit: !item.edit
                    }
                }
                return item
            }))
            setInput("");
        }

    return (
        <form className= "update-form" onSubmit={handleUpdate}> 
            <input type="text" className="update-input" value={input} onChange={handleChange}/>
            <button className="update-btn">u</button>
        </form>
    )
}

export default UpdateForm
