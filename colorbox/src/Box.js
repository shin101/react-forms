import React from "react";
import './index.css'


// Box- this component should display a div with a background color, width and height based on the props passed to it.

function Box({ bgColor, width, height, remove, id }){
  const handleDelete = () => remove(id);
  
  return <div class="box" style={{ backgroundColor: bgColor, width, height }}>
    <button onClick={handleDelete}>X</button>
  </div>;
}



export default Box; 