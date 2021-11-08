import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import { Button, Container } from "react-bootstrap";
import "../../css/product.css";

function Product(props) {
  return (
    <>
      <>
        <Container>
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
            <img className="abc" src="/img/product/game1.jpg" alt="" />
            <a className="a1" href="http://localhost:3000/#/aboutgame/">
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
            {/* 第二名 */}
            <div className="posi">
              <div className="shadowbox3">
                <p className="p1">島嶼爭霸</p>
                <img className="abcd" src="/img/product/game1.jpg" alt="" />
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
            </div>
            {/* 第三名 */}
            <div className="posi2">
              <div className="shadowbox3">
                <p className="p1">島嶼爭霸</p>
                <img className="abcde" src="/img/product/game1.jpg" alt="" />
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
            </div>
          </div>
          {/* 排序紐 */}
          <div className="button0">
            <Button>價格排序</Button>
            <Button>最高</Button>
            <Button>最低</Button>
          </div>
          {/* 一 */}
          <div className="boxflex">
            {/* 第一個遊戲 */}
            <div className="shadowbox4">
              <img className="pic" src="/img/product/crime.jpg" alt="" />
              <div>
                <p className="type">策略</p>
              </div>
              <div>
                <a className="a1" href="#/">
                  <p className="gamename">犯人在跳舞</p>
                </a>
              </div>
              <br></br>
              <span>$999</span>
              <div className="iconflex">
                <a href="#/">
                  <img
                    className="favorite3"
                    src="/img/product/favorite2.png"
                    alt=""
                  />
                </a>
                <a href="#/">
                  <img className="buy3" src="/img/product/buy2.png" alt="" />
                </a>
              </div>
            </div>
            {/* 第二個遊戲 */}
            <div className="shadowbox4">
              <img className="pic" src="/img/product/crime.jpg" alt="" />
              <div>
                <p className="type">策略</p>
              </div>
              <div>
                <a className="a1" href="#/">
                  <p className="gamename">犯人在跳舞</p>
                </a>
              </div>
              <br></br>
              <span>$999</span>
              <div className="iconflex">
                <a href="#/">
                  <img
                    className="favorite3"
                    src="/img/product/favorite2.png"
                    alt=""
                  />
                </a>
                <a href="#/">
                  <img className="buy3" src="/img/product/buy2.png" alt="" />
                </a>
              </div>
            </div>
            {/* 第三個遊戲 */}
            <div className="shadowbox4">
              <img className="pic" src="/img/product/crime.jpg" alt="" />
              <div>
                <p className="type">策略</p>
              </div>
              <div>
                <a className="a1" href="#/">
                  <p className="gamename">犯人在跳舞</p>
                </a>{" "}
              </div>
              <br></br>
              <span>$999</span>
              <div className="iconflex">
                <a href="#/">
                  <img
                    className="favorite3"
                    src="/img/product/favorite2.png"
                    alt=""
                  />
                </a>
                <a href="#/">
                  <img className="buy3" src="/img/product/buy2.png" alt="" />
                </a>
              </div>
            </div>
            {/* 第四個遊戲 */}
            <div className="shadowbox4">
              <img className="pic" src="/img/product/crime.jpg" alt="" />
              <div>
                <p className="type">策略</p>
              </div>
              <div>
                <a className="a1" href="#/">
                  <p className="gamename">犯人在跳舞</p>
                </a>{" "}
              </div>
              <br></br>
              <span>$999</span>
              <div className="iconflex">
                <a href="#/">
                  <img
                    className="favorite3"
                    src="/img/product/favorite2.png"
                    alt=""
                  />
                </a>
                <a href="#/">
                  <img className="buy3" src="/img/product/buy2.png" alt="" />
                </a>
              </div>
            </div>
            {/* 第五個遊戲 */}
            <div className="shadowbox4">
              <img className="pic" src="/img/product/crime.jpg" alt="" />
              <div>
                <p className="type">策略</p>
              </div>
              <div>
                <a className="a1" href="#/">
                  <p className="gamename">犯人在跳舞</p>
                </a>{" "}
              </div>
              <br></br>
              <span>$999</span>
              <div className="iconflex">
                <a href="#/">
                  <img
                    className="favorite3"
                    src="/img/product/favorite2.png"
                    alt=""
                  />
                </a>
                <a href="#/">
                  <img className="buy3" src="/img/product/buy2.png" alt="" />
                </a>
              </div>
            </div>
            {/* 第六個遊戲 */}
            <div className="shadowbox4">
              <img className="pic" src="/img/product/crime.jpg" alt="" />
              <div>
                <p className="type">策略</p>
              </div>
              <div>
                <a className="a1" href="#/">
                  <p className="gamename">犯人在跳舞</p>
                </a>{" "}
              </div>
              <br></br>
              <span>$999</span>
              <div className="iconflex">
                <a href="#/">
                  <img
                    className="favorite3"
                    src="/img/product/favorite2.png"
                    alt=""
                  />
                </a>
                <a href="#/">
                  <img className="buy3" src="/img/product/buy2.png" alt="" />
                </a>
              </div>
            </div>
          </div>
        </Container>
      </>
    </>
  );
}

export default Product;
