import React from 'react'
import Navbar from 'react-bootstrap/Navbar';
import mystyles from './styles/mystyles.module.css'
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import io from 'socket.io-client'


const socket = io.connect('http://localhost:8081')

const Footer = () => {

  const [formValue, setformValue] = React.useState({
    message: ''
  });

  const sendMessage = () => {

    socket.emit('message_sent', formValue.message)
  }



  const handleChange = (event) => {
    setformValue({
      ...formValue,
      [event.target.name]: event.target.value,


    });


  }





    return(
        <footer className={mystyles.footer}>
         
           <div className={mystyles.footertextdiv}> 
             <p>Test </p>
             <p>Test2</p>
             <p>Test </p>
             <p>Test2</p>
             <p>Test </p>
             <p>Test2</p>
             <p>HEJ</p>
           </div>
      <Form className={mystyles.form}>
        <Form.Group className={mystyles.formgroup}>
            <Form.Control type='text' size='50px' name='message' onChange={handleChange}></Form.Control>
        </Form.Group>
        <Button variant="success" onClick={sendMessage}>Send</Button>
      </Form>
            

        </footer>
    )
}
export default Footer