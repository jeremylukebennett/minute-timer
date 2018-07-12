import React, { Component } from 'react';
import './App.css';
import Clock from './components/Clock.js'

class App extends Component {



  render() {



    return (
      <div>
        <h2>Minute Timer</h2>
        <Clock date={new Date()} />
      </div>
    );
  }
}

export default App;
