import { React, useState } from "react";
import { Col, Row, Button, Modal } from "react-bootstrap";
import "../../css/product.css";
import { typecolor3 } from "../../configs/config";
import { Link, withRouter } from "react-router-dom";
import Swal from "sweetalert2";

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
  const [sessionMember] = useState({
    id: "",
  });

  const ToLocalStorage = (value) => {
    const newCart = id;
    localStorage.setItem(id.product_name, JSON.stringify(newCart));
  };

  return (
    <>
      <Row className="shadowbox4">
        <Col>
          <img
            className="pic"
            src={`/product_img/550x400/${product_img}`}
            alt=""
          />
          <div>
            <article className={typecolor3[product_type]}>
              {product_type}
            </article>
          </div>
          <Link to={`/aboutgame/${product_id}`} className="a1" target="_top">
            <div className="gamename">{product_name}</div>
          </Link>
          <br></br>

          <span>售價 : {product_price}元</span>
          <div className="iconflex">
            <a
              key={id}
              className="buy3"
              onClick={() => {
                ToLocalStorage(id);
                Swal.fire({
                  icon: "success",
                  title: `${product_name}`,
                  text: "已加入購物車",
                  footer: `<a href="Cart${sessionMember}" class="btn btn-light">
                      前往購物車
                    </a>`,
                });
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

export default withRouter(Game);
