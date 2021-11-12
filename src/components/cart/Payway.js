import React from "react";
import { Button, Container } from "react-bootstrap";
// import PropTypes from "prop-types";
import "../../css/cart.css";

const Payway = () => {
  return (
    <>
      <Container>
        <div className="box12">
          <p className="payman">訂購人資料</p>
          <p className="payman3">購買人資料</p>
          <div className="payman2">
            <div className="mb-3">
              <label className="form-label">姓名： </label>
              <input
                type="text"
                className="form-control-lg"
                id="name"
                placeholder="姓名"
              />
            </div>

            {/* 電話填寫表格 */}
            <div className="mb-3">
              <label className="form-label">電話： </label>
              <input
                type="text"
                className="form-control-lg"
                id="phone"
                placeholder="電話"
              />
            </div>
            {/* 地址填寫表格 */}
            <div class="mb-3">
              <label class="form-label"> 地址： </label>
              <input
                type="address"
                className="form-control-lg"
                id="address"
                placeholder="地址"
              />
            </div>
          </div>
          <div className="payman4">
            <p className="payman5"> 收貨人資料</p>
            <div className="mb-3">
              <label className="form-label">姓名： </label>
              <input
                type="text"
                className="form-control-lg"
                id="name"
                placeholder="姓名"
              />
            </div>

            {/* 電話填寫表格 */}
            <div className="mb-3">
              <label className="form-label">電話： </label>
              <input
                type="text"
                className="form-control-lg"
                id="phone"
                placeholder="電話"
              />
            </div>
            {/* 地址填寫表格 */}
            <div class="mb-3">
              <label class="form-label"> 地址： </label>
              <input
                type="address"
                className="form-control-lg"
                id="address"
                placeholder="地址"
              />
            </div>
          </div>
        </div>
      </Container>
    </>
  );
};

export default Payway;
