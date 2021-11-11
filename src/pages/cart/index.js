import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import { Button, Container } from "react-bootstrap";
import "../../css/cart.css";
import Cart1 from "../../components/cart/Cart1";
import Cart2 from "../../components/cart/Cart2";
function Cart(props) {
  return (
    <>
      <Container>
        <h2 className="text-center">購物車</h2>
        <div className="titleLineBox">
          <img alt="" className="titleLine" src="img/index/line.png" />
        </div>
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
        <p className="payman11">訂購商品</p>
        <Cart1 />
        {/* 結帳 */}
        <Cart2 />
      </Container>
    </>
  );
}

export default Cart;
