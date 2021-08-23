import React, {useState, useEffect, useRef} from 'react';
import {IoCheckmarkDoneOutline} from 'react-icons/io5';

function UpdateForm({todo, todos, setTodos}) {
        const [input, setInput] = useState(todo.task)
        const inputRef = useRef(null)

        useEffect(()=>{
            inputRef.current.focus()
        })

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
        }

    return (
        <li className="todo-item">
            <form className= "update-form" onSubmit={handleUpdate}> 
                <input type="text" className="update-input" ref={inputRef} value={input} onChange={handleChange}/>
                <button className="update-btn">
                    <IoCheckmarkDoneOutline/>
                </button>
            </form>
        </li>
    )
}

export default UpdateForm



    // const handleClickOutside = (event) =>{
            //     if (updateFormRef.current && !updateFormRef.current.contains(event.target)){
            //         setTodos(todos.map((item)=>{
            //             if (item.id===todo.id){
            //                 return {
            //                     ...item, edit: !item.edit
            //                 }
            //             }
            //             return item
            //         }))
            //     }
            // }
            // document.addEventListener("click", ()=>{console.log("click");})
            // return document.removeEventListener('click', ()=>{console.log("click");})
            