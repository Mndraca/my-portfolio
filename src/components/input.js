import React from "react";

const Input  = (props) => {

const upperCap = (name) =>{
const finalUpper = name.slice(0, 1).toUpperCase() + name.slice(1);
return finalUpper;
}


    return(
        <>
        <label>{upperCap(props.name)} </label>
        <input type="text" id={props.name} onChange={props.change}/>
        </>
    )
}

export default Input;