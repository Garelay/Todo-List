import React, { useState } from 'react'
import { v4 as uuidv4 } from 'uuid';
// import Todo from './Todo'

function Form({todos,setTodos,setFilterStatus,filteredTodos}) {
    const [input, setInput] = useState("")
    
    const handleChange = e => {
        setInput(e.target.value)
        // console.log(todos);
    }
    const handleSubmit = async (e) =>{
        e.preventDefault();
        if (input === ""){
            return
        }
        const newTodos = [...todos, {id: uuidv4(), task: input, copleted:false, edit:false}]
        await setTodos(newTodos);
        setInput("")        
      }
    const handleFilterStatusChange = (e) =>{
        setFilterStatus(e.target.value)
    }

    return (
            <form className="form" onSubmit={handleSubmit}>
                <input type="text" className="input" placeholder="add a task" value={input} onChange={handleChange}/>
                <button className="add">add</button>
                <select className = "filter-select" onChange={handleFilterStatusChange}>
                    <option value="all">all</option>
                    <option value="completed">completed</option>
                    <option value="uncompleted">uncompleted</option>
                </select>
            </form>

    )
}

export default Form
