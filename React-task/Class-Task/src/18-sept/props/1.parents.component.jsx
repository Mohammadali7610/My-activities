import { useState } from "react";
import ChildCounter, { NameComponent } from "./1.child.component";
const ParentCounter = () => {
  const [counter, setCounter] = useState(0);
 
  const [name,setname] = useState("Enter your name");
  return (
    <>
      <NameComponent name={name} />
      <ChildCounter uName="Romesh" uCity="Gwalior" counter={counter} />
      <button onClick={() => setCounter((val) => val + 1)}>Increment</button>
      <button onClick={() => setCounter((val) => val - 1)}>Decrement</button>
    </>
  );
};

export default ParentCounter;


