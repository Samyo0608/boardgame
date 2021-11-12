import React from "react";
// import PropTypes from "prop-types";
import "bootstrap/dist/css/bootstrap.min.css";
import { Button, Container } from "react-bootstrap";
import "../../css/product.css";
import Game from "../../components/product/Game";
import HotGame from "../../components/product/HotGame";
import HotGame2 from "../../components/product/HotGame2";
import HotGame3 from "../../components/product/HotGame3";
// import { useState } from "react";
// import Productlis from "../Productlist.json";

function Product(props) {
  return (
    <>
      <>
        <Container>
          <h2 className="text-center">產品頁面</h2>
          <div className="titleLineBox">
            <img alt="" className="titleLine" src="img/index/line.png" />
          </div>
          <ul className="d-flex  justify-content-evenly list-unstyled py-0 my-2">
            <li>
              <a className="gametype" href="#/">
                全部
              </a>
            </li>
            <li>
              <a className="gametype" href="#/">
                策略
              </a>
            </li>
            <li>
              <a className="gametype" href="#/">
                卡牌
              </a>
            </li>
            <li>
              <a className="gametype" href="#/">
                家庭
              </a>
            </li>
          </ul>
          <div className="hr"></div>
          <HotGame />
          <HotGame2 />
          <HotGame3 />
          {/* 排序紐 */}
          <div className="buttooon0">
            <Button className="button123">價格排序</Button>
            <Button className="button1234">最高</Button>
            <Button className="button12345">最低</Button>
          </div>
          <Game />
        </Container>
      </>
    </>
  );
}

export default Product;
