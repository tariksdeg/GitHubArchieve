import logo from "./logo.svg";
import "./App.css";
import About from "./About";
import Home from "./Home";
import { BrowserRouter, HashRouter, Route, Switch } from "react-router-dom";
function App() {
  return (
    <BrowserRouter hashType={"noslash"}>
      {/* <BrowserRouter> */}
      <div className="page-wrapper">
        <Switch>
          <Route path="/" exact component={Home} />
          <Route path="/about" component={About} />
        </Switch>
      </div>
    </BrowserRouter>
  );
}

export default App;
