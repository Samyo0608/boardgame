import "./App.css";
import "normalize.css";
import React from "react";
import ReactDOM from "react-dom";
import { HashRouter, Route, Switch, Link } from "react-router-dom";
import TopNavbar from "./components/Navbar";

function App() {
  return (
    <>
      <TopNavbar />
      <div className="bodyWidth">
        <HashRouter>
          <Switch>
            <Route exact={true} path="/" component={index} />
            <Route
              exact={true}
              path="/booking_index"
              component={booking_index}
            />
          </Switch>
        </HashRouter>
      </div>
      <Footer />
    </>
  );
}

export default App;
