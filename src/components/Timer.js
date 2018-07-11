import React from 'react';

class Timer extends React.Component {
    constructor(props){
        super(props);

        this.state = {
            currentTime: null,
        }
    }



    timerUpdate = () => {
        this.setState({
            currentTime: new Date().toLocaleTimeString(),
        })
    }

    
    render(){
        // this is forcing a setState, which then causes the page to rerender every second. That's how the time is getting updated.
        setInterval(this.timerUpdate, 1000)


        return(         
            <div>
                <h1>Hello, world!</h1>
                <h2>It is {new Date().toLocaleTimeString()}.</h2>

                {/* <h3>{this.state.currentTime}</h3> */}
            </div>
        )

    }
}

export default Timer;
