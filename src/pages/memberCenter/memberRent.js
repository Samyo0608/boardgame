import React, { useState, useEffect } from "react";
import Sidebar from "../../components/memberSidebar/index";
/* 沿用memberCenter.css 、 memberProduct.css */
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faSearch } from "@fortawesome//free-solid-svg-icons";
import MemberRentItem from "../../components/memberRent/memberRentItem";
import moment from "moment";
import axios from "axios";
import { API_URL } from "../../configs/config";

// const Detail = [
//   {
//     roomImg: "/img/booking/fourRoom-1.png",
//     type: "四人房",
//     userStatus: "尚未報到",
//     price: "150",
//     costStatus: "已付款",
//     predate: "2021/10/10下午(13:00-17:00)",
//     rentDate: "2021/10/01",
//   },
//   {
//     roomImg: "/img/booking/sixRoom.jpg",
//     type: "六人房",
//     userStatus: "完成報到",
//     price: "200",
//     costStatus: "已付款",
//     predate: "2021/09/20 上午(09:00-12:00)",
//     rentDate: "2021/09/15",
//   },
// ];

function MemberRent(props) {
  const [inputRent, setInputRent] = useState("");

  const [bookingContent, setbookingContent] = useState([]);
  useEffect(async () => {
    let bookingContent = await axios.get(`${API_URL}/booking/rent`, {
      withCredentials: true,
    });
    setbookingContent(bookingContent.data);
  }, []);

  bookingContent &&
    bookingContent
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
        item.roomImg = item.roomImg;
        item.type = item.room;
        item.userStatus = item.status;
        item.price = item.price;
        item.costStatus = "未付款";
        item.predate = moment(item.startTime).format("YYYY-MM-DD HH:mm");
        item.rentDate = moment(item.order_date).format("YYYY-MM-DD");
        item.roomValid = item.valid;
      });

  return (
    <div className="mt-5">
      <div className="d-flex">
        <div className="ms-4 me-4 sidebarRange">
          <Sidebar />
        </div>
        <div className="rightDetail d-flex flex-column justify-content-start align-items-center">
          <p className="h2 mt-5 bold">場地租賃</p>
          <form action="" className="d-flex position-relative mt-3">
            <input
              type="text"
              placeholder="請輸入關鍵字(房型、價格、日期)"
              className="form-control proInput"
              onChange={(e) => {
                setInputRent(e.target.value);
              }}
            />
            <button type="button" className="proButton">
              <FontAwesomeIcon icon={faSearch} />
            </button>
          </form>
          {bookingContent.map((v, i) => {
            const rent = () => {
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
            };
            if (inputRent === "") {
              return rent();
            } else if (
              v.type.includes(inputRent) ||
              v.userStatus.includes(inputRent) ||
              v.costStatus.includes(inputRent) ||
              v.predate.includes(inputRent) ||
              v.price.includes(inputRent)
            ) {
              return rent();
            }
          })}
        </div>
      </div>
    </div>
  );
}

export default MemberRent;
