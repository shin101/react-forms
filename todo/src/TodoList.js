import React, {useState} from "react";
import Todo from "./Todo";
import NewTodoForm from "./NewTodoForm";
import { v4 as uuid } from "uuid";

function TodoList(){

  const initialState = [
    { id:uuid(), name: 'go shopping' },
    { id:uuid(), name: 'have fun' }
  ]; 
  const [tasks, setTasks] = useState(initialState);
  const addTask = newTask => {
    setTasks(tasks => [...tasks, newTask]);
  };

  const remove = id => {
    setTasks(tasks => tasks.filter(task => task.id !== id));
  };
    
  return (
    <div>
    <h2>To Do List</h2>
    <NewTodoForm addTask={addTask} />
    <div>
    {tasks.map(({id, name}) => <Todo name={name} key={id} id={id} remove={remove} />)}
    </div>
  </div>) 
}



export default TodoList;