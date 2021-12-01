import { React, useState } from "react";
import { Container, Button, Modal } from "react-bootstrap";
import "../../css/product.css";
import { Link, withRouter } from "react-router-dom";
import { typecolor2, typecolor4 } from "../../configs/config";

const HotGame3 = (props) => {
  const {
    product_id,
    product_name,
    product_type,
    product_img,
    product_price,
    product_content,
    product_vote,
  } = props;
  const [hot3] = useState({
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
    const Cart = localStorage.getItem("") || [];
    const newCart = hot3;
    localStorage.setItem(hot3.product_name, JSON.stringify(newCart));
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
        <Button variant="secondary" onClick={handleClose}>
          繼續購物
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
      {/* 第三名 */}
      <Container className="posi2">
        <article className={typecolor4[product_type]}>{product_name}</article>
        <div>
          <img
            className="abcde"
            src={`/product_img/550x400/${product_img}`}
            alt=""
          />
          <article className={typecolor2[product_type]}>{product_type}</article>
        </div>
        <div className="p3">
          <Link to={`/aboutgame/${product_id}`} className="a1" target="_top">
            <div className="ellipsis2">{product_content}</div>
          </Link>
        </div>
        <span className="price3">${product_price}</span>
        <p className="p5">投票數: {product_vote} 票</p>
        <div>
          <div className="iconflex2">
            <a href="#/">
              <img
                className="favorite2"
                src="/img/product/favorite.png"
                alt=""
              />
            </a>
            <a
              key={hot3}
              onClick={() => {
                ToLocalStorage(hot3);
              }}
              href="#/"
            >
              <img className="buy2" src="/img/product/buy.png" alt="" />
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
export default withRouter(HotGame3);
