import { useEffect, useState } from "react";

const SearchExample = () => {
  const [search, setSearch] = useState("");
  const [counter, setCounter] = useState(0);

  useEffect(() => {
    console.log("Component Did mount");
  }, []);

  useEffect(() => {
    console.log("Search Val changed: ", search);
  }, [search]);

  useEffect(() => {
    console.log("Counter Val changed: ", counter);
  }, [counter]);

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
      <button onClick={() => setCounter((val) => val + 1)}>Increment</button>
      <button onClick={() => setCounter((val) => val - 1)}>Decrement</button>
    </div>
  );
};
export default SearchExample;
