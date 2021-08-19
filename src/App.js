import React, {useState, useEffect} from "react";
import Form from "./components/Form";
import Todolist from "./components/Todolist";

function App() {

  const [todos, setTodos] = useState([{id:1, task: "Test this app", completed:false,edit:false}])
  const [filteredTodos, setFilteredTodos] = useState(todos)
  const [filterStatus, setFilterStatus] = useState("all")

  //onMount getting todos from local storage
  useEffect(()=>{
    if (localStorage.getItem("todos")===null){
      localStorage.setItem("todos", JSON.stringify(todos))
    }
    else {
      setTodos(JSON.parse(localStorage.getItem("todos")))
    }
  },[])
  //on change of todos change local storage
  useEffect(()=>{
    localStorage.setItem("todos", JSON.stringify(todos))
  },[todos])


  useEffect(()=>{
    const handleFilter = () =>{
      switch (filterStatus) {
        case "completed":{
          setFilteredTodos(todos.filter((todo=>todo.completed)))
          break
        }
        case "uncompleted":{
          setFilteredTodos(todos.filter((todo=>!todo.completed)))
          break
        }
        default:{
          setFilteredTodos(todos)
          break
        }
      }
    }
    handleFilter()
  }, [todos, filterStatus]);
  
  return (
    <div className="App">
     <header>My todo list</header>
     <Form 
      todos={todos}
      setTodos={setTodos}
      filteredTodos={filteredTodos}
      setFilterStatus={setFilterStatus}/>
     <Todolist todos={todos} setTodos={setTodos} filteredTodos={filteredTodos}/>
    </div>
  );
}

export default App;
