import React from "react";
import { Container } from "react-bootstrap";
// import PropTypes from "prop-types";
import "../../css/cart.css";

const Payway0 = () => {
  return (
    <>
      <Container>
        {/* 遊戲一 */}
        <div className="box12">
          <div className="box123">
            <input type="checkbox" />
            <img className="cartpic" src="/img/product/crime.jpg" alt="" />
            <div className="pnumber">
              <p>遊戲名稱: </p>
            </div>
            <div className="pname">
              <p>犯人在跳舞</p>
            </div>
            <div className="amount10">
              <span className="amount11" id="quantity">
                數量: 1
              </span>
            </div>
            <p className="cartprice">Price: $888</p>
            <img className="str1" src="/img/product/stright.png" alt="" />
            <div className="trackit">
              <p>加入收藏</p>
              <p>移除</p>
            </div>
          </div>
        </div>
      </Container>
    </>
  );
};

export default Payway0;
