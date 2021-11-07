import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import { Container } from "react-bootstrap";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faChevronRight,
  faUser,
  faKey,
  faChessBoard,
  faEthernet,
} from "@fortawesome//free-solid-svg-icons";
import "../../css/memberCenter.css";

function MemberCenter(props) {
  return (
    <Container className="d-flex flex-column justify-content-center align-items-center">
      <p className="h2 mt-5 bold">會員中心</p>
      <div className="titleLineBox">
        <img alt="" className="titleLine" src="img/index/line.png" />
      </div>

      {/* 上半部部分 */}
      <div className="orderStatus mt-4">
        <div className="row">
          <div className="col-sm status">
            <p className="bold h3 text-black lineHight">預約中</p>
            <p className="text-danger h2 mt-3 bold">1</p>
          </div>
          <div className="col-sm status active-mem">
            <p className="bold h3 text-black lineHight">訂購中</p>
            <p className="text-danger h2 mt-3 bold">1</p>
          </div>
          <div className="col-sm status">
            <p className="bold h3 text-black lineHight">點數</p>
            <p className="text-main h2 mt-3 bold">78</p>
          </div>
        </div>
        <div className="objectDiv">
          <div className="object d-flex justify-content-around align-items-center">
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
            <button className="arrow">
              <FontAwesomeIcon icon={faChevronRight} />
            </button>
          </div>
        </div>
      </div>
      {/* 選取到顯示的內容(預約、訂購、點數) */}
      <div className="memberLinkDiv mt-4 mb-4 d-flex flex-column justify-content-around align-items-center">
        <p className="h2 text-main bold">個人資料</p>
        <div className="row memberLink">
          <div className="col bold h3 memberLinkHeight">
            <a href="#/">
              <FontAwesomeIcon icon={faUser} className="me-1" />
              基本資料
            </a>
          </div>
          <div className="col bold h3 memberLinkHeight">
            <a href="#/">
              <FontAwesomeIcon icon={faKey} className="me-1" />
              密碼修改
            </a>
          </div>
        </div>
        <p className="h2 text-main bold">消費紀錄</p>
        <div className="row memberLink">
          <div className="col bold h3 memberLinkHeight">
            <a href="#/">
              <FontAwesomeIcon icon={faChessBoard} className="me-1" />
              桌遊購買
            </a>
          </div>
          <div className="col bold h3 memberLinkHeight">
            <a href="#/">
              <FontAwesomeIcon icon={faEthernet} className="me-1" />
              場地租賃
            </a>
          </div>
        </div>
        <p className="h2 text-main bold">點數明細</p>
        <div className="row memberLink">
          <div className="col bold h3 memberLinkHeight">
            <a
              href="#/"
              className="d-flex align-items-center justify-content-center"
            >
              <div className="me-1 bold point point-mem">P</div>
              <div>點數明細</div>
            </a>
          </div>
          <div className="col bold h3 memberLinkHeight"></div>
        </div>
      </div>
    </Container>
  );
}
export default MemberCenter;
