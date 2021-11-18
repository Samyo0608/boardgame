import React from "react";
import { Col, Row } from "react-bootstrap";
// import PropTypes from "prop-types";
import "../../css/product.css";

const Game = (props) => {
  const { product_name, product_type, product_img, product_price } = props;
  return (
    <>
      <Row className="shadowbox4">
        <Col>
          <img className="pic" src={product_img} alt="" />
          <div>
            <p className="type">{product_type}</p>
          </div>
          <div>
            <a className="a1" href="#/">
              <p className="gamename">{product_name}</p>
            </a>
          </div>
          <br></br>
          <span>${product_price}</span>
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
