import "./App.css";
import React from "react";
import ReactDOM from "react-dom";
import { HashRouter, Route, Switch, Link } from "react-router-dom";
import TopNavbar from "./components/Navbar";

function App() {
  return (
    <div className="boradWidth">
      <HashRouter>
        <Switch>
          <Route exact={true} path="/" component={TopNavbar} />
        </Switch>
      </HashRouter>
    </div>
  );
}

export default App;
