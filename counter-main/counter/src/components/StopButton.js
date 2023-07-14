import React from "react";
import { useDispatch } from "react-redux";
import { counterAction, stopAction } from "../redux/actions/counterActions";

const StopButton=(data)=>{
    const dispatch=useDispatch()
    const timer=null
    

    const stop=(value)=>{
        {dispatch(counterAction(value,timer))}
    }
return(
    <div>
        <button onClick={()=>stop(data?.value)}>Stop Button</button>
    </div>
)
}

export default StopButton