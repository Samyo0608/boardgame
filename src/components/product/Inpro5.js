import "bootstrap/dist/css/bootstrap.min.css";
import "../../css/index.css";
import "../../css/product.css";
import React, { useState } from "react";
import { Link, withRouter } from "react-router-dom";
import { Container, Button, Modal } from "react-bootstrap";
import { LABELIMGS } from "../../configs/config";

const Inpro5 = (props) => {
  const {
    product_id,
    product_name,
    product_type,
    product_img,
    product_price,
    product_vote,
  } = props;
  const [hotInex5] = useState({
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
    const newCart = hotInex5;
    localStorage.setItem(hotInex5.product_name, JSON.stringify(newCart));
    // 設定資料
    handleShow();
  };

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
  const [sessionMember] = useState({
    id: "",
  });
  const display = (
    <>
      <Container>
        <div className="d-flex justify-content-evenly align-items-center inpr05">
          <div>
            <a href="#/" className="text-dark text-decoration-none text-center">
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

                <img alt="" className="inproflag2" src="/img/product/pig.png" />

                <p className="pppice">售價 : {product_price}元</p>
                <p className="pvote">{product_vote}票</p>
                <a
                  key={hotInex5}
                  onClick={() => {
                    ToLocalStorage(hotInex5);
                  }}
                  href="#/"
                >
                  <img
                    className="indexbuy "
                    src="/img/product/buy2.png"
                    alt=""
                  />{" "}
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
  return (
    <>
      {messageModal}
      {display}
    </>
  );
};
export default withRouter(Inpro5);
