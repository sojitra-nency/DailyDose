import './App.css';

// rcc
import React, { Component } from 'react'
import NavBar from './components/NavBar';
import News from './components/News';


export default class App extends Component {
  render() {
    return (
      <div>
        <NavBar/>
        <News pageSize={9} country="in" category="science"/>
       
        
      </div>
    )
  }
}

