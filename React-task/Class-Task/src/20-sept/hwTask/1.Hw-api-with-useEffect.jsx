import {useEffect,useState} from 'react'

const HwAPIWithUseEffect = () => {
    const[search,setSearch] = useState("");

    useEffect(()=>{
    if (!search) {
      return;
    }
    console.log("keyword of search",search)
    fetch(`https://api.github.com/users/${search}`)
      .then((data) => data.json())
      .then((data) => console.log("Data: ", data))
      .catch((err) => console.log("Err: ", err));
    },[search])
  return (
    <div>
        <h4>keyword of search = {search}</h4>
      <input type="text" value={search} onChange={(e) =>setSearch(e.target.value)}/>
    </div>
  )
}

export default HwAPIWithUseEffect
