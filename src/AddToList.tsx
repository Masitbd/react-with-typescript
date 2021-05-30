import React, { useState } from "react";

const AddToList = () =>{

    const [input, setInput] = useState({
        name: "",
        age: "",
        note: "",
        img: ""

    })
    return(
        <div className= "AddToList">
            <input type="text"
            placeholder="Name"
            className="AddToList-input"
            value= {input.name}
            />
              <input type="text"
            placeholder="age"
            className="AddToList-input"
            value= {input.age}
            />
              <input type="text"
            placeholder="image Url"
            className="AddToList-input"
            value= {input.img}
            />
              <input type="text"
            placeholder="note"
            className="AddToList-input"
            value= {input.note}
            />
        </div>
    )
}
export default AddToList;