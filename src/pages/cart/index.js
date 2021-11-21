import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import { Button } from "react-bootstrap";
import { Link } from "react-router-dom";
// import "../../css/cart.css";
import Cart1 from "../../components/cart/Cart1";
function Cart(props) {
  return (
    <>
      {/* 頂端 */}
      <div className="cartWidth">
        <div>
          <h2 className="text-center mt-3 bold">購物車</h2>
          <div className="titleLineBox">
            <img alt="" className="titleLine" src="img/index/line.png" />
          </div>
        </div>
        <div className="d-flex justify-content-start">
          <Button className="me-3" variant="outline-primary">
            全部選取
          </Button>
          <Button className="" variant="outline-secondary">
            刪除
          </Button>
        </div>
        <div className="mt-3 payman11 text-center">
          <span>購 物 清 單</span>
        </div>
        {/* 頂端 end*/}

        {/* container cart1 component*/}
        <div className="CartListBG d-flex flex-column justify-content-start align-items-center">
          <Cart1 />
        </div>

        {/* footer */}
        <div className="d-flex justify-content-between mt-3 mb-3 align-items-center">
          <Link to="/cartcheck">
            <Button className="buttoncheck" variant="secondary">
              回首頁
            </Button>
          </Link>
          <div className="d-flex justify-content-center align-items-center total ms-5">
            <span className="bold me-1 ms-5">共計　</span>
            <span className="text-danger bold">5432　</span>
            <span className="bold">元</span>
          </div>
          <div className="">
            <Link to="/cartcheck">
              <Button className="buttoncheck" variant="success">
                確認訂單
              </Button>
            </Link>
            <Link to="/">
              <button className="btn btn-light comebuy ms-3">繼續購物</button>
            </Link>
          </div>
        </div>
        {/* footer end*/}
      </div>
    </>
  );
}

export default Cart;
