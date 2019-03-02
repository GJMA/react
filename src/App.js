import React, { Component } from 'react';
import {Route, Switch} from 'react-router-dom'
import './App.css';
import Hello from './component/Hello'
import Footer from './component/Footer.js'
import Router from './router/index.js'



class App extends Component {
  render() {
    return (
      <div>
        <Router/>
      <Footer />
      </div>
    );
  }
}

export default App;
