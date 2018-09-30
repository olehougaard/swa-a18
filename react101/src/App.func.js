import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';

const Intro = (props) => ( 
    <p className="App-intro">
      To get started, edit <code>{props.path}</code> and save to reload.
    </p>
  )

const App = () => (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <h1 className="App-title">Welcome to React</h1>
      </header>
      <Intro path="src/App.js"/>
    </div>
  )

export default App;
