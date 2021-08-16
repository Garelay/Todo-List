import React, {useState} from "react";
import Form from "./components/Form";
import Todolist from "./components/Todolist";

// import Todo from "./components/Todo";


function App() {

  const [input, setInput] = useState("")
  const [todos, setTodos] = useState([{id:1, task: "test"}])
  
  return (
    <div className="App">
     <header>My todo list</header>
     <Form 
     input={input}
     setInput={setInput}
     todos={todos}
     setTodos={setTodos}/>
     <Todolist todos={todos}/>
    </div>
  );
}

export default App;
