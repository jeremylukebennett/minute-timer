import React, { Component } from 'react';
import './App.css';
import Timer from './components/Timer.js'
import Countdown from './components/Countdown.js'
import Clock from './components/Clock.js'

class App extends Component {



  render() {



    return (
      <div>
        <h2>Minute Timer</h2>
        {/* <Timer/> */}
        {/* <Countdown/> */}
        <Clock date={new Date()} />
      </div>
    );
  }
}

export default App;
