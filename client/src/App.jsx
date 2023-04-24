import logo from './logo.svg';
import  {BrowserRouter as Router,  Routes, Route }   from 'react-router-dom'
import React, { Component}from 'react';
import Header from './components/base/Header';
import Footer from './components/base/Footer'

import Signin from './components/account/Signin';


class App extends Component {
 

  render() {
    return (
      <div>
        <Header/>
        <Router>

          <Routes>
       
          <Route  path='/create-account' exact element={<Signin/>} />

          </Routes>
        </Router>
        <div>
        <h5 > <a href='/create-account'> Registera</a></h5>
            <h5> Logga in</h5>
        </div>
        <Footer/>
      
      </div>
    );
  }
}

export default App;