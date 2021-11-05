import "./App.css";
import "normalize.css";
import React from "react";
import ReactDOM from "react-dom";
import Footer from "./components/Footer.js";
import index from "./pages/discuss/index.js";
import booking from "./pages/booking_pages/booking_index.js";
import discuss from "./pages/discuss/discuss.js";
import bookingCheck from "./pages/booking_pages/booking_check.js";
import { HashRouter, Route, Switch, Link } from "react-router-dom";
import contest from "./pages/contest/contest_index.js";
import TopNavbar from "./components/Navbar";
import Login from "./pages/login";
import Register from "./pages/register";
import MemberCenter from "./pages/memberCenter";
import MemSelf from "./pages/memberCenter/memSelf";
import vote from "./pages/contest/vote.js";
import contestInfo from "./pages/contest/contest_info";


function App() {
  return (
    <>
      <div className="bodyWidth">
        <TopNavbar className="" />
        <HashRouter>
          <Switch>
            <Route
              exact={true}
              path="/memberCenter/memSelf"
              component={MemSelf}
            />
            <Route exact={true} path="/" component={index} />
            <Route exact={true} path="/login" component={Login} />
            <Route exact={true} path="/register" component={Register} />
            <Route exact={true} path="/memberCenter" component={MemberCenter} />
            <Route exact={true} path="/booking" component={booking} />
            <Route exact={true} path="/discuss" component={discuss} />
            <Route exact={true} path="/bookingCheck" component={bookingCheck} />
            <Route exact={true} path="/contest" component={contest} />
            <Route exact={true} path="/contestInfo" component={contestInfo} />
            <Route exact={true} path="/vote" component={vote} />
          </Switch>
        </HashRouter>
        <Footer />
      </div>
    </>
  );
}

export default App;
