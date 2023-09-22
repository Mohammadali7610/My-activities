const ChildUIV2 = ({ onToggle }) => {
    return (
      <>
        <p>I am Child Component</p>
        <button onClick={onToggle}>Toggle</button>
      </>
    );
  };
  
  export default ChildUIV2;
  