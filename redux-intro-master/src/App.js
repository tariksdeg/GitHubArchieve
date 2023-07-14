import React, { Component } from 'react'
import Counter from './components/Counter';
import IncreaseCounter from "./components/IncreaseCounter"
import DecreaseCounter from "./components/DecreaseCounter"
import IncreaseByTwoCounter from "./components/IncreaseByTwoCounter"
export default class App extends Component {
  render() {
    return (
      <div >
        <Counter/>
        <IncreaseCounter/>
        <DecreaseCounter/>
        <IncreaseByTwoCounter/>
      </div>
    );
  }
}
  
  


