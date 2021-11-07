import React, { useState } from "react";
import "../../css/memberProduct.css";
import Sidebar from "../../components/memberSidebar/index";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faChevronRight, faSearch } from "@fortawesome//free-solid-svg-icons";

function MemberProduct(props) {
  return (
    <div className="mt-5">
      <div className="d-flex">
        <div className="ms-4 me-4 sidebarRange">
          <Sidebar />
        </div>
        <div className="rightDetail d-flex flex-column justify-content-start align-items-center">
          <p className="h2 mt-5 bold">桌遊購買</p>
          <form action="" className="d-flex position-relative mt-3">
            <input
              type="text"
              placeholder="請輸入關鍵字(商品名稱、價格、日期)"
              className="form-control proInput"
            />
            <button type="button" className="proButton">
              <FontAwesomeIcon icon={faSearch} />
            </button>
          </form>
          {/* product01 */}
          <div className="object-pro d-flex flex-column align-items-center mt-3 mb-3">
            <div className="d-flex position-relative mt-2">
              <div className="ms-4">
                <img
                  alt=""
                  src="img/memberCenter/boardgame01.png"
                  className="objectImg"
                />
              </div>
              <div className="row ms-5">
                <div className="col-6 h5 bold mb-5">商品名稱　　：夢想人生</div>
                <div className="col-6 h5 bold mb-5">
                  訂單狀態　　：<span className="text-danger">等待取貨</span>
                </div>
                <div className="col-6 h5 bold mb-5">單價　　　　：$350</div>
                <div className="col-6 h5 bold mb-5">數量　　　　：2</div>
                <div className="col-6 h5 bold">訂單成立日期：2021/10/01</div>
                <div className="col-6 h5 bold">共計　　　　：$700</div>
              </div>
              <button className="pro-arrow">
                <FontAwesomeIcon icon={faChevronRight} />
              </button>
            </div>
            <div className="pro-down d-flex flex-column mt-2">
              <div className="ms-5 mt-3">
                <hr className="pro-hr" />
                <p className="h4 bold">運送狀態</p>
              </div>
              <div className="d-flex flex-column align-items-center">
                <div className="row pro-loading pt-3 text-center h5 bold mb-4">
                  <p className="col-6">2021/10/03 01:20:03</p>
                  <p className="col-6">抵達指定門市</p>
                  <p className="col-6">2021/10/01 21:03:56</p>
                  <p className="col-6">商品運送中</p>
                  <p className="col-6">2021/10/01 09:54:11</p>
                  <p className="col-6">訂單已接受</p>
                </div>
                <div className="row ms-5">
                  <div className="col-6 h5 bold mb-5">收件人　　　：王大明</div>
                  <div className="col-6 h5 bold mb-5">
                    連絡電話　　：0912345678
                  </div>
                  <div className="col-12 h5 bold mb-5">
                    收件地址　　：桃園市中壢區中央路300號
                  </div>
                </div>
              </div>
            </div>
          </div>
          {/* product2 */}
          <div className="object-pro d-flex flex-column align-items-center mt-3 mb-3">
            <div className="d-flex position-relative mt-2">
              <div className="ms-4">
                <img
                  alt=""
                  src="img/memberCenter/boardgame01.png"
                  className="objectImg"
                />
              </div>
              <div className="row ms-5">
                <div className="col-6 h5 bold mb-5">商品名稱　　：夢想人生</div>
                <div className="col-6 h5 bold mb-5">
                  訂單狀態　　：<span className="text-danger">等待取貨</span>
                </div>
                <div className="col-6 h5 bold mb-5">單價　　　　：$350</div>
                <div className="col-6 h5 bold mb-5">數量　　　　：2</div>
                <div className="col-6 h5 bold">訂單成立日期：2021/10/01</div>
                <div className="col-6 h5 bold">共計　　　　：$700</div>
              </div>
              <button className="pro-arrow">
                <FontAwesomeIcon icon={faChevronRight} />
              </button>
            </div>
            <div className="pro-down d-flex flex-column mt-2">
              <div className="ms-5 mt-3">
                <hr className="pro-hr" />
                <p className="h4 bold">運送狀態</p>
              </div>
              <div className="d-flex flex-column align-items-center">
                <div className="row pro-loading pt-3 text-center h5 bold mb-4">
                  <p className="col-6">2021/10/03 01:20:03</p>
                  <p className="col-6">抵達指定門市</p>
                  <p className="col-6">2021/10/01 21:03:56</p>
                  <p className="col-6">商品運送中</p>
                  <p className="col-6">2021/10/01 09:54:11</p>
                  <p className="col-6">訂單已接受</p>
                </div>
                <div className="row ms-5">
                  <div className="col-6 h5 bold mb-5">收件人　　　：王大明</div>
                  <div className="col-6 h5 bold mb-5">
                    連絡電話　　：0912345678
                  </div>
                  <div className="col-12 h5 bold mb-5">
                    收件地址　　：桃園市中壢區中央路300號
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default MemberProduct;
