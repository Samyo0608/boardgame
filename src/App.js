import "./App.css";
import "normalize.css";
import React from "react";
import CustomerServicePage from "./pages/customer_service/faq";
import instantQA_page from "./pages/customer_service/instantQA_page";
import messagePage from "./pages/customer_service/customer_service_message";
import question_record from "./pages/customer_service/question_record";
import edit_reply from "./pages/customer_service/edit_reply";
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
            <Route
              exact={true}
              path="/faq"
              component={CustomerServicePage}
            />
            <Route
              exact={true}
              path="/instant_QA"
              component={instantQA_page}
            />
            <Route
              exact={true}
              path="/customer_service_message"
              component={messagePage}
            />
            <Route
              exact={true}
              path="/question_record"
              component={question_record}
            />
            <Route
              exact={true}
              path="/edit_reply"
              component={edit_reply}
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
