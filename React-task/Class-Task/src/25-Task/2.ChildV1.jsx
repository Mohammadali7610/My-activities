import { memo } from "react";

const ChildDay15B = () => {
  console.log("Re-Render ChildDay15B");

  return (
    <div>
      <p>I am a child component</p>
    </div>
  );
};

const ChildComp = memo(ChildDay15B);
export default ChildComp;
