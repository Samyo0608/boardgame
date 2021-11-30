import { React, useState } from "react";
import { Col, Row } from "react-bootstrap";
import "../../css/product.css";
import { typecolor3 } from "../../configs/config";
import { Link } from "react-router-dom";

function Game(props) {
  const { product_name, product_type, product_img, product_price, product_id } =
    props;
  const [id] = useState({
    product_id,
    product_name,
    product_type,
    product_img,
    product_price,
  });

  return (
    <>
      <Row className="shadowbox4">
        <Col>
          <img className="pic" src={product_img} alt="" />
          <div>
            <article className={typecolor3[product_type]}>
              {product_type}
            </article>
          </div>
          <Link to={`/aboutgame/${product_id}`} className="a1" target="_top">
            <div className="gamename">{product_name}</div>
          </Link>
          <br></br>
          <span>${product_price}</span>
          <div className="iconflex">
            <a
              key={id}
              className="buy3"
              onClick={() => {
                localStorage.setItem(id.product_name, JSON.stringify(id));
              }}
              href="#/"
            >
              <img src="/img/product/buy2.png" alt="" />
            </a>
          </div>
        </Col>
      </Row>
    </>
  );
}

export default Game;
