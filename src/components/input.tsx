import React, { ChangeEvent } from "react";

interface InputProps {
    name: string;
    handleChange: (event: ChangeEvent<HTMLInputElement>) => void;
}


const Input  = ({name, handleChange}: InputProps) => {

const upperCap = (name: string) =>{
const finalUpper = name.slice(0, 1).toUpperCase() + name.slice(1);
return finalUpper;
}


    return(
        
        <div style={{display: "flex", flexDirection: "column"}} >
            <label className="block mt-3 mb-1 pl-1 text-sm font-medium">{upperCap(name)}</label>
            <input className="bg-rose-300 border border-pink-300 placeholder-[#9CA2A9] text-gray-100 text-sm rounded-lg block w-full p-2.5" type="text" id={name} onChange={handleChange} />
        </div>
    )
}

export default Input;