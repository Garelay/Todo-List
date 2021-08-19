import React, { useState } from 'react'
import { v4 as uuidv4 } from 'uuid';
import {GoDiffAdded} from 'react-icons/go';

function Form({todos,setTodos,setFilterStatus,filteredTodos}) {
    const [input, setInput] = useState("")
    
    const handleChange = e => {
        setInput(e.target.value)
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
        <div className="form-container"> 
            <form className="form" onSubmit={handleSubmit}>
                <input type="text" className="input" placeholder="add a task" value={input} onChange={handleChange}/>
                <button className="add">
                    <GoDiffAdded/>
                </button>
                
            </form>
            <select className = "filter-select" onChange={handleFilterStatusChange}>
                <option value="all">all</option>
                <option value="completed">completed</option>
                <option value="uncompleted">uncompleted</option>
            </select>
        </div>
 
    )
}

export default Form
