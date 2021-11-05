import "./App.css";
import "normalize.css";
import React from "react";
import CustomerServicePage from "./pages/customer_service/faq";
import instantQAPage from "./pages/customer_service/instantQAPage";
import Footer from "./components/Footer.js";
import index from "./pages/discuss/index.js";
import booking_index from "./pages/booking_pages/booking_index.js";
import { HashRouter, Route, Switch, } from "react-router-dom";
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
            <Route
              exact={true}
              path="/faq"
              component={CustomerServicePage}
            />
            <Route
              exact={true}
              path="/instant_QA"
              component={instantQAPage}
            />
          </Switch>
        </HashRouter>
      </div>
      <Footer />
    </>
  );
}

export default App;
