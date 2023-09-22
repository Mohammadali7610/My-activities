import { useEffect, useState } from "react";

const SearchingExample = () => {
  const [search, setSearch] = useState("");
  const [counter,setCounter] = useState(0);
  useEffect(() => {
    console.log("Compount did mount ++")
  },[]);
  useEffect(() => {
    console.log("Search Val change", search)
  },[search]);
  useEffect(() => {
    console.log("Counter Numbs Change",counter)
  },[counter]);
  return (
    <div>
      <div>
        <input
          type="text"
          value={search}
          onChange={(e) => setSearch(e.target.value)}
        />
        <p>{search}</p>
      </div>
      <button onClick={() => setCounter((num) => num + 1)}>counter+</button>
      <button onClick={() => setCounter((num) => num - 1)}>counter-</button>
    </div>
  );
};

export default SearchingExample;
