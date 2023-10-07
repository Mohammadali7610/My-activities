import  { useState } from "react";

export function ButtonChange() {

    const [btnClick, setbtnClick] = useState();
    const onClicked = () =>{
        setbtnClick(!btnClick)
    }
  return (
    <div>
      <button onClick={onClicked} style={{backgroundColor:btnClick?"orange":"pink"}}>{btnClick?"clickme":"clicked"}</button>
    </div>
  )
}
