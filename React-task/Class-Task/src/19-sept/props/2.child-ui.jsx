
const ChildUI = (props) => {
    console.log("Props: ", props);
    return (
      <>
        <p>I am Child Component</p>
        <button onClick={props.onToggle}>Toggle</button>
      </>
    );
  };
  
  export default ChildUI;
  
  