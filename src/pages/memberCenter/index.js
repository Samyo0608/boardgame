import React, { useState, useEffect } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import { Container } from "react-bootstrap";
import { Link } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import MemProductItem from "../../components/memProductItem/memProductItem";
import MemberRentItem from "../../components/memberRent/memberRentItem";
import {
  faUser,
  faKey,
  faChessBoard,
  faEthernet,
} from "@fortawesome//free-solid-svg-icons";
import "../../css/memberCenter.css";
import axios from "axios";
import { API_URL } from "../../configs/config";

// 假資料
const Detail = [
  {
    image: "/img/memberCenter/boardgame01.png",
    proName: "夢想人生",
    status: "等待取貨",
    price: "350",
    count: "2",
    date: "2021/10/01",
    total: "700",
    endDate: "2021/10/03 01:20:03",
    tracDate: "2021/10/01 21:03:56",
    startDate: "2021/10/01 09:54:11",
    userName: "王大明",
    userPhone: "0912345678",
    address: "桃園市中壢區中央路300號",
  },
];

const DetailRent = [
  {
    roomImg: "/img/booking/fourRoom-1.png",
    type: "四人房",
    userStatus: "尚未報到",
    price: "150",
    costStatus: "已付款",
    predate: "2021/10/10下午(13:00-17:00)",
    rentDate: "2021/10/01",
  },
];

// 上方狀態欄
const List = [
  {
    id: 1,
    status: "預約中",
    count: 1,
  },
  {
    id: 2,
    status: "訂購中",
    count: 1,
  },
  {
    id: 3,
    status: "點數",
    count: 50,
  },
];

function MemberCenter(props) {
  const [status, setStatus] = useState(2);
  const [sessionMember, setSessionMember] = useState({
    id: "",
    email: "",
    account: "",
    point: "",
  });
  useEffect((e) => {
    async function session() {
      try {
        let memberSession = await axios.get(`${API_URL}/session/member`, {
          withCredentials: true,
        });
        setSessionMember(memberSession.data);
      } catch (e) {
        alert("獲取資料失敗");
      }
    }
    session();
  }, []);

  return (
    <Container className="d-flex flex-column justify-content-center align-items-center">
      <p className="h2 mt-5 bold">會員中心</p>
      <div className="titleLineBox">
        <img alt="" className="titleLine" src="img/index/line.png" />
      </div>
      {/* 上半部部分 */}
      <div className="orderStatus mt-4">
        <div className="d-flex">
          {List.map((v, i) => {
            return (
              <div
                key={v.id}
                className={`col-4 status ${
                  status === v.id ? "active-mem" : ""
                }`}
                onMouseEnter={(e) => {
                  setStatus(v.id);
                }}
              >
                <p className="bold h3 text-black lineHight">{v.status}</p>
                <p className="text-danger h2 mt-3 bold">{v.count}</p>
              </div>
            );
          })}
        </div>
        <div
          className={`d-flex justify-content-center objectDiv pt-3 pb-4 ${
            status === 2 ? "d-block" : "d-none"
          }`}
        >
          <MemProductItem
            productImg={Detail[0].image}
            productName={Detail[0].proName}
            productStatus={Detail[0].status}
            productPrice={Detail[0].price}
            productCount={Detail[0].count}
            orderDate={Detail[0].date}
            productTotal={Detail[0].total}
            getDate={Detail[0].getDate}
            trafTimeEnd={Detail[0].endDate}
            trafTimeIng={Detail[0].tracDate}
            trafTimeStart={Detail[0].startDate}
            userName={Detail[0].userName}
            userPhone={Detail[0].userPhone}
            userAddress={Detail[0].address}
          />
        </div>
        <div
          className={`d-flex justify-content-center objectDiv pt-3 pb-4 ${
            status === 1 ? "d-block" : "d-none"
          }`}
        >
          <MemberRentItem
            roomImg={DetailRent[0].roomImg}
            type={DetailRent[0].type}
            userStatus={DetailRent[0].userStatus}
            price={DetailRent[0].price}
            costStatus={DetailRent[0].costStatus}
            predate={DetailRent[0].predate}
            rentDate={DetailRent[0].rentDate}
          />
        </div>
        <div
          className={`d-flex justify-content-center objectDiv pt-3 pb-4 ${
            status === 3 ? "d-block" : "d-none"
          }`}
        >
          <div className="d-flex justify-content-center pointDiv">
            <div className="d-flex justify-content-center align-items-center ms-3">
              <div className="me-1 bold point point-mem h4">P</div>
              <span className="h1 text-main me-5 bold">
                {sessionMember.point}
              </span>
            </div>
          </div>
        </div>
      </div>
      {/* 選取到顯示的內容(預約、訂購、點數) */}
      <div className="memberLinkDiv mt-4 mb-4 d-flex flex-column justify-content-around align-items-center">
        <p className="h2 text-main bold">個人資料</p>
        <div className="row memberLink">
          <div className="col bold h3 memberLinkHeight">
            <Link to={`/memberCenter${sessionMember.account}/memSelf`}>
              <FontAwesomeIcon icon={faUser} className="me-1" />
              基本資料
            </Link>
          </div>
          <div className="col bold h3 memberLinkHeight">
            <Link to={`/memberCenter${sessionMember.account}/rePassword`}>
              <FontAwesomeIcon icon={faKey} className="me-1" />
              密碼修改
            </Link>
          </div>
        </div>
        <p className="h2 text-main bold">消費紀錄</p>
        <div className="row memberLink">
          <div className="col bold h3 memberLinkHeight">
            <Link to={`/memberCenter${sessionMember.account}/memberProduct`}>
              <FontAwesomeIcon icon={faChessBoard} className="me-1" />
              桌遊購買
            </Link>
          </div>
          <div className="col bold h3 memberLinkHeight">
            <Link to={`/memberCenter${sessionMember.account}/memberRent`}>
              <FontAwesomeIcon icon={faEthernet} className="me-1" />
              場地租賃
            </Link>
          </div>
        </div>
        <p className="h2 text-main bold">點數明細</p>
        <div className="row memberLink">
          <div className="col bold h3 memberLinkHeight">
            <Link
              to={`/memberCenter${sessionMember.account}/memberPoint`}
              className="d-flex align-items-center justify-content-center"
            >
              <div className="me-1 bold point point-mem">P</div>
              <div>點數明細</div>
            </Link>
          </div>
          <div className="col bold h3 memberLinkHeight"></div>
        </div>
      </div>
    </Container>
  );
}
export default MemberCenter;
