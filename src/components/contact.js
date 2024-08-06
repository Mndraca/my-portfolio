import React from "react";
import './layout.css'
import { useState } from "react";
import Input from "./input";
import Button from "./button";


const Contact = () => {

  const [formDataName, setFormDataName] = useState('');
  const [formDataEmail, setFormDataEmail] = useState('');
  const [formDataMessage, setFormDataMessage] = useState('');


 const handleChangeName = (event) =>{
 const valueName = event.target.value;

 setFormDataName (valueName);

 }

 const handleChangeEmail = (event) =>{
  const valueEmail = event.target.value;
 
  setFormDataEmail (valueEmail);
 
  }

  const handleChangeMessage = (event) =>{
    const valueMessage = event.target.value;
   
    setFormDataMessage (valueMessage);
   
    }

    const turnRed = (event) => {

      event.preventDefault();

    const emptyFields = [];
    if (!formDataName) emptyFields.push("Name");
    if (!formDataEmail) emptyFields.push("Email");
    if (!formDataMessage) emptyFields.push("Message");
    if (emptyFields.length > 0){
      alert(`Please fill up empty fields ${emptyFields.join(" ,")}`)
    } else {

      console.log("All good!")
    }




    }






  return(
<>
<Input name= "name" change = {handleChangeName}  />
<Input name= "email" change = {handleChangeEmail} />
<Input name= "message" change = {handleChangeMessage}/>
<Button name ="ok" onClick={turnRed}/>
</>

  )

};

export default Contact;