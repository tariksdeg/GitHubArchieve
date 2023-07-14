import React, { Component } from 'react'

export default class App extends Component {
  constructor() {
    super();
    this.state = { time: {}, seconds: 10 };
    this.timer = 0;
    this.startTimer = this.startTimer.bind(this);
    this.countDown = this.countDown.bind(this);
    this.stopTimer= this.stopTimer.bind(this)
    this.start=window.localStorage.getItem("value")
  }

  secondsToTime(secs){
    let hours = Math.floor(secs / (60 * 60));

    let divisor_for_minutes = secs % (60 * 60);
    let minutes = Math.floor(divisor_for_minutes / 60);

    let divisor_for_seconds = divisor_for_minutes % 60;
    let seconds = Math.ceil(divisor_for_seconds);

    let obj = {
      "h": hours,
      "m": minutes,
      "s": seconds
    };
    return obj;
  }

  componentDidMount() {
    let timeLeftVar = this.secondsToTime(this.state.seconds);
    this.setState({ time: timeLeftVar });
    if(this.start>=25){
this.startTimer()
    }
  }
  

  startTimer() {
    if (this.timer == 0 && this.state.seconds > 0) {
      this.timer = setInterval(this.countDown, 1000);
    }
  }

  countDown() {
   
    let seconds = this.state.seconds - 1;
    this.setState({
      time: this.secondsToTime(seconds),
      seconds: seconds,
    });
    
    
    if (seconds == 0) { 
      clearInterval(this.timer);
      window.localStorage.setItem("value",25)
      window.location.reload()
    }
  }
stopTimer(){
  clearInterval(this.timer);
let seconds=10;
this.setState({
  time: this.secondsToTime(seconds),
  seconds: seconds,
  });
  window.localStorage.setItem("value",15)
  window.location.reload()
}
  render() {
    return(
      <div>
        
         {this.state.time.s}
         <br/>
        <button onClick={this.startTimer}>Start</button>
        <button onClick={this.stopTimer}>Stop</button>
      </div>
    );
  }
}