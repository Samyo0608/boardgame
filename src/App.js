import "./App.css";
import "normalize.css";
import React from "react";
import ReactDOM from "react-dom";
import { HashRouter, Route, Switch, Link } from "react-router-dom";
import Footer from "./components/Footer.js";
import index from "./page/discuss/index";

function App() {
  return (
    <>
      <div className="bodyWidth">
        <HashRouter>
          <Switch>
            <Route exact={true} path="/" component={index} />
          </Switch>
        </HashRouter>
      </div>
      <Footer />
    </>
  );
}

export default App;
