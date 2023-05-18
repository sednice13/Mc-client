import React, { useEffect } from 'react'
import Navbar from 'react-bootstrap/Navbar';
import mystyles from './styles/mystyles.module.css'
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import io from 'socket.io-client'




const socket = io.connect('http://localhost:8081')

const Chat = () => {

  const [formValue, setformValue] = React.useState({
    message: ''
  });

  const [messages, setmessages] = React.useState([])

  const sendMessage = () => {

   if(localStorage.getItem('token')) {

    const socketinfo = {
      message: formValue.message,
      token: localStorage.getItem('token')
    }
    
    socket.emit('message_sent', socketinfo)

   }

   

  }



  const handleChange = (event) => {
    setformValue({
      ...formValue,
      [event.target.name]: event.target.value,


    });

  }

  useEffect(() => {
    const messageListener = (data) => {
      console.log(data)

      setmessages([...messages, data])
    }

    socket.on('message_receive', messageListener)
    return () => {

      socket.off('message_receive', messageListener);
    }

  }, [messages])






  return (
    <div className={`${mystyles.footer} ${mystyles.footerContainer} ${mystyles.footerdiv} ${mystyles.fullWidth}`}>

      <div className={mystyles.footertextdiv}>
        {messages.map((message, index) => (<p key={index} className={mystyles.message}>
          {message}
        </p>))}
      </div>

      <div className={mystyles.sendingdiv}>  
      <Form className={mystyles.form}>
        <Form.Group className={mystyles.formgroup}>
          <Form.Control type='text' size='50px' name='message' onChange={handleChange}></Form.Control>
        </Form.Group>
        <Button variant="success" onClick={sendMessage}>Send</Button>
      </Form>

      </div>
    </div>
  )
}
export default Chat