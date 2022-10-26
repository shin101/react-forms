import React, { useState } from "react";


// Place your state that contains all of the boxes here. This component should render all of the Box components along with the NewBoxForm component

// const BoxList = () => {
//   const [color, setColor] = useState("grey");
//   return (
//     <form>
//       <Box />
//     </form>
//   )
// }

const NewBoxForm = () => {
  const initialState = {
    width: 100,
    height: 100,
    bgColor: 'white'
  }
  const [formData, setFormData] = useState(initialState)
  const handleChange = e => {
    const {name, value} = e.target;
    setFormData(data => ({
      ...data, 
      [name]: value
    }))
  }
  

  const handleSubmit = (e) => {
    e.preventDefault();
    const {width, height, bgColor} = formData;
    setFormData(initialState);
  }


  return (
    <form onSubmit = {handleSubmit}>
      <label htmlFor="width"></label>
      <input 
      id="width" 
      placeholder="width" 
      name="width"
      value={formData.width} 
      onChange={handleChange}/>

      <label htmlFor="height"></label>
      <input 
      id="height" 
      placeholder="height" 
      name="height"
      value={formData.height} 
      onChange={handleChange}/>
      
      <label htmlFor="bgColor"></label>
      <input 
      id="bgColor" 
      placeholder="bgColor" 
      name="bgColor"
      value={formData.bgColor} 
      onChange={handleChange}/>
      

      <button>Add a colorbox</button>
    </form>
  )
}




export default NewBoxForm;