import React from "react";
import { Container } from "react-bootstrap";
// import PropTypes from "prop-types";
import "../../css/product.css";

const HotGame2 = (props) => {
  const {
    product_name,
    product_type,
    product_img,
    product_price,
    product_content,
  } = props;
  return (
    <>
      {/* 第二名 */}
      <Container className="posi">
        <p className="p1">{product_name}</p>
        <div>
          <img className="abcd" src={product_img} alt="" />
          <div className="type2">
            <p>{product_type}</p>
          </div>
        </div>
        <div className="p3">
          <a className="a1" href="#/">
            <p className="ellipsis">{product_content}</p>
          </a>
        </div>
        <span>${product_price}</span>
        <p className="p5">投票數:</p>
        <div className="iconflex2">
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

export default HotGame2;
