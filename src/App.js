import React, {useState} from "react";
import Form from "./components/Form";
import Todolist from "./components/Todolist";

// import Todo from "./components/Todo";


function App() {

  const [input, setInput] = useState("")
  const [todos, setTodos] = useState([{id:1, task: "test", completed:false}])
  
  return (
    <div className="App">
     <header>My todo list</header>
     <Form 
     input={input}
     setInput={setInput}
     todos={todos}
     setTodos={setTodos}/>
     <Todolist todos={todos} setTodos={setTodos}/>
    </div>
  );
}

export default App;
