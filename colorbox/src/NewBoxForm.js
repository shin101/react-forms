import React, { useState } from "react";


function NewBoxForm({ addBox }){
  const initialState = {width: 100, height: 100, bgColor: 'black'};
  const [box, setBox] = useState(initialState);
  
  const handleChange = e => {
    const name = e.target.name;
    setBox(box => ({...box, [name]: name === 'bgColor' ? e.target.value : +e.target.value }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    addBox(box);
    setBox(initialState);
  };


  return (
    <form onSubmit = {handleSubmit}>
      <label htmlFor="width"></label>
      <input 
      id="width" 
      placeholder="width" 
      name="width"
      value={box.width} 
      onChange={handleChange}/>

      <label htmlFor="height"></label>
      <input 
      id="height" 
      placeholder="height" 
      name="height"
      value={box.height} 
      onChange={handleChange}/>
      
      <label htmlFor="bgColor"></label>
      <input 
      id="bgColor" 
      placeholder="bgColor" 
      name="bgColor"
      value={box.bgColor} 
      onChange={handleChange}/>
      
      <button>Add a colorbox</button>
    </form>
  )
};

  

export default NewBoxForm;