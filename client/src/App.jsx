import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import React, { Component } from 'react';
import Header from './components/base/Header';
import Chat from './components/base/Chat'
import { AuthProvider } from './components/account/Authcontext';
import Register from './components/account/Register';
import Login from './components/account/Login';
import Profile from './components/account/Profile';
import { StatusProvider } from './components/account/Status/StatusContext';
import './App.css';

class App extends Component {
  render() {
    return (
      <StatusProvider>
        <AuthProvider>
          <Router>
            <div className="appShell">
              <Header />
              <main className="mainArea">
                <Routes>
                  <Route path='/' element={<Chat />} />
                  <Route path='/create-account' element={<Register />} />
                  <Route path='/login' element={<Login />} />
                  <Route path='/profile' element={<Profile />} />
                </Routes>
              </main>
              <footer className="siteFooter">Gvision 2025</footer>
            </div>
          </Router>
        </AuthProvider>
      </StatusProvider>
    );
  }
}

export default App;
