import React, { useState } from "react";
import coloredImage from "../assets/image/coloredImage.jpeg"
import BlackAndWhiteImage from "../assets/image/BlackAndWhiteImage.jpeg"


export  function ImageChange() {
    const [image, setimage] = useState(coloredImage)
    const [toogleButton,settoogleButton] = useState(true)
    const ToggleCLicking = () =>{
      settoogleButton(!toogleButton)
      if(!toogleButton){
        setimage(coloredImage)
      }
     else if(toogleButton){
      setimage(BlackAndWhiteImage)
     }
    }


  return (
    <div>
      <div>
      <img src={image} style={{width:"200px"}} alt="image" />
      <br />
      <button onClick={ToggleCLicking}>Toggle Image</button>
      </div>
    </div>
  )
}
