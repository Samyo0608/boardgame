import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import { Button, Container } from "react-bootstrap";
import "../../css/aboutgame.css";
import "../../css/product.css";

function Aboutgame(props) {
  return (
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
        <div className="box">
          <p className="p6">島嶼爭霸</p>
          <img
            className="abb"
            src="/product_img/200x200/Cash'n_Gun.jpg"
            alt=""
          />
          <div className="box456">
            <p className="ellipsis3">
              震撼2020年度，史上最佳策略遊戲，經 典IP元素高度還原，影視級畫面
              完美重現維斯特洛歷史風貌。震撼2020年度，史上最佳策略遊戲，經典IP元素高度還原，影視級畫面完美重現維斯特洛歷史風貌。震撼2020年度，史上最佳策略遊戲，經典IP元素高度還原，影視震撼2020年度，史上最佳策略遊戲，經典IP元素高度還原，影視級畫面完美重現維斯特洛歷史風貌。震撼2020年度，史上最佳策略遊戲，經典IP元素高度還原，影視級畫面完美重現維斯特洛歷史風貌。震撼2020年度，史上最佳策略遊戲，經典IP元素高度還原，影視級畫面完美重現維斯特洛歷史風貌。震撼2020年度，史上最佳策略遊戲，經典IP元素高度還原，影視級畫面完美重現維斯特洛歷史風貌。震撼2020年度，史上最佳策略遊戲，經典IP元素高度還原，影視級畫面完美重現維斯特洛歷史風貌。級畫面完美重現維斯特洛歷史風貌。
              豐富的劇情副本，新奇的時代戰爭策略頁遊。抵禦異鬼。探索玩
              法，再現《權力的遊戲》經典畫新奇的時代戰爭策略頁遊。抵禦異鬼。探索玩
              法，再現《權力的遊戲》經典畫新奇的時代戰爭策略頁遊。抵禦異鬼。探索玩
              法，再現《權力的遊戲》經典畫新奇的時代戰爭策略頁遊。抵禦異鬼。探索玩
              法，再現《權力的遊戲》經典畫新奇的時代戰爭策略頁遊。抵禦異鬼。探索玩
              法，再現《權力的遊戲》經典畫新奇的時代戰爭策略頁遊。抵禦異鬼。探索玩
              法，再現《權力的遊戲》經典畫面，延續史詩鉅作。 爭奪君臨。HBO
              官方正版授權。次
            </p>
          </div>
          <p className="pprice">$999</p>
          <a href="#/">
            <img className="favorite4" src="/img/product/favorite.png" alt="" />
          </a>
          <a href="#/">
            <img className="buy4" src="/img/product/buy.png" alt="" />
          </a>
        </div>

        <div
          className="aboutbagd"
          style={{
            backgroundImage: `url(${
              process.env.PUBLIC_URL + "/img/product/BK.png"
            })`,
            width: "1000px",
            height: "650px",
          }}
        ></div>
        <div className="btwidg1 ">
          <Button className="btwidg2">遊戲介紹</Button>
          <Button className="btwidg3">遊戲規格</Button>
          <Button className="btwidg4">退換貨須知</Button>
        </div>
        <div>
          <a href="#/">
            <img className="forum" src="/img/product/forum.png" alt="" />
          </a>
        </div>
      </Container>
    </>
  );
}

export default Aboutgame;
