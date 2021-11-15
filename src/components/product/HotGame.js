import React from "react";
import { Container } from "react-bootstrap";
// import PropTypes from "prop-types";
import "../../css/product.css";

function HotGame(props) {
  const {
    product_name,
    product_type,
    product_img,
    product_price,
    product_content,
  } = props;

  return (
    <>
      {/* 第一名遊戲 */}
      <Container className="shadowbox">
        <p className="p1">{product_name}</p>
        <div>
          <img className="abc" src={product_img} alt="" />
          <div className="type1">
            <p>{product_type}</p>
          </div>
        </div>
        <div className="p2">
          <a className="a1" href="http://localhost:3000/aboutgame/">
            <p className="ellipsis">{product_content}</p>
          </a>
        </div>
        <span>${product_price}</span>
        <p className="p8">投票數:</p>
        <div className="favorbox">
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
}

export default HotGame;
