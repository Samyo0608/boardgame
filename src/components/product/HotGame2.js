import React from "react";
import { Container } from "react-bootstrap";
// import PropTypes from "prop-types";
import "../../css/product.css";
import { NavLink } from "react-router-dom";
import { typecolor2 } from "../../configs/config";

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
          <article className={typecolor2[product_type]}>{product_type}</article>
        </div>

        <div className="p3">
          <NavLink to="/aboutgame/" className="a1">
            <p className="ellipsis2">{product_content}</p>
          </NavLink>
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
