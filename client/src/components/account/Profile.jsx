import React, { useState, useContext } from "react";
import mystyles from './styles/mystyles.module.css'
import { Slide } from 'react-reveal';
import {AuthContext} from './Authcontext'











const Profile = () => {

   

   const [formValue, setformValue] = React.useState({
      mcname: '',
      


   });
   
   const [status, setStatus] = React.useState({

      statustext: null,
      code: null
   })
   const [showStatusAnimation, setShowStatusAnimation] = React.useState(false)
   const { connectToMinecraft } = useContext(AuthContext);

  

   

   const handleSubmit = async (e) => {



      try {
         e.preventDefault()
         const response = await connectToMinecraft(formValue.mcname)
      
         setStatus({

            statustext: response.data.message,
            code: response.status
         })

         setShowStatusAnimation(true)

         setTimeout(() => {
            setShowStatusAnimation(false)
         }, 5000)


         
      }

       catch (error) {
         
         setStatus({

            statustext: error.response.data.message,
            code: error.response.data.status
         })

         setShowStatusAnimation(true)

         setTimeout(() => {
            setShowStatusAnimation(false)
         }, 5000)

         

      }

   }
   

   const handleChange = (event) => {
      setformValue({
         ...formValue,
         [event.target.name]: event.target.value,


      });


   }

   return (

      <div className={mystyles.accountsection}>

         {showStatusAnimation && (
            <Slide right>
               <div className={mystyles.statusdiv} style={{
                  backgroundColor: status.code === 201 ? 'green' : 'red',
               }}>
                  <p> {status.code} {status.statustext}</p>

               </div>
            </Slide>
         )}

      
         <div className={mystyles.fulldivcontent}>

           


            <form className={mystyles.signinform} onSubmit={handleSubmit} >

               <label className={mystyles.labels}>
                  Minecraft name
               </label>

               <input type='text' className={mystyles.inputs} name='mcname' onChange={handleChange}>

               </input>

               <button className={mystyles.coonectbutton}>connect.  </button>
            </form>

         </div>
         </div>

    
   )


}



export default Profile