import logo from "./logo.svg";
import "./App.css";
import "normalize.css";
import React from "react";
import ReactDOM from "react-dom";
import { HashRouter, Route, Switch, Link } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css";
import { Button } from "react-bootstrap";
import Product from "./pages/product/index";  // 選擇自己分頁的路徑
import Aboutgame from "./pages/aboutgames/index2"; 
import Footer from"./components/Footer";

function App() {
  return (
    <>
    <div className="bodyWidth">
      <HashRouter>
        <Switch>
          <Route exact={true} path="/product" component={Product} /> 
        </Switch>
        <Switch>
          <Route exact={true} path="/aboutgames" component={ Aboutgame} /> 
        </Switch>
      </HashRouter>
    </div>




    <Footer/>
    </>
  );
}

// path是自定義的路徑名稱跟檔案路徑無關
// component是import路徑進來後要顯示的js檔案的檔名
export default App;