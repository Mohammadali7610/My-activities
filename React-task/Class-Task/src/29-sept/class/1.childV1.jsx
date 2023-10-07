import { memo } from "react";

const ChildV2 = (props) => {
  console.log("Child-Re-Render", props);

  return (
    <>
      <p>Counter Child: {props.name}</p>
      <button onClick={props.onIncrement}>Increment</button>
    </>
  );
};

const ChildCompV2 = memo(ChildV2);
export default ChildCompV2;
