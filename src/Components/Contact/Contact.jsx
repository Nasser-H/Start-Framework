import React, { useEffect, useState } from 'react'
import './Contact.scss'
import ContactStyle from './Contact.module.scss'
export default function Contact() {

  useEffect(()=>{
    document.title = "contact";
  },[])

  const [userName, setUserName] = useState(null)
  const [userAge, setUserAge] = useState(null)
  const [userEmail, setUserEmail] = useState(null)
  const [userPassword, setUserPassword] = useState(null)

  const inputs = [
    {type: 'text' , id : 'inputUserName' , lable: 'userName' , forContent : userName },
    {type: 'text' , id : 'inputUserAge' , lable: 'userAge' , forContent : userAge },
    {type: 'email' , id : 'inputUserEmail' , lable: 'userEmail' , forContent : userEmail },
    {type: 'password' , id : 'inputUserPassword' , lable: 'userPassword' , forContent : userPassword }
  ]

  function setValue(e){
    let id = e.target.id;
    let value = e.target.value;
    if(id == 'inputUserName'){
        setUserName(value);
    }else if(id == 'inputUserAge'){
      setUserAge(value);
    }else if(id == 'inputUserEmail'){
      setUserEmail(value);
    }else{
      setUserPassword(value);
    }
  }
  return <>
  <div className={ContactStyle.contatBage}>
    <div className="container">
      <div className="text-main-color text-center d-flex justify-content-center align-items-center flex-column">
      <div>
        <h2 className='text-uppercase main-text-wight fs-1 mt-4'>conatct section</h2>
        <div className="hr2"><i className="fa-solid fa-star"></i></div>
      </div>
      </div>
      <form className="row mt-5">
        {inputs.map((item , index)=>{return(
        <div key={index} className=" col-12 col-md-7 position-relative mx-auto">
          <label htmlFor={item.id} className={`${ContactStyle.label} ${item.forContent ? ContactStyle.openLabel : null } mb-3`}>{`${item.lable} :`}</label>
          <input onChange={setValue} type={item.type} className="form-control pb-3 position-relative" id={item.id} placeholder={item.lable} />
        </div>
        )})}
        <div className="col-12 col-md-7 mt-4 mx-auto">
          <button type="button" className="btn btn-primary bg-secound-color mb-3">send Message</button>
        </div>
      </form>
    </div>
  </div>

  </>
}
