import React from "react";
// import PropTypes from "prop-types";
import "bootstrap/dist/css/bootstrap.min.css";
import { Button, Container } from "react-bootstrap";
import "../../css/product.css";
import Game from "../../components/product/Game";
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
          {/* 第一名遊戲 */}
          <div className="shadowbox">
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
                <img
                  className="favorite"
                  src="/img/product/favorite.png"
                  alt=""
                />
              </a>
              <a href="#/">
                <img className="buy" src="/img/product/buy.png" alt="" />
              </a>
            </div>
          </div>
          {/* 第二名 */}
          <div className="posi">
            <p className="p1">島嶼爭霸</p>
            <div>
              <img className="abcd" src="/img/product/game1.jpg" alt="" />
              <div className="type2">
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
                <img
                  className="favorite2"
                  src="/img/product/favorite.png"
                  alt=""
                />
              </a>
              <a href="#/">
                <img className="buy2" src="/img/product/buy.png" alt="" />
              </a>
            </div>
          </div>

          {/* 第三名 */}
          <div className="posi2">
            <p className="p1">島嶼爭霸</p>
            <div>
              <img className="abcde" src="/img/product/game1.jpg" alt="" />
              <div className="type3">
                <p>策略</p>
              </div>
            </div>{" "}
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
                <img
                  className="favorite2"
                  src="/img/product/favorite.png"
                  alt=""
                />
              </a>
              <a href="#/">
                <img className="buy2" src="/img/product/buy.png" alt="" />
              </a>
            </div>
          </div>

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
