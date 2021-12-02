import { React, useState } from "react";
import { Container, Button, Modal } from "react-bootstrap";
import "../../css/product.css";
import { Link, withRouter } from "react-router-dom";
import { typecolor, typecolor4 } from "../../configs/config";

function HotGame(props) {
  const {
    product_id,
    product_name,
    product_type,
    product_img,
    product_price,
    product_content,
    product_vote,
  } = props;
  console.log(product_img);
  const [hot1] = useState({
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
    const newCart = hot1;
    localStorage.setItem(hot1.product_name, JSON.stringify(newCart));
    // 設定資料

    handleShow();
  };

  const messageModal = (
    <Modal show={show} onHide={handleClose} backdrop="static" keyboard={false}>
      <Modal.Header closeButton>
        <Modal.Title>這是購物車訊息</Modal.Title>
      </Modal.Header>
      <Modal.Body>
        產品：<span className="redone">{product_name}</span> 已成功加入購物車!
      </Modal.Body>
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
      {/* 第一名遊戲 */}
      <Container className="shadowbox">
        <article className={typecolor4[product_type]}>{product_name}</article>

        <div>
          <img
            className="abc"
            src={`/product_img/550x400/${product_img}`}
            alt=""
          />
          <article className={typecolor[product_type]}>{product_type}</article>
        </div>

        <div className="p2">
          <Link to={`/aboutgame/${product_id}`} className="a1" target="_top">
            <div className="ellipsis">{product_content}</div>
          </Link>
        </div>
        <span>售價 : {product_price}元</span>
        <p className="p8">投票數: {product_vote} 票</p>
        <div className="favorbox">
          <a
            key={hot1}
            className="buy"
            onClick={() => {
              ToLocalStorage(hot1);
            }}
            href="#/"
          >
            <img src="/img/product/buy.png" alt="" />
          </a>
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
}
export default withRouter(HotGame);
