import logo from './logo.svg';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import React, { Component } from 'react';
import Header from './components/base/Header';
import Footer from './components/base/Chat'
import { AuthProvider } from './components/account/Authcontext';
import { Container, Row, Col } from 'react-bootstrap';
import Register from './components/account/Register';
import Login from './components/account/Login';
import './App.css';


class App extends Component {


  render() {
    return (
      <AuthProvider> 
      <Container fluid className="container-full-height d-flex flex-column">
        <Row className='notmainHegiht'>
          <Col xl={7} className="bg-red">

          </Col>

          <Col xs={5} className="no-margin-padding">
             <Header/>
          </Col>
        </Row>
        <Row className="flex-grow" noGutters>
          <Col xl={7} className="no-margin-padding" style={{ display: 'flex', flexDirection: 'column', height: '100%' }}>
            <Footer />
          </Col>
          <Col xl={5} className="no-margin-padding">
            <Router>

              <Routes>

                <Route path='/create-account' exact element={<Register />} />
                <Route path='/login' exact element={<Login />} />

              </Routes>
            </Router>
          </Col>
        </Row>
        <Row className="flex-grow">
          <Col xl={7} className="bg-red h-100">
          
          </Col>
          <Col xl={5} className="bg-black h-100">
            Blå kolumn 2
          </Col>
        </Row>
        <Row className='notmainHegiht'>
          <Col xs={12} className="bg-red">
            Röd kolumn längst ner 3
          </Col>
        </Row>
      </Container>
      </AuthProvider>
    );
  }
}

export default App;