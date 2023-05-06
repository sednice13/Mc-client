import React from "react";
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import mystyles from './styles/mystyles.module.css'


const Header = () => {

  return (

    <Navbar bg="dark" variant="dark" className={mystyles.navstyle + " justify-content-center"}>


      <h5 > <a href='/create-account'> Registera</a></h5>
      <h5> <a href='/login'> Logga in</a></h5>


    </Navbar>

  );

}

export default Header