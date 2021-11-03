import logo from "./logo.svg";
import "./App.css";
import "normalize.css";
import React from "react";
import ReactDOM from "react-dom";
import { BrowserRouter, Route, Switch, Link } from "react-router-dom";
import CustomerServicePage from "./page/customer_service/index";

function App() {
  return (
    <div className="bodyWidth">
      <BrowserRouter>
        <Switch>
          <Route path="/customer_service">
            <CustomerServicePage />
          </Route>
        </Switch>
      </BrowserRouter>
    </div>
  );
}

export default App;
