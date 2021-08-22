import React, { useState, useRef, useEffect } from 'react'
import { v4 as uuidv4 } from 'uuid';
import {GoDiffAdded} from 'react-icons/go';
// import { useEffect } from 'react/cjs/react.development';

function Form({todos,setTodos,setFilterStatus,filteredTodos}) {
    const [input, setInput] = useState("")
    const focusRef = useRef(null)
    useEffect(()=>{
        handleClick()
    },[])
    
    const handleChange = e => {
        setInput(e.target.value)
    }
    const handleSubmit = async (e) =>{
        e.preventDefault()
        if (/^\s*$/.test(input)){
            return
        }
        const newTodos = [...todos, {id: uuidv4(), task: input, copleted:false, edit:false}]
        await setTodos(newTodos)
        setInput("")      
      }
    const handleClick = () =>{
        focusRef.current.focus()
    }
    const handleFilterStatusChange = (e) =>{
        setFilterStatus(e.target.value)
    }

    return (
        <div className="form-container"> 
            <form className="form" onSubmit={handleSubmit}>
                <input type="text" className="input" placeholder="Add a task" value={input} onChange={handleChange} ref={focusRef}/>
                <button className="add" onClick={handleClick}>
                    <GoDiffAdded/>
                </button>                
            </form>
            <select className = "filter-select" onChange={handleFilterStatusChange}>
                <option value="all">All</option>
                <option value="completed">Completed</option>
                <option value="uncompleted">Uncompleted</option>
            </select>
        </div>
 
    )
}

export default Form
