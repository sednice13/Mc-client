import logo from './logo.svg';
import  {BrowserRouter as Router,  Routes, Route }   from 'react-router-dom'
import React, { Component}from 'react';
import Header from './components/base/Header';
import Footer from './components/base/Footer'

import Register from './components/account/Register';
import Login from './components/account/Login';


class App extends Component {
 

  render() {
    return (
      <div>
        <Header style= {{ marginBottom: '10px'} }  />
        <Router>

          <Routes>
       
          <Route  path='/create-account' exact element={<Register/>} />
          <Route  path='/login' exact element={<Login/>} />

          </Routes>
        </Router>
        <div>
        <h5 > <a href='/create-account'> Registera</a></h5>
            <h5> <a href='/login'> Logga in</a></h5>
        </div>
        <Footer/>
      
      </div>
    );
  }
}

export default App;