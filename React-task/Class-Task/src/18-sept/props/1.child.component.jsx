
const ChildCounter = (myProps) => {
    console.log("myProps: ", myProps);
    return (
      <div>
        <p style={{ border: "1px solid silver", padding: 12 }}>
          Counter: {myProps.counter}
        </p>
      </div>
    );
  };
  
  export default ChildCounter;

  export  const NameComponent = (myPropss) =>{
    return(
        <div>
           <p style={{ border: "1px solid silver", padding: "12px" }}>
            My name is {myPropss.name}
           </p>
        </div>
    )
  }

  