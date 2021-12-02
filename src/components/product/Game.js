import { React, useState } from "react";
import { Col, Row, Button, Modal } from "react-bootstrap";
import "../../css/product.css";
import { typecolor3 } from "../../configs/config";
import { Link, withRouter } from "react-router-dom";

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
  const [show, setShow] = useState(false);
  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);
  const ToLocalStorage = (value) => {
    const newCart = id;
    localStorage.setItem(id.product_name, JSON.stringify(newCart));
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

  const display = (
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
          <div className="x-3">
            <span>${product_price}</span>
          </div>
          <div className="iconflex">
            <a
              key={id}
              className="buy3"
              onClick={() => {
                ToLocalStorage(id);
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
  return (
    <>
      {messageModal}
      {display}
    </>
  );
}

export default withRouter(Game);
