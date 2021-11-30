import "bootstrap/dist/css/bootstrap.min.css";
import "../../css/index.css";
import "../../css/product.css";
import React, { useState } from "react";
import { Link } from "react-router-dom";
import { Container } from "react-bootstrap";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faShoppingCart } from "@fortawesome/free-solid-svg-icons";
import { LABELIMGS } from "../../configs/config";

const Inpro3 = (props) => {
  const {
    product_id,
    product_name,
    product_type,
    product_img,
    product_price,
    product_vote,
  } = props;
  const [hotInex3] = useState({
    product_id,
    product_name,
    product_type,
    product_img,
    product_price,
    product_vote,
  });

  return (
    <>
      <Container>
        <div className="d-flex justify-content-evenly align-items-center inpr03">
          <div>
            <a
              href="#/"
              className="text-dark text-decoration-none text-center fw-bold fs-5"
            >
              <div className="recommendProductBoxM position-relative">
                <div className="rcmpMb">
                  <img className="rcmpMi" alt="" src={product_img} />
                </div>
                <Link
                  to={`/aboutgame/${product_id}`}
                  className="a1"
                  target="_top"
                >
                  <div className="pt-4">{product_name}</div>
                </Link>
                <p className="pt-3">售價 : {product_price}元</p>
                <p className="p_vote">投票數: {product_vote} 票</p>

                <a
                  key={hotInex3}
                  className="text-dark text-decoration-none recommendCartM d-inline-block"
                  onClick={() => {
                    localStorage.setItem(
                      hotInex3.product_name,
                      JSON.stringify(hotInex3)
                    );
                  }}
                  href="#/"
                >
                  <FontAwesomeIcon icon={faShoppingCart} className="me-3" />
                  購買
                </a>

                <a
                  href="#/"
                  className="text-dark text-decoration-none recommendTag d-inline-block pt-1"
                >
                  <img
                    alt=""
                    src={LABELIMGS[product_type]}
                    className="tagImg"
                  />
                  <p className="tagText fs-6 fw-normal">{product_type}</p>
                </a>
              </div>
            </a>
          </div>
        </div>
      </Container>
    </>
  );
};

export default Inpro3;
