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

  return (
    <div>
      <h2>Color Box Maker</h2>
      <NewBoxForm addBox={addBox} />
      {boxes.map(b => <Box {...b} />)}
    </div>
  )
}



export default BoxList;