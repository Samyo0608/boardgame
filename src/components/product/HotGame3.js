import React from "react";
import { Container } from "react-bootstrap";
// import PropTypes from "prop-types";
import "../../css/product.css";

const HotGame3 = () => {
  return (
    <>
      {/* 第三名 */}
      <Container className="posi2">
        <p className="p1">島嶼爭霸</p>
        <div>
          <img className="abcde" src="/img/product/game1.jpg" alt="" />
          <div className="type3">
            <p>策略</p>
          </div>
        </div>
        <a className="a1" href="#/">
          <p className="p3">
            在群島爭霸中，我們可妥善運用神明賜予的力量，還有
            神獸來扭轉戰局，精美的插圖與符合神話故事中的能力，使
            群島爭霸非常有在玩希臘神話遊戲
          </p>
        </a>
        <span>$999</span>
        <div className="iconflex2">
          <p className="p5">投票數:</p>
          <a href="#/">
            <img className="favorite2" src="/img/product/favorite.png" alt="" />
          </a>
          <a href="#/">
            <img className="buy2" src="/img/product/buy.png" alt="" />
          </a>
        </div>
      </Container>
    </>
  );
};

export default HotGame3;
