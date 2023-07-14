import React from "react";
import { useDispatch } from "react-redux";
import { counterAction } from "../redux/actions/counterActions";

const StartButton=(data)=>{
    const timer=null
    const dispatch=useDispatch()
    
    
    const getStartCounter=(value)=>{
      value=10
      {dispatch(counterAction(value,timer))}
    }
return (
<div>
    <button onClick={()=>getStartCounter(data.state.deger)}>Start</button>
</div>
)
}

export default StartButton