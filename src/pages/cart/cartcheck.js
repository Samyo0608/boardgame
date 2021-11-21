import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import { Button, Container } from "react-bootstrap";
import "../../css/cart.css";
import Cart3 from "../../components/cart/Cart3";
import Payway from "../../components/cart/Payway";
import Payway0 from "../../components/cart/Payway0";
import Payway2 from "../../components/cart/Payway2";
import Payway1 from "../../components/cart/Payway1";

function Cartcheck(props) {
  return (
    <>
      <Container>
        <h2 className="text-center">購物車</h2>
        <div className="titleLineBox">
          <img alt="" className="titleLine" src="img/index/line.png" />
        </div>
        <Button className="button2" variant="outline-secondary">
          全部刪除
        </Button>
        <Button className="button3" variant="primary">
          全部選取
        </Button>
        <p className="payman11">訂購商品</p>
        {/* 訂購單 */}
        <Payway0 />
        {/* 訂購方法 */}
        <Payway />
        <Payway2 />
        <Payway1 />
        {/* 確認結帳 */}

        <Cart3 />
      </Container>
    </>
  );
}

export default Cartcheck;
