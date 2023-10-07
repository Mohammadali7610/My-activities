import { useEffect, useMemo, useState } from "react";

const Lifecycle = () => {
  console.log("1. Started");
  const [counter, setCounter] = useState(0);

  const updatedVal = useMemo(() => {
    console.log("2. Inside useMemo");
    return 2;
  }, []);

  console.log("3. UpdatedVal: ", updatedVal);

  useEffect(() => {
    console.log("5. Mounting");
  }, []);

  useEffect(() => {
    console.log("6. Updating");
  }, [counter]);

  console.log("4. Ready for JSX Rendering");
  return (
    <div>
      <p>{counter}</p>
      <button onClick={() => setCounter((val) => val + 1)}>Increment</button>
    </div>
  );
};

export default Lifecycle;
