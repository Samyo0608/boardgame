import React from "react";
import { Container } from "react-bootstrap";
// import PropTypes from "prop-types";
import "../../css/cart.css";

function Cart1(props) {
  const { product_name, product_price } = props;
  return (
    <>
      <Container>
        {/* 遊戲一 */}
        <div className="box12">
          <div className="box123">
            <input type="checkbox" />
            <img className="cartpic" src="/img/product/game1.jpg" alt="" />
            <div className="pnumber">
              <p>遊戲名稱: </p>
            </div>
            <div className="pname">
              <p>{product_name}</p>
            </div>
            <div className="amount10">
              {/* <a
                href="#/"
                onClick={() => {
                  setCount(product_count - 1);
                }}
              >
                -
              </a>
              <a href="#/" className="border">
                {product_count}
              </a>
              <a
                href="#/"
                onClick={() => {
                  setCount(product_count + 1);
                }}
              >
                +
              </a> */}
              <input
                className="amount12"
                type="button"
                value="-"
                id="del"
                onclick="del()"
              />
              <span className="amount14" id="quantity">
                1
              </span>
              <input
                className="amount13"
                type="button"
                value="+"
                id="add"
                onclick="add()"
              />
            </div>
            <p className="stock">庫存剩餘: X 件</p>
            <p className="cartprice">Price: ${product_price}</p>
            <img className="str1" src="/img/product/stright.png" alt="" />
            <div className="trackit">
              <p>加入收藏</p>
              <p>移除</p>
            </div>
          </div>
        </div>
        {/* 遊戲二 */}
        <div className="box12">
          <div className="box123">
            <input type="checkbox" />
            <img className="cartpic" src="/img/product/tolove.jpg" alt="" />
            <div className="pnumber">
              <p>遊戲名稱:</p>
            </div>
            <div className="pname">
              <p>傳情</p>
            </div>
            <div className="amount10">
              <input
                className="amount12"
                type="button"
                value="-"
                id="del"
                onclick="del()"
              />
              <span className="amount14" id="quantity">
                1
              </span>
              <input
                className="amount13"
                type="button"
                value="+"
                id="add"
                onclick="add()"
              />
            </div>
            <p className="stock">庫存剩餘: X 件</p>
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
}

export default Cart1;
