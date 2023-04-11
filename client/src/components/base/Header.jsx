import React from "react";
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import mystyles from './styles/mystyles.module.css'


const Header = () => {

    return (
        
        <Navbar bg="dark" variant="dark" className={mystyles.navstyle + " justify-content-center"}>

          <div> 
          <Container fluid>
            
            <Nav >
              <Nav.Link href="#home">Hem</Nav.Link>
              <Nav.Link href="#features">Forum</Nav.Link>
              
            </Nav>
          </Container>
          </div> 
          
        </Navbar>
        
    );
  
}

export default Header