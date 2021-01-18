import React, { Component } from 'react'
import './App.css'
import Header from './Header';
import Footer from './Footer';
import HelloPokedex from './HelloPokedex';
class App extends Component {
  render() {
    return (
      <div className="App">
        <Header />
        <HelloPokedex />
        <Footer />
      </div>
    )
  }
}

export default App
