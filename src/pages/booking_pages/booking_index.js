// 場地租賃
import "bootstrap/dist/css/bootstrap.min.css";
import "../../css/booking.css";
import React, { useState } from "react";
import Calendar from "react-calendar";
import "react-calendar/dist/Calendar.css";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { render } from "@testing-library/react";

function Booking() {
  // 時間套件
  const [value, setValue] = useState(new Date());
  // 輪播套件
  var settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
  };
  //   表單欄位統一尺寸
  const formStyle = {
    width: "400px",
    height: "70px",
    margin: "5px",
  };
  return (
    <>
      {/* 包廂介紹 */}
      <h2 className="text-center">包廂介紹</h2>
      <div className="titleLineBox">
        <img alt="" className="titleLine" src="img/index/line.png" />
      </div>
      {/*六人房*/}
      <div className="sixRoom">
        {/*六人房照片*/}
        <img alt="" className="sixRoomImg" src="img/booking/sixRoom.jpg" />
        {/* 六人房-文字介紹 */}
        <div className="sixRoomText">
          <h5>【六人包廂】</h5>
          <p>適合人數：6人</p>
          <h5>【收費方式】</h5>
          <p>❮ 平日 ❯</p>
          <p>一小時：$200元，整日：$300元</p>
          <p>❮ 假日 ❯</p>
          <p>一小時：$250元，整日：$350元</p>
          <div className="sixRoomTextLine"></div>
          <p>※以上收費單位以人數計算</p>
        </div>
      </div>
      {/*四人房*/}
      <div className="fourRoom">
        {/*四人房照片*/}
        <img alt="" className="fourRoomImg" src="img/booking/fourRoom-1.png" />
        {/* 四人房-文字介紹 */}
        <div className="fourRoomText">
          <h5>【四人包廂】</h5>
          <p>適合人數：6人</p>
          <h5>【收費方式】</h5>
          <p>❮ 平日 ❯</p>
          <p>一小時：$150元，整日：$250元</p>
          <p>❮ 假日 ❯</p>
          <p>一小時：$200元，整日：$300元</p>
          <div className="fourRoomTextLine"></div>
          <p>※以上收費單位以人數計算</p>
        </div>
      </div>
      {/* 場地租借 */}
      <h2 className="text-center">場地租借</h2>
      <div className="titleLineBox">
        <img alt="" className="titleLine" src="img/index/line.png" />
      </div>
      {/* 場地租借按鈕 */}
      {/* <div className="siteButton">
        <a className="btn siteButton6" href="/#">
          六人房
        </a>
        <button className="btn siteButton4" href="/#">
          四人房
        </button>
      </div> */}

      <div className="site">
        {/* 場地租借日曆 */}
        <div className="calendar">
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
          <img alt="" className="Meeple" src="img/booking/Meeple.png" />
        </div>
        {/* 訂購確認按鈕 */}
        <a className="btn siteBookCheck" href="bookingCheck">
          前往訂購
        </a>
      </div>

      {/* 包廂說明圖+圖片 */}
      <h2 className="text-center">包廂說明</h2>
      <div className="titleLineBox">
        <img alt="" className="titleLine" src="img/index/line.png" />
      </div>
      <div className="bookingIndexBox">
        <img
          alt=""
          className="bookingIndex"
          src="img/booking/roomExplainBg.jpg"
        />
      </div>
      <div>
        <img alt="" className="diceImg" src="img/booking/dice.png"></img>
      </div>
    </>
  );
}

export default Booking;
