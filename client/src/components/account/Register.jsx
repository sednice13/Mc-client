import React from "react";
import mystyles from './styles/mystyles.module.css'
import { useNavigate } from 'react-router-dom'
import axios from 'axios'
import { Slide } from 'react-reveal';
import { useState, useEffect } from "react";



const Register = () => {

   const navigate = useNavigate()

   const loginNavigate = () => {


      navigate('/login')

   }


   const [formValue, setformValue] = useState({
      username: '',
      password: '',
      mail: ''

   });

   const [error, setError] = React.useState({

      errortext: null
   })
   const [showErrorAnimation, setShowErrorAnimation] = React.useState(false)

   useEffect(() => {
      if (error.errortext) {
         setShowErrorAnimation(true);
      } else {
         setShowErrorAnimation(false);
      }
   }, [error.errortext])


   const handleSubmit = async (e) => {


      e.preventDefault();



      try {

         const data = {

            user: formValue.username,
            password: formValue.password,
            mail: formValue.mail
         }

         const config = {
            headers: {
               'Content-Type': 'application/json',
            },

         }
         console.log('testt')
         const registerReq = await axios.post('http://localhost:8089/user/register', JSON.stringify(data), config)

         if (registerReq.status === 201) {

            console.log('sucsess')
         }

         console.log('req' + registerReq)

      } catch (error) {
         console.log('hello')
         console.error(error)


         setError({

            errortext: error.response.data.message
         })




      }


   }

   const handleChange = (event) => {
      event.preventDefault();
      setformValue({
         ...formValue,
         [event.target.name]: event.target.value,
      });


   }
   return (


      <div className={mystyles.accountsection}>

         {showErrorAnimation && (
            <Slide right>
               <div className={mystyles.statusdiv}>
                  <p>{error.errortext}</p>
               </div>
            </Slide>
         )}

         <div className={mystyles.fulldivcontent}>




            <form className={mystyles.signinform} onSubmit={handleSubmit} >



               <label className={mystyles.labels}>
                  Username
               </label>

               <input type='text' className={mystyles.inputs} value={formValue.username} name='username' onChange={handleChange}>

               </input>


               <label className={mystyles.labels}>
                  Mail Adress
               </label>

               <input type='text' className={mystyles.inputs} name="mail" onChange={handleChange}>

               </input>

               <label className={mystyles.labels}>
                  Password
               </label>



               <input type='password' className={mystyles.inputs} name="password" onChange={handleChange}>

               </input>
               
               <button className={mystyles.coonectbutton}>Sign </button>

               <p> Terms of Service</p>

            </form>


         </div>
      </div>
   )


}





export default Register