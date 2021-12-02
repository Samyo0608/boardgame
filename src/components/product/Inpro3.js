import "bootstrap/dist/css/bootstrap.min.css";
import "../../css/index.css";
import "../../css/product.css";
import React, { useState } from "react";
import { Link, withRouter } from "react-router-dom";
import { Container, Button, Modal } from "react-bootstrap";
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
  const [show, setShow] = useState(false);
  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);
  const ToLocalStorage = (value) => {
    const newCart = hotInex3;
    localStorage.setItem(hotInex3.product_name, JSON.stringify(newCart));
    // 設定資料
    handleShow();
  };
  const [sessionMember] = useState({
    id: "",
  });
  const messageModal = (
    <Modal show={show} onHide={handleClose} backdrop="static" keyboard={false}>
      <Modal.Header closeButton>
        <Modal.Title>加入購物車訊息</Modal.Title>
      </Modal.Header>
      <Modal.Body>
        產品：<span className="redone">{product_name}</span> 已成功加入購物車
      </Modal.Body>{" "}
      <Modal.Footer>
        <Modal.Body>一套不夠，我要加碼!!</Modal.Body>
        <Button variant="secondary" onClick={handleClose}>
          繼續選購
        </Button>
        <Button
          variant="primary"
          onClick={() => {
            props.history.push(`/Cart${sessionMember}`);
          }}
        >
          前往購物車結帳
        </Button>
      </Modal.Footer>
    </Modal>
  );

  const display = (
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
                <p className="pt-3">售價 : {product_price}元</p>
                <p className="p_vote">投票數: {product_vote} 票</p>

                <a
                  key={hotInex3}
                  className="text-dark text-decoration-none recommendCartM d-inline-block"
                  onClick={() => {
                    ToLocalStorage(hotInex3);
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
  return (
    <>
      {messageModal}
      {display}
    </>
  );
};
export default withRouter(Inpro3);
