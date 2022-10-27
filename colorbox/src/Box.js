import React from "react";
import './index.css'


// Box- this component should display a div with a background color, width and height based on the props passed to it.

function Box({ bgColor, width, height }){
  return <div class="box" style={{ backgroundColor: bgColor, width, height }}></div>;
}



export default Box; 