import "./App.css";
import "normalize.css";
import React from "react";
import CustomerServicePage from "./pages/customer_service/index";
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
              path="/customer_service"
              component={CustomerServicePage}
            />
          </Switch>
        </HashRouter>
      </div>
      <Footer />
    </>
  );
}

export default App;
