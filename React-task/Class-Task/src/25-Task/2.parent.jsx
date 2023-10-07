import { useState } from "react";
import ChildDay15B from "./2.ChildV1";

const ParentDay15B = () => {
  const [counter, setCounter] = useState(0);
  const [name, setName] = useState("");

  console.log("Re-Render ParentDay15B");
  return (
    <div>
      <input
        type="text"
        value={name}
        placeholder="Enter name"
        onChange={(e) => setName(e.target.value)}
      />
      <p onClick={() => setCounter((val) => val + 1)}>Counter: {counter}</p>
      <ChildDay15B  />
      <ChildDay15B count={counter} />
      <ChildDay15B />
      <ChildDay15B />
      <ChildDay15B />
    </div>
  );
};

export default ParentDay15B;



