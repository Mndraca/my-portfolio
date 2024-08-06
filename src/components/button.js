import React from "react";

const Button = (props) =>{

    const upperCapB = (name) =>{
        const finalUpper = name.slice(0, 1).toUpperCase() + name.slice(1);
        return finalUpper;
        }

return(
    <>
    <button onClick={props.onClick} >{upperCapB(props.name)}</button>
    </>
)

}

export default Button;