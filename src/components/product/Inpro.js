import "bootstrap/dist/css/bootstrap.min.css";
import "../../css/index.css";
import "../../css/product.css";
import React, { useState } from "react";
import { Link, withRouter } from "react-router-dom";
import { Container, Button, Modal } from "react-bootstrap";
import { LABELIMGS } from "../../configs/config";
import Swal from "sweetalert2";

const Inpro = (props) => {
  const {
    product_id,
    product_name,
    product_type,
    product_img,
    product_price,
    product_vote,
  } = props;
  const [hotInex1] = useState({
    product_id,
    product_name,
    product_type,
    product_img,
    product_price,
    product_vote,
  });

  const ToLocalStorage = (value) => {
    const newCart = hotInex1;
    localStorage.setItem(hotInex1.product_name, JSON.stringify(newCart));
  };
  const [sessionMember] = useState({
    id: "",
  });

  return (
    <>
      <Container>
        <div className="d-flex justify-content-evenly align-items-center">
          <div className="text-dark text-decoration-none text-center inpr01">
            <div className="recommendProductBox position-relative">
              <div className="rcmpB">
                <img
                  className="rcmpI"
                  alt=""
                  src={`/product_img/550x400/${product_img}`}
                />
              </div>
              <Link
                to={`/aboutgame/${product_id}`}
                className="a1"
                target="_top"
              >
                <div className="pt-2">{product_name}</div>
              </Link>

              <img alt="" className="inproflag" src="/img/product/lion.png" />

              <p className="pppice">售價 : {product_price}元</p>
              <p className="pvote">{product_vote}票</p>

              <a
                key={hotInex1}
                onClick={() => {
                  ToLocalStorage(hotInex1);
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
                <img className="indexbuy " src="/img/product/buy2.png" alt="" />
              </a>
              <a
                href="#/"
                className="text-dark text-decoration-none recommendTag d-inline-block pt-1"
              >
                <img alt="" src={LABELIMGS[product_type]} className="tagImg" />
                <p className="tagText">{product_type}</p>
              </a>
            </div>
          </div>
        </div>
      </Container>
    </>
  );
};
export default withRouter(Inpro);
