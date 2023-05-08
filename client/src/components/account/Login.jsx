import React, { useState, useContext } from "react";
import mystyles from './styles/mystyles.module.css'

import axios from 'axios'
import { useNavigate, Navigate } from 'react-router-dom'






const Login = () => {

   

   const [formValue, setformValue] = React.useState({
      username: '',
      password: '',


   });
  

  

   const [error, setError] = React.useState({

      errortext: null
   })

   const handleSubmit = async (e) => {




      e.preventDefault()


      const reqbody = {

         user: formValue.username,

         password: formValue.password,


      }


      try {

         const loginReq = await axios.post('http://localhost:8089/login', JSON.stringify(reqbody) ,

            {
              
               headers: {
                  'Content-Type': 'application/json',
               }
               
            })

        
         

       

       if (loginReq.status === 200) {

         
      }

      } catch (error) {

       

            setError({

               errortext: error.response.data.error
            })

         

      }


   }

   const handleChange = (event) => {
      setformValue({
         ...formValue,
         [event.target.name]: event.target.value,


      });


   }

   return (



      
         <div className={mystyles.fulldivcontent}>

           


            <form className={mystyles.signinform} onSubmit={handleSubmit} >

               <label className={mystyles.labels}>
                  Username
               </label>

               <input type='text' className={mystyles.inputs} name='username' onChange={handleChange}>

               </input>


               <label className={mystyles.labels}>
                  Password
               </label>

               <input type='password' className={mystyles.inputs} name="password" onChange={handleChange}>

               </input>
               <p className={error.errortext !== null ? mystyles.error : mystyles.noerror} > {error.errortext} </p>
               <button className={mystyles.coonectbutton}>log in.  </button>

               <p> Terms of Service</p>

            </form>

         </div>

    
   )


}



export default Login