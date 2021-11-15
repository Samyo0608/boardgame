import React from "react";
import { Container } from "react-bootstrap";
// import PropTypes from "prop-types";
import "../../css/product.css";

const HotGame3 = (props) => {
  const {
    product_name,
    product_type,
    product_img,
    product_price,
    product_content,
  } = props;
  return (
    <>
      {/* 第三名 */}
      <Container className="posi2">
        <p className="p1">{product_name}</p>
        <div>
          <img className="abcde" src={product_img} alt="" />
          <div className="type3">
            <p>{product_type}</p>
          </div>
        </div>
        <div className="p3">
          <a className="a1" href="#/">
            <p className="ellipsis">{product_content}</p>
          </a>
        </div>
        <span className="price3">${product_price}</span>
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

export default HotGame3;
