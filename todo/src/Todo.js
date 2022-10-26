import React from "react";

function Todo ({name, id, remove }) {
  const handleDelete = () => remove(id);
 
  return (
    <div>
      <ul>
        <li>{name}</li>
        <button onClick={handleDelete}>X</button>
      </ul>
    </div>
  )

};

export default Todo;