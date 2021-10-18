import logo from "./logo.svg";
import "./App.css";
import "./index.css";
//import Reisebilde from "./assets/reisebilde.jpg";

import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";

import Home from "./webpages/home";
import Invoice from "./webpages/invoice";

function App() {
  return (
    <Router>
      <Switch>
        <Route exact path="/" component={Home} />
        <Route exact path="/invoice" component={Invoice} />
      </Switch>
    </Router>
  );
}

export default App;
