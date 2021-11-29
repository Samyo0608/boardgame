import "bootstrap/dist/css/bootstrap.min.css";
import "../../css/index.css";
import "../../css/product.css";
import React, { useState } from "react";
import { Link } from "react-router-dom";
import { Container } from "react-bootstrap";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faShoppingCart } from "@fortawesome/free-solid-svg-icons";
import { LABELIMGS } from "../../configs/config";

const Inpro4 = (props) => {
  const { product_id, product_name, product_type, product_img, product_price } =
    props;
  const [hotInex4] = useState({
    product_id,
    product_name,
    product_type,
    product_img,
    product_price,
  });

  return (
    <>
      <Container>
        <div className="d-flex justify-content-evenly align-items-center inpr04">
          <div>
            <a href="#/" className="text-dark text-decoration-none text-center">
              <div className="recommendProductBox position-relative">
                <div className="rcmpB">
                  <img className="rcmpI" alt="" src={product_img} />
                </div>
                <Link to={`/aboutgame/${product_id}`} className="a1">
                  <div className="pt-3">{product_name}</div>
                </Link>
                <p className="text-center">售價 : {product_price}元</p>
                <a
                  key={hotInex4}
                  className="text-dark text-decoration-none recommendCart d-inline-block pt-1"
                  onClick={() => {
                    localStorage.setItem(
                      hotInex4.product_name,
                      JSON.stringify(hotInex4)
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

export default Inpro4;
