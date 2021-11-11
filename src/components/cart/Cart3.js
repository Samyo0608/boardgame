import React from "react";
import { Button, Container } from "react-bootstrap";
// import PropTypes from "prop-types";
import "../../css/cart.css";

const Cart3 = () => {
  return (
    <>
      <Container>
        {/* 結帳 */}
        <div className="total">
          <p>總金額:$</p>
          <div className="totalprice">
            <p>5432</p>
          </div>
          <Button className="buttoncheck" variant="primary">
            確認結帳
          </Button>
        </div>
      </Container>
    </>
  );
};

export default Cart3;
