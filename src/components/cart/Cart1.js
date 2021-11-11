import React from "react";
import { Container } from "react-bootstrap";
// import PropTypes from "prop-types";
import "../../css/cart.css";

const Cart1 = () => {
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
              <input type="button" value="-" id="del" onclick="del()" />
              <span className="amount11" id="quantity">
                1
              </span>
              <input type="button" value="+" id="add" onclick="add()" />
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
        {/* 遊戲二 */}
        <div className="box12">
          <div className="box123">
            <input type="checkbox" />
            <img className="cartpic" src="/img/product/tolove.jpg" alt="" />
            <div className="pnumber">
              <p>遊戲名稱:</p>
            </div>
            <div className="pname">
              <p>遊戲名稱:傳情</p>
            </div>
            <div className="amount10">
              <input type="button" value="-" id="del" onclick="del()" />
              <span className="amount11" id="quantity">
                1
              </span>
              <input type="button" value="+" id="add" onclick="add()" />
            </div>
            <p className="stock">庫存剩餘: X 件</p>
            <p className="cartprice">Price: $888</p>
            <img className="str1" src="/img/product/stright.png" alt="" />
            <div className="trackit">
              <p>加入收藏</p>
              <p>移除</p>
            </div>{" "}
          </div>
        </div>
        {/* 遊戲三 */}
        <div className="box12">
          <div className="box123">
            <input type="checkbox" />
            <img className="cartpic" src="/img/product/gem.jpg" alt="" />
            <div className="pnumber">
              <p>遊戲名稱:</p>
            </div>
            <div className="pname">
              <p>璀璨寶石</p>
            </div>
            <div className="amount10">
              <input type="button" value="-" id="del" onclick="del()" />
              <span className="amount11" id="quantity">
                1
              </span>
              <input type="button" value="+" id="add" onclick="add()" />
            </div>
            <p className="stock">庫存剩餘: X 件</p>
            <p className="cartprice">Price: $888</p>
            <img className="str1" src="/img/product/stright.png" alt="" />
            <div className="trackit">
              <p>加入收藏</p>
              <p>移除</p>
            </div>
          </div>{" "}
        </div>
        {/* 遊戲四 */}
        <div className="box12">
          <div className="box123">
            <input type="checkbox" />
            <img className="cartpic" src="/img/product/wolf.jpg" alt="" />
            <div className="pnumber">
              <p>遊戲名稱:</p>
            </div>
            <div className="pname">
              <p>狼人</p>
            </div>
            <div className="amount10">
              <input type="button" value="-" id="del" onclick="del()" />
              <span className="amount11" id="quantity">
                1
              </span>
              <input type="button" value="+" id="add" onclick="add()" />
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
};

export default Cart1;
