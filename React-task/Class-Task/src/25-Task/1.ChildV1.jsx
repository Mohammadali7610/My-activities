import { useEffect, useState } from "react";

const ChildV1 = () => {
  const [counter, setCounter] = useState(0);

  useEffect(() => {
    console.log("Child V1 Mounting");

    const handleMouseMove = (event) => {
      console.log({ x: event.clientX, y: event.clientY });
    };

    window.addEventListener("mousemove", handleMouseMove);

    return () => {
      console.log("ChildV1 unmounting");
      window.removeEventListener("mousemove", handleMouseMove);
    };
  }, []);

  useEffect(() => {
    console.log("Counter: ", counter);

    return () => {
      console.log("Counter Cleanup");
    };
  }, [counter]);

  return (
    <p
      style={{ backgroundColor: "blue", color: "white" }}
      onClick={() => setCounter((prevCounter) => prevCounter + 1)}
    >
      I am Child V1 Component {counter}
    </p>
  );
};

export default ChildV1;


// new Date().getTime()