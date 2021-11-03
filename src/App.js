import "./App.css";
import "normalize.css";
import React from "react";
import ReactDOM from "react-dom";
import { HashRouter, Route, Switch, Link } from "react-router-dom";
import TopNavbar from "./components/Navbar";
import Login from "./pages/login";

function App() {
  return (
    <>
      <div className="bodyWidth">
        <TopNavbar className="" />
        <HashRouter>
          <Switch>
            <Route exact={true} path="/" component={Login} />
          </Switch>
        </HashRouter>
      </div>
    </>
  );
}

export default App;
