import React from "react";
import mystyles from './styles/mystyles.module.css'
import { useNavigate } from 'react-router-dom'
import axios from 'axios'

const Register = () => {

   const navigate = useNavigate()

   const loginNavigate = () => {


      navigate('/login')

   }


   const [formValue, setformValue] = React.useState({
      username: '',
      password: '',
      mail: ''

   });

   const [error, setError] = React.useState({

      errortext: null
   })

   const handleSubmit = async (e) => {


      e.preventDefault();



      try {

         console.log('testt')
         const registerReq = await axios.post('/user/signup', {

            user: formValue.username,
            password: formValue.password,
            mail: formValue.mail


         })

         if (registerReq.status === 200) {

            loginNavigate()
         }



      } catch (error) {

         if (error.response.status === 400) {

            setError({

               errortext: error.response.data.error
            })

         }

       
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
               <p className={error.errortext !== null ? mystyles.error : mystyles.noerror} > {error.errortext} </p>
               <button className={mystyles.coonectbutton}>Sign </button>

               <p> Terms of Service</p>

            </form>

        
      </div>
   )


}





export default Register