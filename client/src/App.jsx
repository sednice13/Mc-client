import logo from './logo.svg';
import React, { Component}from 'react';
import Header from './components/base/Header';
import Footer from './components/base/Footer'


class App extends Component {
 

  render() {
    return (
      <div>
        <Header/>
        <Footer/>
      
      </div>
    );
  }
}

export default App;