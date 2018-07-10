import React, { Component } from 'react';
import './App.css';
import Timer from './components/Timer.js'

class App extends Component {



  render() {



    return (
      <div>
        <h2>Minute Timer</h2>
        {/* <button>Launch</button> */}
        <Timer/>
      </div>
    );
  }
}

export default App;
