import React,{useState,useEffect} from 'react';
import './App.css';
import { Button ,FormControl,InputLabel,Input} from '@material-ui/core';
import Todo from './Todo';
import db from './Firebase';
import firebase from 'firebase'


function App() {
  const [todos,setTodos]=useState([])
  const [input,setInput]=useState("")

  useEffect(() => {
    
    db.collection("todos").orderBy("snapShort","desc").onSnapshot(onSnapshot => {
      setTodos(onSnapshot.docs.map(doc=>doc.data().todo))
    })
  }, [])

  const addTodo=(event)=>{
    event.preventDefault()
    db.collection("todos").add({
      todo:input,
      timestamp:firebase.firestore.FieldValue.serverTimestamp()
    })
    setTodos([...todos,input])
    setInput("")
  }
  return (
    <div className="App">
    <h1>Hello World</h1>
    <form>
    
    <FormControl>
  <InputLabel>:Write a Todo</InputLabel>
  <Input value={input} onChange={event => setInput(event.target.value)}  />
  
</FormControl>
    <Button disabled={!input} type={"submit"} onClick={addTodo} variant="contained" color="primary">
  addTodo
</Button>
    {/* <button type={"submit"} onClick={addTodo}>Add todo</button> */}
    </form>
    <ul>
      {todos.map(todo => (
        <Todo text={todo}/>
      
       ) )}
    </ul>
    </div>
  );
}

export default App;
