import React from 'react'
import { v4 as uuidv4 } from 'uuid';
// import Todo from './Todo'

function Form({input,setInput,todos,setTodos}) {
    
    const handleChange = e => {
        setInput(e.target.value)
        // console.log(todos);
    }
    const handleSubmit = async (e) =>{
        e.preventDefault();
        if (input === ""){
            return
        }
        const newTodos = [...todos, {id: uuidv4(), task: input, copleted:false}]
        await setTodos(newTodos);
        setInput("")        
      }
    
    return (
            <form className="form" onSubmit={handleSubmit}>
                <input type="text" className="input" placeholder="add a task" value={input} onChange={handleChange}/>
                <button className="add">add</button>
            </form>
    )
}

export default Form
