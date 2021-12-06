import React, { useState, useEffect } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import { Container } from "react-bootstrap";
import { Link, useParams } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import MemProductItem from "../../components/memProductItem/memProductItem";
import MemberRentItem from "../../components/memberRent/memberRentItem";
import {
  faUser,
  faKey,
  faChessBoard,
  faEthernet,
  faCommentDots,
} from "@fortawesome//free-solid-svg-icons";
import "../../css/memberCenter.css";
import axios from "axios";
import { API_URL } from "../../configs/config";
import Loading from "../../components/loading/loading";
import moment from "moment";

function MemberCenter(props) {
  const history = useParams().account;
  const [isLoading, setIsLoading] = useState(true);
  const [status, setStatus] = useState(2);
  const [member, setMember] = useState({});
  // 接收order
  const [order, setOrder] = useState([]);
  const [product, setProduct] = useState([]);
  const [booking, setBooking] = useState([]);

  // 撈取產品資料
  useEffect((e) => {
    async function product() {
      let product = await axios
        .get(`${API_URL}/cart/`, {
          withCredentials: true,
        })
        .then((res) => {
          setProduct(res.data);
        });
    }
    product();
  }, []);

  // 抓取member資料
  useEffect(() => {
    async function getMemberData() {
      await axios
        .get(`${API_URL}/cart/${history}`, {
          withCredentials: true,
        })
        .then((res) => {
          setTimeout(() => {
            setIsLoading(false);
          }, 3000);
          setMember(res.data[0]);
        });
    }
    getMemberData();
  }, []);

  // 撈取產品訂單(product_order)資料，且只要非訂單完成的部分
  useEffect((e) => {
    async function order() {
      await axios
        .get(`${API_URL}/member/productOrder/${history}`, {
          withCredentials: true,
        })
        .then((res) => {
          let newOrder2 = res.data.filter((x) => x.order_check < 3);
          setOrder(newOrder2);
        });
    }
    order();
  }, []);

  // 撈取租賃訂單(product_order)資料，且只要非訂單完成的部分
  useEffect((e) => {
    async function booking() {
      await axios
        .get(`${API_URL}/booking/rent`, {
          withCredentials: true,
        })
        .then((res) => {
          let newbooking = res.data.filter((x) => x.valid === 1);
          setBooking(newbooking);
        });
    }
    booking();
  }, []);

  booking &&
    booking
      .filter((match) => !match.repeatExecute)
      .forEach((item) => {
        if (item.room === "fourRoom") {
          item.room = "四人房";
          item.roomImg = "/img/booking/fourRoom-1.png";
          item.price = "150";
        } else if (item.room === "sixRoom") {
          item.room = "六人房";
          item.roomImg = "/img/booking/sixRoom.jpg";
          item.price = "200";
        }

        // console.log(item.endTime);
        item.roomId = item.booking_id;
        item.type = item.room;
        item.userStatus = item.status;
        item.costStatus = "未付款";
        item.predate = moment(item.startTime).format("YYYY-MM-DD HH:mm");
        item.rentDate = moment(item.order_date).format("YYYY-MM-DD");
        item.roomValid = item.valid;
      });

  // 上方狀態欄
  const List = [
    {
      id: 1,
      status: "預約中",
      count: booking.length,
    },
    {
      id: 2,
      status: "訂購中",
      count: order.length,
    },
    {
      id: 3,
      status: "點數",
      count: member.point,
    },
  ];

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
          className={`d-flex flex-column justify-content-start align-items-center objectDiv pt-3 pb-4 ${
            status === 2 ? "d-block" : "d-none"
          }`}
        >
          {order.map((v, i) => {
            return (
              <MemProductItem
                product={product}
                key={order[i].product}
                detail={order[i]}
                isLoading={isLoading}
                setIsLoading={setIsLoading}
              />
            );
          })}
        </div>
        <div
          className={`d-flex justify-content-center objectDiv pt-3 pb-4 ${
            status === 1 ? "d-block" : "d-none"
          }`}
        >
          {booking.map((v, i) => {
            return (
              <MemberRentItem
                roomId={v.booking_id}
                key={i}
                roomImg={v.roomImg}
                type={v.type}
                userStatus={v.userStatus}
                price={v.price}
                costStatus={v.costStatus}
                predate={v.predate}
                rentDate={v.rentDate}
                roomValid={v.valid}
              />
            );
          })}
        </div>
        <div
          className={`d-flex justify-content-center objectDiv pt-3 pb-4 ${
            status === 3 ? "d-block" : "d-none"
          }`}
        >
          <div className="d-flex justify-content-center pointDiv mt-3">
            <div className="d-flex justify-content-center align-items-center ms-3">
              <div className="me-1 bold point point-mem h4">P</div>
              <span className="h1 text-main me-5 bold">{member.point}</span>
            </div>
          </div>
        </div>
      </div>
      {/* 選取到顯示的內容(預約、訂購、點數) */}
      <div className="memberLinkDiv mt-4 mb-4 d-flex flex-column justify-content-around align-items-center">
        <p className="h2 text-main bold">個人資料</p>
        <div className="row memberLink">
          <div className="col bold h3 memberLinkHeight">
            <Link to={`/memberCenter${member.account}/memSelf`}>
              <FontAwesomeIcon icon={faUser} className="me-1" />
              基本資料
            </Link>
          </div>
          <div className="col bold h3 memberLinkHeight">
            <Link to={`/memberCenter${member.account}/rePassword`}>
              <FontAwesomeIcon icon={faKey} className="me-1" />
              密碼修改
            </Link>
          </div>
        </div>
        <p className="h2 text-main bold">消費紀錄</p>
        <div className="row memberLink">
          <div className="col bold h3 memberLinkHeight">
            <Link to={`/memberCenter${member.account}/memberProduct`}>
              <FontAwesomeIcon icon={faChessBoard} className="me-1" />
              桌遊購買
            </Link>
          </div>
          <div className="col bold h3 memberLinkHeight">
            <Link to={`/memberCenter${member.account}/memberRent`}>
              <FontAwesomeIcon icon={faEthernet} className="me-1" />
              場地租賃
            </Link>
          </div>
        </div>
        <p className="h2 text-main bold">點數明細</p>
        <div className="row memberLink">
          <div className="col bold h3 memberLinkHeight">
            <Link
              to={`/memberCenter${member.account}/memberPoint`}
              className="d-flex align-items-center justify-content-center"
            >
              <div className="me-1 bold point point-mem">P</div>
              <div>點數明細</div>
            </Link>
          </div>
          <div className="col bold h3 memberLinkHeight">
            <Link to={`/memberCenter${member.account}/memberDiscuss`}>
              <FontAwesomeIcon icon={faCommentDots} className="me-1" />
              收藏文章
            </Link>
          </div>
        </div>
      </div>
    </Container>
  );
}
export default MemberCenter;
