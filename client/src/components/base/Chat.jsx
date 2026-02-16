import React, { useEffect } from 'react'
import mystyles from './styles/mystyles.module.css'
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import io from 'socket.io-client'
import { Fade, Slide } from 'react-awesome-reveal';
import { MC_SOCKET_URL } from '../../config/endpoints'




const socket = io(MC_SOCKET_URL, { path: '/socket.io' })

const Chat = () => {

  const [formValue, setformValue] = React.useState({
    message: ''
  });

  const [messages, setmessages] = React.useState([])

  



  const sendMessage = () => {

    if (formValue.message.trim().length === 0) {
      return
    }

    if(localStorage.getItem('token')) {

    const socketinfo = {
      message: formValue.message,
      token: localStorage.getItem('token')
    }
    
    socket.emit('message_sent', socketinfo)
    setformValue({ message: '' })

   }
  else {
    setmessages([...messages, 'Your account are not logged in? Try log in.'])

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
      setmessages((prev) => [...prev, data])
    }

    socket.on('message_receive', messageListener)
    return () => {

      socket.off('message_receive', messageListener);
    }

  }, [])






  return (
    <div className={mystyles.chatPage}>
      <Fade triggerOnce duration={700}>
        <div className={mystyles.logoWrap}>
          <img src={`${process.env.PUBLIC_URL}/logo.png`} alt='Logo' className={mystyles.logoImage} />
          
        </div>
        
      </Fade>

      <div className={mystyles.chatCardRow}>
        
        <Slide direction='right' triggerOnce duration={700} delay={500} className={mystyles.chatSlide}>
          <div className={mystyles.chatCard}>
            <div className={mystyles.footertextdiv}>
              {messages.map((message, index) => (<p key={index} className={mystyles.message}>
                {message}
              </p>))}
            </div>

            <div className={mystyles.sendingdiv}>  
              <Form className={mystyles.form} onSubmit={(e) => { e.preventDefault(); sendMessage(); }}>
                <Form.Group className={mystyles.formgroup}>
                  <Form.Control type='text' size='50px' name='message' value={formValue.message} onChange={handleChange} placeholder='Write message...' />
                </Form.Group>
                <Button variant="success" onClick={sendMessage}>Send</Button>
              </Form>
            </div>
          </div>
        </Slide>
      </div>

      <div className={mystyles.linkRow}>
        <Slide direction='left' triggerOnce duration={550} delay={1100}>
          <a href='#' className={mystyles.footerLink}>information</a>
        </Slide>
        <Slide direction='left' triggerOnce duration={550} delay={1200}>
          <a href='#' className={mystyles.footerLink}>faq</a>
        </Slide>
        <Slide direction='right' triggerOnce duration={550} delay={1100}>
          <a href='#' className={mystyles.footerLink}>discord</a>
        </Slide>
        <Slide direction='right' triggerOnce duration={550} delay={1200}>
          <a href='#' className={mystyles.footerLink}>vote</a>
        </Slide>
      </div>
    </div>
  )
}
export default Chat
