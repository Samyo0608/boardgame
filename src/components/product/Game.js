import React from "react";
import { Col, Row } from "react-bootstrap";
// import PropTypes from "prop-types";
import "../../css/product.css";

const Game = () => {
  return (
    <>
      {/* 一 */}
      <Row className="shadowbox4">
        <Col>
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
        </Col>
      </Row>
    </>
  );
};

export default Game;
