import React from 'react'
import { useState } from 'react'
import styles from "./todo.module.css"

const Todo = () => {
    let [newTodo, setTodo]=useState("");
    const [todos, setTodos]=useState([]);
  

    const handleChange=(e)=>{
        setTodo(e.target.value)
    }
   
  return (
    <div> 
        Todo
    <input value={newTodo} onChange= { handleChange }/>
    <button onClick={()=>{ setTodos([...todos, {id:Date.now(), value: newTodo, isCompleted:false},]); setTodo("");}}> Add</button>
    {/* a=[1,2,3,4]
    a.push(5)------changing array a
    a=[...a,5]----not changing orig. arrray a */}

    {/* Todo list- render here */}
    <div>
        {todos.map((todo)=>(

        <div className={styles.todo}>
            <input type="checkbox" />
            <div>{todo.value}</div>
        </div>
        
        ))}
    </div>
    </div>
  )
}

export default Todo
