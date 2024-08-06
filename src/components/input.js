import React from "react";

const Input  = (props) => {

const upperCap = (name) =>{
const finalUpper = name.slice(0, 1).toUpperCase() + name.slice(1);
return finalUpper;
}


    return(
        
        <div style={{display: "flex", flexDirection: "column", margin: "15px",padding: "5px"}} >
        <label style={{padding: "10px", color:"blueviolet" }}>{upperCap(props.name)} </label>
        <input type="text" id={props.name} onChange={props.change} />
        </div>
    )
}

export default Input;