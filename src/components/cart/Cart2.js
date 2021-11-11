import React from "react";
import { Link, Button, Container } from "react-bootstrap";
// import PropTypes from "prop-types";
import "../../css/cart.css";

const Cart2 = () => {
  return (
    <>
      <Container>
        {/* 結帳 */}
        <div className="total">
          <p>總金額:$</p>
          <div className="totalprice">
            <p>5432</p>
          </div>
          <a href="http://localhost:3000/cartcheck">
            <Button className="buttoncheck" variant="primary">
              下訂單
            </Button>
          </a>
          <p className="comebuy">繼續購物</p>
        </div>
      </Container>
    </>
  );
};

export default Cart2;
