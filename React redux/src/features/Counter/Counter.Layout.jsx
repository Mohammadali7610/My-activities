import { useDispatch, useSelector } from "react-redux";
import { decrement, increment } from "./Counter.Slice";

const Counter = () => {
  /*  const counterState = useSelector((state) => {
    console.log("State: ", state);
    return state.gokulCounter;
  });
  console.log("counterState: ", counterState); */

  //const globalState = useSelector((state) => state);
  //console.log("GS: ", globalState);

  const counterState = useSelector((state) => state.Counter);
  const dispatch = useDispatch();
  return (
    <div style={{
      display: "flex",
      gap:"4px",
      alignItems: "center",
    }}>
      <button onClick={() => dispatch(increment())}>+</button>
      <p>{counterState.count}</p>
      <button onClick={() => dispatch(decrement())}>-</button>
    </div>
  );
};

export default Counter;
