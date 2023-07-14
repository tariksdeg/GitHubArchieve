import React,{ useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import Coffees from "./components/Coffees";
import Menu from "./components/Menu";
import { getCoffees } from "./redux/actions/coffeesActions";

function App() {
  const dispatch = useDispatch();
  const coffeeReducer = useSelector((state) => state.coffeeReducer);

  useEffect(() => {
    dispatch(getCoffees());
  }, [dispatch]);

  return (
    <div className="App ms-3 me-5">
      <div className="container m-3 p-2">
        <div className="row">
          <div className="col-12 col-lg-3 border border-1 border-success p-4">
            <Menu category={coffeeReducer.category}/>
          </div>
          <div className="col-12 col-lg-9 border border-1 border-success p-4">
            <Coffees coffeeReducer={coffeeReducer} />
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
