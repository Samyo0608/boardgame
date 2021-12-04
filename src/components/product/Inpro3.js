import "bootstrap/dist/css/bootstrap.min.css";
import "../../css/index.css";
import "../../css/product.css";
import React, { useState } from "react";
import { Link, withRouter } from "react-router-dom";
import { Container, Button, Modal } from "react-bootstrap";
import { LABELIMGS } from "../../configs/config";
import Swal from "sweetalert2";

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

  const ToLocalStorage = (value) => {
    const newCart = hotInex3;
    localStorage.setItem(hotInex3.product_name, JSON.stringify(newCart));
  };
  const [sessionMember] = useState({
    id: "",
  });
  return (
    <>
      <Container>
        <div className="d-flex justify-content-evenly align-items-center inpr03">
          <div className="text-dark text-decoration-none text-center fw-bold fs-5">
            <div className="recommendProductBoxM position-relative">
              <div className="rcmpMb">
                <img
                  className="rcmpMi"
                  alt=""
                  src={`/product_img/550x400/${product_img}`}
                />
              </div>
              <Link
                to={`/aboutgame/${product_id}`}
                className="a1"
                target="_top"
              >
                <div className="pt-4">{product_name}</div>
              </Link>
              <img
                alt=""
                className="inproflag3"
                src="/img/product/forest.png"
              />

              <p className="pt-3">售價 : {product_price}元</p>
              <p className="p_vote">{product_vote} 票</p>
              <img alt="" className="crown" src="/img/product/crown.png" />
              <a
                key={hotInex3}
                onClick={() => {
                  ToLocalStorage(hotInex3);
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
                <img className="indexbuy2 " src="/img/product/buy.png" alt="" />
              </a>

              <a
                href="#/"
                className="text-dark text-decoration-none recommendTag d-inline-block pt-1"
              >
                <img alt="" src={LABELIMGS[product_type]} className="tagImg" />
                <p className="tagText fs-6 fw-normal">{product_type}</p>
              </a>
            </div>
          </div>
        </div>
      </Container>
    </>
  );
};
export default withRouter(Inpro3);
