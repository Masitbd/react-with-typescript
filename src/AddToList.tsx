import React, { useState } from "react";

const AddToList = () =>{

    const [input, setInput] = useState({
        name: "",
        age: "",
        note: "",
        img: ""

    })

    const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {

        setInput({
            ...input,
            [e.target.name]: e.target.value

        })

    }
    return(
        <div className= "AddToList">
            <input type="text"
            placeholder="Name"
            className="AddToList-input"
            value= {input.name}
            onChange={handleChange}
            name= "name"
            />
              <input type="text"
            placeholder="age"
            className="AddToList-input"
            onChange={handleChange}
            value= {input.age}
            name= "age"
            />
              <input type="text"
            placeholder="image Url"
            className="AddToList-input"
            onChange={handleChange}
            value= {input.img}
            name= "img"
            />
              <input type="text"
            placeholder="note"
            className="AddToList-input"
            onChange={handleChange}
            value= {input.note}
            name= "note"
            />
            <button>Add to list</button>
        </div>
    )
}
export default AddToList;