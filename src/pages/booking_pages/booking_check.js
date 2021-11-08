// 場地訂購確認
import "bootstrap/dist/css/bootstrap.min.css";
import "../../css/booking_check.css";
import React from "react";
import "react-calendar/dist/Calendar.css";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

function BookingCheck() {
  return (
    <>
      {/* 訂購確認表單 */}
      <h2 className="text-center">訂購確認</h2>
      <div className="titleLineBox">
        <img alt="" className="titleLine" src="img/index/line.png" />
      </div>
      <div className="doubleCheck">
        <h4>房型： </h4>
        <h4>姓名： </h4>
        <h4>電話： </h4>
        <h4>信箱： </h4>
        <h4>時間： </h4>
        <br />
        <a className="btn siteWrong" href="#/booking">
          資料錯誤
        </a>
        <a className="btn siteDoubleCheck" href="#/">
          資料正確
        </a>
      </div>
    </>
  );
}

export default BookingCheck;
