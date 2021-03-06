import React, { Component } from 'react';
import '../styles/App.css';
import Section from './Section.js';
import Footer from './Footer.js';
import Header from './Header.js';
import Form from './Form.js';
import NavBar from './NavBar.js';




class App extends Component {
  render() {
    return (
      <div className="App">
        <NavBar />
        <Header />
        <Section />
        <Form />
        <Footer />
      </div>
    );
  }
}

export default App;
