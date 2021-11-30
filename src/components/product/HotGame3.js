import { React, useState } from "react";
import { Container } from "react-bootstrap";
// import PropTypes from "prop-types";
import "../../css/product.css";
import { Link } from "react-router-dom";
import { typecolor2, typecolor4 } from "../../configs/config";

const HotGame3 = (props) => {
  const {
    product_id,
    product_name,
    product_type,
    product_img,
    product_price,
    product_content,
    product_vote,
  } = props;
  const [hot3] = useState({
    product_id,
    product_name,
    product_type,
    product_img,
    product_price,
  });

  return (
    <>
      {/* 第三名 */}
      <Container className="posi2">
        <article className={typecolor4[product_type]}>{product_name}</article>
        <div>
          <img className="abcde" src={product_img} alt="" />
          <article className={typecolor2[product_type]}>{product_type}</article>
        </div>
        <div className="p3">
          <Link to={`/aboutgame/${product_id}`} className="a1" target="_top">
            <div className="ellipsis2">{product_content}</div>
          </Link>
        </div>
        <span className="price3">${product_price}</span>
        <p className="p5">投票數: {product_vote} 票</p>
        <div>
          <div className="iconflex2">
            <a href="#/">
              <img
                className="favorite2"
                src="/img/product/favorite.png"
                alt=""
              />
            </a>
            <a
              key={hot3}
              onClick={() => {
                localStorage.setItem(hot3.product_name, JSON.stringify(hot3));
              }}
              href="#/"
            >
              <img className="buy2" src="/img/product/buy.png" alt="" />
            </a>
          </div>
        </div>
      </Container>
    </>
  );
};

export default HotGame3;
