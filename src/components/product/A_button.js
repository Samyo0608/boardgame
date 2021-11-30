import React from "react";
import { Button } from "react-bootstrap";
// import PropTypes from "prop-types";
import "../../css/product.css";

function A_button() {
  function check() {
    alert("放入購物車");
  }
  return <button onClick={check}>購買!</button>;
}

export default A_button;
