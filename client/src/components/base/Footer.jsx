import React from 'react'
import Navbar from 'react-bootstrap/Navbar';
import mystyles from './styles/mystyles.module.css'
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';

const Footer = () => {

    return(
        <footer className={mystyles.footer}>
 
      <Form className={mystyles.form}>
        <Form.Group className={mystyles.formgroup}>
            <Form.Control type='text' size='50px'></Form.Control>
        </Form.Group>
        <Button variant="success">Send</Button>
      </Form>
            

        </footer>
    )
}
export default Footer