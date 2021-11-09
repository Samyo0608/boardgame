import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import { Button, Container } from "react-bootstrap";
import "../../css/cart.css";
function Cart(props) {
  return (
    <>
      <Container>
        <div className="button1">
          <Button variant="outline-primary">我的最愛( ) </Button>{" "}
          <Button variant="outline-primary">我的遊戲( ) </Button>
        </div>
        <Button className="button2" variant="outline-secondary">
          全部刪除
        </Button>
        <Button className="button3" variant="primary">
          全部選取
        </Button>
        <div className="box12">
          {/* 遊戲一 */}
          <div className="box123">
            <input type="checkbox" />
            <img className="cartpic" src="/img/product/crime.jpg" alt="" />
            <div className="pnumber">
              <p>商品編號:123456</p>
            </div>
            <div className="pname">
              <p>遊戲名稱:犯人在跳舞</p>
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
          {/* 遊戲二 */}
          <div className="box123">
            <input type="checkbox" />
            <img className="cartpic" src="/img/product/tolove.jpg" alt="" />
            <div className="pnumber">
              <p>商品編號:121456</p>
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
            </div>
          </div>
          {/* 遊戲三 */}
          <div className="box123">
            <input type="checkbox" />
            <img className="cartpic" src="/img/product/gem.jpg" alt="" />
            <div className="pnumber">
              <p>商品編號:123456</p>
            </div>
            <div className="pname">
              <p>遊戲名稱:璀璨寶石</p>
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
          {/* 遊戲四 */}
          <div className="box123">
            <input type="checkbox" />
            <img className="cartpic" src="/img/product/wolf.jpg" alt="" />
            <div className="pnumber">
              <p>商品編號:123456</p>
            </div>
            <div className="pname">
              <p>遊戲名稱:狼人</p>
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
          {/* 遊戲五 */}
          <div className="box123">
            <input type="checkbox" />
            <img className="cartpic" src="/img/product/crime.jpg" alt="" />
            <div className="pnumber">
              <p>商品編號:123456</p>
            </div>
            <div className="pname">
              <p>遊戲名稱:犯人在跳舞</p>
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
          {/* 遊戲六 */}
          <div className="box123">
            <input type="checkbox" />
            <img className="cartpic" src="/img/product/crime.jpg" alt="" />
            <div className="pnumber">
              <p>商品編號:123456</p>
            </div>
            <div className="pname">
              <p>遊戲名稱:犯人在跳舞</p>
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

          {/* 結帳 */}
          <div className="total">
            <p>總金額:$</p>
            <div className="totalprice">
              <p>5432</p>
            </div>
            <Button className="buttoncheck" variant="primary">
              確認結帳
            </Button>
            <p className="comebuy">繼續購物</p>
          </div>
        </div>
      </Container>
    </>
  );
}

export default Cart;
