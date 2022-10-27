import React, { useState } from "react";
import Box from "./Box"
import NewBoxForm from "./NewBoxForm"


// Place your state that contains all of the boxes here. This component should render all of the Box components along with the NewBoxForm component


function BoxList(){
  const [boxes, setBoxes] = useState([]);

  // add a new box
  const addBox = newBox => {
    setBoxes(boxes => [...boxes, newBox]);
  };

  // delete a box
  const remove = id => {
    setBoxes(boxes => boxes.filter(box=> box.id !== id));
  }


  return (
    <div>
      <h2>Color Box Maker</h2>
      <NewBoxForm addBox={addBox} />
    <div>
    {boxes.map(b => 
      <Box 
      width={b.width} 
      height={b.height} 
      bgColor={b.bgColor} 
      id={b.id}
      remove={remove} />)}
    </div>
    </div>
  )
}





export default BoxList;