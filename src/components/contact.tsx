import React, { ChangeEvent, FC, useState } from "react";
import './layout.css'
import Input from "./input";
import Button from "./button";
import { FaGithub } from "react-icons/fa";
import { FaLinkedin } from "react-icons/fa";
import { FaXTwitter } from "react-icons/fa6";




const Contact: FC = () => {

  const [formDataName, setFormDataName] = useState<string>('');
  const [formDataEmail, setFormDataEmail] = useState<string>('');
  const [formDataMessage, setFormDataMessage] = useState<string>('');


 const handleChangeName = (event: ChangeEvent<HTMLInputElement>) =>{
  setFormDataName(event.target.value);
 }

 const handleChangeEmail = (event: ChangeEvent<HTMLInputElement>) =>{
  setFormDataEmail(event.target.value);
  }

  const handleChangeMessage = (event: ChangeEvent<HTMLInputElement>) =>{
    setFormDataMessage(event.target.value);
    }

    const turnRed = () => {

    const emptyFields: string[] = [];
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
  <section className="grid md:grid-cols-2 md:mt-12 py-20 gap-4 bg-pink-200 border rounded p-8 mt-10">
    <div>
        <h5 className="text-xl font-bold text-black my-2">Let's Connect.</h5>
        <div className="max-w-20 flex flex-row justify-between md:flex-col align-center">
         <a href="https://github.com/Mndraca" target="_blank" rel="noopener noreferrer"><i><FaGithub className="md:mb-3 md:mt-3 h-5 w-5"/></i></a>
          <a href="https://www.linkedin.com/in/milena-komnenic-75835051/" target="_blank" rel="noopener noreferrer"><i><FaLinkedin className="md:mb-3 md:mt-3 h-5 w-5"/></i></a>
          <a href="#"><i><FaXTwitter className="md:mb-3 md:mt-3 h-5 w-5"/></i></a>
        </div>
    </div>
    <div id="contact">
      <Input name= "name" handleChange = {handleChangeName}  />
      <Input name= "email" handleChange = {handleChangeEmail} />
      <Input name= "message" handleChange = {handleChangeMessage}/>
      <Button name ="Submit" handleClick={turnRed}/>
    </div>
  </section>
</>

  )

};

export default Contact;