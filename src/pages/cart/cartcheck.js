import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import { FloatingLabel, Form } from "react-bootstrap";
import "../../css/cart.css";
import Payway0 from "../../components/cart/Payway0";

function Cartcheck(props) {
  return (
    <div className="cartWidth d-flex flex-column mb-4">
      {/* 上方標題 */}
      <div className="mb-3 mt-3">
        <h2 className="text-center bold">訂單確認</h2>
        <div className="titleLineBox">
          <img alt="" className="titleLine" src="img/index/line.png" />
        </div>
      </div>

      {/* 訂購項目 */}
      <div className="d-flex flex-column justify-content-start align-items-center">
        <div className="mt-3 payman11 text-center">訂 購 項 目</div>
        <div className="d-flex flex-column justify-content-start align-items-center cartCheckBG">
          <Payway0 />
          <div className="total d-flex justify-content-end align-items-center mb-3 py-3">
            <span className="bold me-1 ms-5">共計　</span>
            <span className="text-danger bold">5432　</span>
            <span className="bold me-3">元</span>
          </div>
        </div>
      </div>

      {/* 訂購人資料 */}
      <div className="d-flex flex-column justify-content-start align-items-center">
        <div className="mt-3 payman11 text-center">收 件 人 資 料</div>
        <div className="d-flex flex-column justify-content-start align-items-center cartCheckBG">
          <form className="checkCartForm row mt-4" method="post">
            {/* 第一層 */}
            <FloatingLabel
              controlId="email"
              label="電子信箱"
              className="col-8 mb-3"
            >
              <Form.Control
                type="email"
                placeholder="name@example.com"
                required
              />
            </FloatingLabel>
            <FloatingLabel controlId="user" label="收件人" className="col-4">
              <Form.Control type="text" placeholder="收件人姓名" required />
            </FloatingLabel>
            {/* 第二層 */}
            <FloatingLabel
              controlId="phone"
              label="手機號碼"
              className="col-4 mb-3"
            >
              <Form.Control type="text" required placeholder="09xxxxxxxx" />
            </FloatingLabel>
            <FloatingLabel controlId="user" label="收件地址" className="col-8">
              <Form.Control type="text" placeholder="收件人地址" required />
            </FloatingLabel>
            <div className="d-flex justify-content-between align-items-center mb-4">
              <div className="d-flex align-items-center">
                <input type="checkbox" />
                <label className="bold">同使用者資料(自動帶入資料)</label>
              </div>
              <button className="btn btn-danger">結帳</button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
}

export default Cartcheck;
