import "./App.css";
import "normalize.css";
import React from "react";
import ReactDOM from "react-dom";
import Footer from "./components/Footer.js";
import index from "./pages/discuss/index.js";
import booking from "./pages/booking_pages/booking_index.js";
import bookingCheck from "./pages/booking_pages/booking_check.js";
import { HashRouter, Route, Switch, Link } from "react-router-dom";

function App() {
  return (
    <>
      <div className="bodyWidth">
        <TopNavbar className="" />
        <HashRouter>
          <Switch>
            <Route exact={true} path="/" component={index} />
            <Route exact={true} path="/login" component={Login} />
            <Route exact={true} path="/register" component={Register} />
            <Route exact={true} path="/memberCenter" component={MemberCenter} />
            <Route exact={true} path="/booking" component={booking} />
            <Route exact={true} path="/bookingCheck" component={bookingCheck} />
          </Switch>
        </HashRouter>
        <Footer />
      </div>
    </>
  );
}

export default App;
