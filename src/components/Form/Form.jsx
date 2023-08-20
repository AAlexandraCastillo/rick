import style from './Form.module.css'
import validation from '../validation';
import { useState } from 'react';
const Form=({login})=>{
const[userData, setUserData]=useState({
    email:'',
    password:''
});

const[errors,setErrors]=useState({});


const handleChange=(event)=>{
    setErrors(validation({...userData,[event.target.name]:event.target.value}))
    setUserData({...userData,[event.target.name]:event.target.value
    })
    };

const handleSubmit=(event)=>{
event.preventDefault();
login(userData)
};


return(
<div className={style.miDiv}> 
    
     <div class={style.divForm} className={style.centrado}>
    <form className={style.miForm}>
        <p className={style.blancas}> LOGIN</p>
      <label className={style.blanca} htmlFor= "email">   Email: </label>
      <input onChange={handleChange} value= {userData.email} type="text"  name="email"/>
      {errors.e1 ? <p className={style.error}>{errors.e1}</p>
      :errors.e2? <p className={style.error}>{errors.e2}</p>
      : <p className={style.error}>{errors.e3}</p>
      }
  <hr/>
     <label className={style.blanca}    htmlFor= "password">Password: </label>
     <input onChange={handleChange} value={userData.password} type="password" name="password"/>
      {errors.p1? (<p className={style.error}>{errors.p1}</p>):(<p className={style.setErrors}>{errors.p2}</p>)}
       <hr/>
         <button class={style.boton} onClick={handleSubmit}   type="submit">SUBMIT</button>
     
   </form>
</div>
</div>

)
};
export default Form;