import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import Counter from "./components/Counter";
import StartButton from "./components/StartButton";
import StopButton from "./components/StopButton";
import { counterAction } from "./redux/actions/counterActions";

function App() {
  const dispatch = useDispatch();
  const state = useSelector((state) => state.counterReducer);
const timer=null


  useEffect(() => {
    dispatch(counterAction(state.deger,timer));
  }, [dispatch]);

  return (
    <div className="App ms-3 ms-5">
      <div className="container m-3 p-2">
        <div>
          <Counter state={state} />
        </div>
        <div className="row">
          <div className="col-12 col-lg-2">
            <StartButton state={state} />
          </div>
          <div className="col-12 col-lg-2">
            <StopButton state={state} />
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
