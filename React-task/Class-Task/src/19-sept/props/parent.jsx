import { useState } from "react";
import ChildUI from "./2.child-ui";
import ChildUIV2 from "./3.child-ui";

const ParentUI = () => {
  const [showMessage, setShowMessage] = useState(false);

  const toggleMessage = () => {
    //setShowMessage((val) => !val);
    setShowMessage(!showMessage);
  };

  return (
    <>
      {/* {showMessage && <p>I am visible Now</p>} */}
      {showMessage ? <p>I am visible</p> : <p>I a hidden</p>}
      {/* <button onClick={toggleMessage}>Toggle Message</button> */}

      <ChildUI onToggle={toggleMessage} />
      <ChildUIV2 onToggle={toggleMessage} />
    </>
  );
};

export default ParentUI;
















// onChange={(e) => onValChange(e.target.value.toUpperCase())}
// onChange={(e) => onValChange(e.target.value)}
// onChange={(e) => onValChange(e)}

// or 

// onChange={onValChange}