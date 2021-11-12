import React from "react";
import { Container } from "react-bootstrap";
// import PropTypes from "prop-types";
import "../../css/cart.css";

const Payway1 = () => {
  return (
    <>
      <Container>
        <div className="box12">
          <p className="payman">付款資料</p>
          <div className="payman6">
            <input type="checkbox" />
            <p className="payman10">貨到付款</p>
            <input type="checkbox" />
            <p className="payman10">信用卡付款</p>
          </div>
        </div>
      </Container>
    </>
  );
};

export default Payway1;
