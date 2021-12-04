import { React, useState } from "react";
import { Container, Button, Modal } from "react-bootstrap";
import "../../css/product.css";
import { Link, withRouter } from "react-router-dom";
import { typecolor2, typecolor4 } from "../../configs/config";
import Swal from "sweetalert2";

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

  const ToLocalStorage = (value) => {
    const newCart = hot3;
    localStorage.setItem(hot3.product_name, JSON.stringify(newCart));
  };

  return (
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
        <span>售價 : {product_price}元</span>
        <p className="p5">投票數: {product_vote} 票</p>
        <div>
          <div className="iconflex2">
            <a
              key={hot3}
              onClick={() => {
                ToLocalStorage(hot3);
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
              <img className="buy2" src="/img/product/buy.png" alt="" />
            </a>
          </div>
        </div>
      </Container>
    </>
  );
};
export default withRouter(HotGame3);
