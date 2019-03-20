import React, { Component } from 'react';
// import logo from './logo.svg';
import './reset.css'
import './App.css';
import Menu from './components/Menu'
import Home from './components/Home'
import About from './components/About'
import Skills from './components/Skills'
import Projects from './components/Projects'
import Contact from './components/Contact'

class App extends Component {
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <Menu/>
        </header>
      
        <Home/>
        <About/>
        <Skills/>
        <Projects/>
        <Contact/>
        <footer > 
          <p>©2019 by Jon Fox | jonfuchs45@gmail.com | 916-206-8539</p>
        </footer>
      </div>
    );
  }
}

export default App;
