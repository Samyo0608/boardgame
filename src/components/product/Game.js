import React from "react";
import { Container } from "react-bootstrap";
// import PropTypes from "prop-types";
import "../../css/product.css";

const Game = () => {
  return (
    <>
      {/* 一 */}
      <Container>
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
                <p className="gamename">犯人在嗨舞</p>
              </a>
            </div>
            <br></br>
            <span>$568</span>
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
                <p className="gamename">犯人在狂舞</p>
              </a>{" "}
            </div>
            <br></br>
            <span>$569</span>
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
                <p className="gamename">犯人在尬舞</p>
              </a>{" "}
            </div>
            <br></br>
            <span>$333</span>
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
                <p className="gamename">犯人在亂舞</p>
              </a>{" "}
            </div>
            <br></br>
            <span>$589</span>
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
                <p className="gamename">犯人在飛舞</p>
              </a>{" "}
            </div>
            <br></br>
            <span>$421</span>
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
  );
};

export default Game;
