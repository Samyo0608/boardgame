import "./App.css";
import "normalize.css";
import React from "react";
import ReactDOM from "react-dom";
import Footer from "./components/Footer.js";
import index from "./pages/discuss/index.js";
import booking_index from "./pages/booking_pages/booking_index.js";
import { HashRouter, Route, Switch, Link } from "react-router-dom";

function App() {
  return (
    <>
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
