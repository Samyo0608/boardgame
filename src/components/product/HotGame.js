import React from "react";
import { Container } from "react-bootstrap";
// import PropTypes from "prop-types";
import "../../css/product.css";

const HotGame = () => {
  return (
    <>
      {/* 第一名遊戲 */}
      <Container className="shadowbox">
        <p className="p1">島嶼爭霸</p>
        <div>
          <img className="abc" src="/img/product/game1.jpg" alt="" />
          <div className="type1">
            <p>策略</p>
          </div>
        </div>
        <a className="a1" href="http://localhost:3000/aboutgame/">
          <p className="p2">
            在群島爭霸中，我們可妥善運用神明賜予的力量，還有
            神獸來扭轉戰局，精美的插圖與符合神話故事中的能力，使
            群島爭霸非常有在玩希臘神話遊戲
          </p>
        </a>
        <span>$999</span>
        <div>
          <p className="p5">投票數:</p>
          <a href="#/">
            <img className="favorite" src="/img/product/favorite.png" alt="" />
          </a>
          <a href="#/">
            <img className="buy" src="/img/product/buy.png" alt="" />
          </a>
        </div>
      </Container>
    </>
  );
};

export default HotGame;
