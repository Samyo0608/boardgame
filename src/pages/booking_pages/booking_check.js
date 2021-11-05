// 場地訂購確認
import "bootstrap/dist/css/bootstrap.min.css";
import "../../css/booking_check.css";
import React, { useState } from "react";
import Calendar from "react-calendar";
import "react-calendar/dist/Calendar.css";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

function BookingCheck() {
  //   時間套件
  const [value, setValue] = useState(new Date());
  //   表單欄位統一尺寸
  const formStyle = {
    width: "400px",
    height: "70px",
    margin: "5px",
  };
  //   照片輪播套件
  var settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
  };
  return (
    <>
      {/* 場地訂購 */}
      <h2 className="text-center">場地訂購</h2>
      <div className="titleLineBox">
        <img alt="" className="titleLine" src="img/index/line.png" />
      </div>

      <div className="siteCheck">
        {/* 場地租借日曆 */}
        <div className="calendarCheck">
          <Calendar onChange={setValue} value={value} />
        </div>
        {/* 場地租借照片 */}
        <div className="siteImg">
          <Slider {...settings}>
            <div>
              <img alt="" className="" src="img/booking/siteIndex-3.jpg" />
            </div>
            <div>
              <img alt="" className="" src="img/booking/siteIndex-4.jpg" />
            </div>
          </Slider>
        </div>
      </div>

      {/* 訂購確認表單 */}
      <h2 className="text-center">訂購確認</h2>
      <div className="titleLineBox">
        <img alt="" className="titleLine" src="img/index/line.png" />
      </div>
      <div className="subCheck">
        {/* 房型下拉選單 */}
        <div className="mb-3">
          <label className="form-label">房型： </label>
          <select
            className="form-control-lg"
            style={formStyle}
            id="room"
            name="room"
          >
            <option selected>房型...</option>
            <option value="fourRoom">四人房</option>
            <option value="sixRoom">六人房</option>
          </select>
        </div>
        {/* 姓名填寫表格 */}
        <div className="mb-3">
          <label className="form-label">姓名： </label>
          <input
            type="text"
            className="form-control-lg"
            style={formStyle}
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
            style={formStyle}
            id="phone"
            placeholder="電話"
          />
        </div>
        {/* 信箱填寫表格 */}
        <div class="mb-3">
          <label class="form-label"> 信箱： </label>
          <input
            type="email"
            className="form-control-lg"
            style={formStyle}
            id="email"
            placeholder="name@example.com"
          />
        </div>
        {/* 時間選取欄位 */}
        <div class="mb-3">
          <label class="form-label">時間： </label>
          <input
            type="date"
            className="form-control-lg"
            style={formStyle}
            id="date"
            name="date"
          ></input>
        </div>
        {/* 訂購確認按鈕 */}
        <button className="btn siteBookCheck" href="/#">
          訂購確認
        </button>
      </div>
    </>
  );
}

export default BookingCheck;
