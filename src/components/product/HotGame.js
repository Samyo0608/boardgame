import { React, useState } from "react";
import { Container } from "react-bootstrap";
// import PropTypes from "prop-types";
import "../../css/product.css";
import { Link } from "react-router-dom";
import { typecolor, typecolor4 } from "../../configs/config";

function HotGame(props) {
  const {
    product_id,
    product_name,
    product_type,
    product_img,
    product_price,
    product_content,
    product_vote,
  } = props;

  const [hot1] = useState({
    product_id,
    product_name,
    product_type,
    product_img,
    product_price,
  });

  // const insertCountPro = (hot1) => {
  //   let state = [];
  //   for (let i = 0; i < hot1.length; i++) {
  //     state.push({ ...hot1[i], count: 1 });
  //   }
  //   return state;
  // };

  return (
    <>
      {/* 第一名遊戲 */}
      <Container className="shadowbox">
        <article className={typecolor4[product_type]}>{product_name}</article>

        <div>
          <img className="abc" src={product_img} alt="" />
          <article className={typecolor[product_type]}>{product_type}</article>
        </div>

        <div className="p2">
          <Link to={`/aboutgame/${product_id}`} className="a1" target="_top">
            <div className="ellipsis">{product_content}</div>
          </Link>
        </div>
        <span>${product_price}</span>
        <p className="p8">投票數: {product_vote} 票</p>
        <div className="favorbox">
          <a href="#/">
            <img className="favorite" src="/img/product/favorite.png" alt="" />
          </a>
          <a
            key={hot1}
            className="buy"
            onClick={() => {
              localStorage.setItem(hot1.product_name, JSON.stringify(hot1));
            }}
            href="#/"
          >
            <img src="/img/product/buy.png" alt="" />
          </a>
        </div>
      </Container>
    </>
  );
}

export default HotGame;
