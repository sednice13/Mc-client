import React from "react";
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import mystyles from './styles/mystyles.module.css'
import { AuthContext } from '../account/Authcontext'
import { useContext } from "react";

const Header = () => {
  const { auth } = useContext(AuthContext);

  const logauth = () => {
    console.log('Auth logging')
    
    console.log(auth)
  }

  return (
    <Navbar bg="dark" variant="dark" className={mystyles.navstyle + " justify-content-center"}>
      { auth.user && auth.user.sub 
        ? 
          <>
            <h5 className={mystyles.impactWhite}> {auth.user.sub}</h5>
            <h5 className={mystyles.impactWhite}>Logga ut</h5>
          </>
         
        : (
          <>
          
            <h5><a href='/create-account' className={mystyles.impactWhite}>Registera</a></h5>
            <h5><a href='/login' className={mystyles.impactWhite}>Logga in</a></h5>
            
          </>

         
        )
      }
      
     <button onClick={logauth}> Log auth </button>
    </Navbar>
  );
}

export default Header;