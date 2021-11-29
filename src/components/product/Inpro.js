import "bootstrap/dist/css/bootstrap.min.css";
import "../../css/index.css";
import "../../css/product.css";
import React, { useState } from "react";
import { Link } from "react-router-dom";
import { Container } from "react-bootstrap";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faShoppingCart } from "@fortawesome/free-solid-svg-icons";
import { LABELIMGS } from "../../configs/config";

const Inpro = (props) => {
  const { product_id, product_name, product_type, product_img, product_price } =
    props;
  const [hotInex1] = useState({
    product_id,
    product_name,
    product_type,
    product_img,
    product_price,
  });

  return (
    <>
      <Container>
        <div className="d-flex justify-content-evenly align-items-center">
          <div>
            <a
              href="#/"
              className="text-dark text-decoration-none text-center inpr01"
            >
              <div className="recommendProductBox position-relative">
                <div className="rcmpB">
                  <img className="rcmpI" alt="" src={product_img} />
                </div>
                <Link to={`/aboutgame/${product_id}`} className="a1">
                  <div className="pt-3">{product_name}</div>
                </Link>
                <p>售價 : {product_price}元</p>

                <a
                  key={hotInex1}
                  className="text-dark text-decoration-none recommendCart d-inline-block pt-1"
                  onClick={() => {
                    localStorage.setItem(
                      hotInex1.product_name,
                      JSON.stringify(hotInex1)
                    );
                  }}
                  href="#/"
                >
                  <FontAwesomeIcon icon={faShoppingCart} />
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
                  <p className="tagText">{product_type}</p>
                </a>
              </div>
            </a>
          </div>
        </div>
      </Container>
    </>
  );
};

export default Inpro;
