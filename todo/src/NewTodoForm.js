import React, {useState} from "react";
import { v4 as uuid } from "uuid";


const NewTodoForm = ({ addTask }) => {
  const initialState = {name: ''};

  const [formData, setFormData] = useState(initialState);
  const handleChange = (e) => {
    const {name, value} = e.target;
    setFormData(formData => ({
      ...formData,
      [name]: value
    }))
  }


  const handleSubmit = (e) => {
    e.preventDefault();
    addTask({...formData, id: uuid()});
    setFormData(initialState);

  }

  return (
    <form onSubmit={handleSubmit}>
      <label htmlFor="name">Tasks</label>
      <input 
      name="name" 
      placeholder="task name here" 
      value={formData.name}
      onChange={handleChange}
      />
      <button>Add Task</button>
    </form>
  )


}

export default NewTodoForm;