import React, { useState } from "react";

export function NameInputs()  {
const [firstName, setfirstName] = useState("");
const [lastName,setlastName] = useState("");


return(
    <div>
        <div>
            <div>
            <label htmlFor="firstname">First name</label>
            <input type="text" id="firstname" value={firstName} onChange={(e) => setfirstName(e.target.value)}/>
            </div>
            <div>
            <label htmlFor="lastname">Last name</label>
            <input type="text" id="lastname" value={lastName} onChange={(e) => setlastName(e.target.value)}/>
            </div>
        </div>
        <h3>Welcome to {firstName} to the {lastName} family</h3>
    </div>
)
};
