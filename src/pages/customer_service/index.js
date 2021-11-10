import "./App.css";
import "normalize.css";
import React from "react";
import FAQPage from "./pages/customer_service/faq";
import InstantQAPage from "./pages/customer_service/instantQA_page";
import CustomerServicePage from "./pages/customer_service/customer_service_message";
import QuestionRecord from "./pages/customer_service/question_record";
import EditReply from "./pages/customer_service/edit_reply";
import Footer from "./components/Footer.js";
import Index from "./pages/discuss/index.js";
import booking from "./pages/booking_pages/booking_index.js";
import Discuss from "./pages/discuss/discuss.js";
import Reply from "./pages/discuss/reply.js";
import bookingCheck from "./pages/booking_pages/booking_check.js";
import {
  HashRouter,
  BrowserRouter,
  Route,
  Switch,
  Link,
} from "react-router-dom";
import contest from "./pages/contest/contest_index.js";
import TopNavbar from "./components/Navbar";
import Login from "./pages/login";
import Register from "./pages/register";
import MemberCenter from "./pages/memberCenter";
import MemSelf from "./pages/memberCenter/memSelf";
import RePassword from "./pages/memberCenter/rePassword";
import MemberProduct from "./pages/memberCenter/memberProduct";
import MemberRent from "./pages/memberCenter/memberRent";
import MemberPoint from "./pages/memberCenter/memberPoint";
import vote from "./pages/contest/vote.js";
import contestInfo from "./pages/contest/contest_info";
import Aboutgame from "./pages/aboutgames";
import Product from "./pages/product";
import Cart from "./pages/cart";

function App() {
  return (
    <>
        <BrowserRouter>
          <Switch>
            <Route
              exact={true}
              path="/memberCenter/memberPoint"
              component={MemberPoint}
            />
            <Route
              exact={true}
              path="/memberCenter/memberRent"
              component={MemberRent}
            />
            <Route
              exact={true}
              path="/memberCenter/memSelf"
              component={MemSelf}
            />
            <Route
              exact={true}
              path="/memberCenter/rePassword"
              component={RePassword}
            />
            <Route
              exact={true}
              path="/instant_QA"
              component={InstantQAPage}
            />
            <Route
              exact={true}
              path="/customer_service_message"
              component={CustomerServicePage}
            />
            <Route
              exact={true}
              path="/question_record"
              component={QuestionRecord}
            />
            <Route
              exact={true}
              path="/edit_reply"
              component={EditReply}

            />
            <Route
              exact={true}
              path="/memberCenter/memberProduct"
              component={MemberProduct}
            />

            <Route exact={true} path="/faq" component={FAQPage} />
            <Route exact={true} path="/" component={Index} />
            <Route exact={true} path="/login" component={Login} />
            <Route exact={true} path="/register" component={Register} />
            <Route exact={true} path="/memberCenter" component={MemberCenter} />
            <Route exact={true} path="/booking" component={booking} />
            <Route exact={true} path="/discuss/reply" component={Reply} />
            <Route exact={true} path="/discuss" component={Discuss} />
            <Route exact={true} path="/bookingCheck" component={bookingCheck} />
            <Route exact={true} path="/contest" component={contest} />
            <Route exact={true} path="/contestInfo" component={contestInfo} />
            <Route exact={true} path="/vote" component={vote} />
            <Route exact={true} path="/Product" component={Product} />
            <Route exact={true} path="/Aboutgame" component={Aboutgame} />
            <Route exact={true} path="/Cart" component={Cart} />
          </Switch>
        </BrowserRouter>
    </>
  );
}

export default App;
