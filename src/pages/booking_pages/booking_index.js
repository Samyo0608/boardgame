// 場地租賃
import "bootstrap/dist/css/bootstrap.min.css";
import "../../css/booking.css";
import React, { useState, useEffect } from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import axios from "axios";
import { API_URL } from "../../configs/config";
import FullCalendar from "@fullcalendar/react";
import dayGridPlugin from "@fullcalendar/daygrid"; // a plugin!
import timeGridPlugin from "@fullcalendar/timegrid";
import "@fullcalendar/daygrid/main.css";
import "@fullcalendar/timegrid/main.css";
import "@fullcalendar/common/main.css";
import "@fullcalendar/core/locales-all.js";
import moment from "moment";
// 動畫
import Dice from "react-dice-roll";

// 按鈕套件
const Swal = require("sweetalert2");

// 讀取資料
function Booking() {
  // 讀取資料庫
  const [bookingContent, setbookingContent] = useState([]);

  useEffect(async () => {
    let bookingContent = await axios.post(`${API_URL}/booking`);
    //${API_URL}/booking = http://localhost:3001/api/booking
    setbookingContent(bookingContent.data);
  }, []);

  // console.log(bookingContent);

  // 日曆套件
  // 轉換JSON至FullCalendar

  bookingContent &&
    bookingContent
      .filter((match) => !match.repeatExecute)
      .forEach((item) => {
        if (item.room === "fourRoom") {
          item.room = "四人房";
        } else if (item.room === "sixRoom") {
          item.room = "六人房";
        }

        console.log(item.endTime);
        item.title = item.room + "已滿";
        item.start = item.startTime;
        item.end = item.endTime;
      });

  // 使用物件值作為狀態值,儲存所有欄位
  const [fields, setFields] = useState({
    room: "",
    name: "",
    phone: "",
    email: "",
    startTime: "",
    endTime: "",
    order_date: "",
  });
  // 儲存欄位錯誤訊息
  const [fieldErrors, setFieldErrors] = useState({
    room: "",
    name: "",
    phone: "",
    email: "",
    startTime: "",
    endTime: "",
  });

  // 專門處理每個欄位輸入用
  const handleFieldChange = (e) => {
    console.log(e.target.name, e.target.value, e.target.value);
    const name = e.target.name;
    const value = e.target.value;
    const updatedFields = { ...fields, [name]: value };
    setFields(updatedFields);
  };

  // 當表單檢查有不合法的訊息時會呼叫
  const handleFormInvalid = (e) => {
    // 阻擋form的預設送出行為(錯誤泡泡訊息)
    e.preventDefault();

    const updatedFieldErrors = {
      ...fieldErrors,
      [e.target.name]: e.target.validationMessage,
    };
    setFieldErrors(updatedFieldErrors);
  };

  // 這段函式是為了跟錯誤訊息搭配用,當整個表單有更動時會觸發
  const handleFormChange = (e) => {
    const updatedFieldErrors = {
      ...fieldErrors,
      [e.target.name]: "",
    };
    setFieldErrors(updatedFieldErrors);
  };

  // 表單送出觸發事件
  async function handleSubmit(e) {
    // 要先阻擋form的預設送出行為
    e.preventDefault();
    // 使用onSubmit時,可用FormData獲取各欄位的值(另一種得到表單值的方式)
    // 注意:FormData是要用各欄位的name屬性
    // 先驗證沒問題後才會呼叫alertCheck跳出視窗確認
    // 驗證成功,用fetch或ajax送到伺服器

    try {
      Swal.fire({
        title: "請問是否確認下訂呢?",
        showDenyButton: true,
        confirmButtonText: "確認",
        denyButtonText: `取消`,
      }).then((result) => {
        if (result.isConfirmed) {
          axios.post(`http://localhost:3001/api/booking/order`, fields, {
            withCredentials: true,
          });
          Swal.fire("感謝您的訂購!", "", "success");
        } else if (result.isDenied) {
          Swal.fire("期待您的下次訂購", "", "info");
        }
      });
    } catch {
      console.log("handleSubmit", e);
    }
  }

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

      <div className="site">
        {/* 場地租借日曆 */}
        <div id="calender" className="calendar">
          <FullCalendar
            defaultView="dayGridMonth"
            plugins={[dayGridPlugin, timeGridPlugin]} // 載入外掛
            locale="zh-tw"
            navLinks={true}
            headerToolbar={{
              left: "prev,next today",
              center: "title",
              right: "dayGridMonth,timeGridWeek,timeGridDay",
            }}
            buttonText={{
              today: "今天",
              month: "月",
              week: "周",
              day: "天",
            }}
            allDayText="全天"
            slotLabelFormat={{
              hour: "2-digit",
              minute: "2-digit",
              meridiem: false,
              hour12: false,
            }}
            eventSources={[bookingContent]}
            displayEventEnd
            eventTimeFormat={{
              hour: "2-digit",
              minute: "2-digit",
              meridiem: false,
              hour12: false,
            }}
          />
        </div>
      </div>

      {/* 訂購確認表單 */}
      <h2 className="text-center">訂購確認</h2>
      <div className="titleLineBox">
        <img alt="" className="titleLine" src="img/index/line.png" />
      </div>
      <div className="subCheck">
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

        {/* 表單開始 */}
        <form
          onSubmit={handleSubmit}
          onInvalid={handleFormInvalid}
          onChange={handleFormChange}
          id="frmCheck"
        >
          <h5 name="order_date" value={fields.order_date}>
            訂單時間：{moment().format("YYYY/MM/DD")}
          </h5>

          {/* 房型下拉選單 */}
          <div className="formStyle">
            <label className="form-label">房型： </label>
            <select
              className="form-control-lg"
              style={formStyle}
              name="room"
              value={fields.room}
              onChange={handleFieldChange}
              required
            >
              <option value="">房型...</option>
              <option value="fourRoom">四人房</option>
              <option value="sixRoom">六人房</option>
            </select>
            {/* 錯誤訊息 */}
            {fieldErrors.room !== "" && (
              <div className="error">{fieldErrors.room}</div>
            )}
          </div>
          {/* 姓名填寫表格 */}
          <div className="formStyle">
            <label className="form-label">姓名： </label>
            <input
              className="form-control-lg"
              style={formStyle}
              placeholder="姓名"
              type="text"
              name="name"
              value={fields.name}
              onChange={handleFieldChange}
              required
            />
            {/* 錯誤訊息 */}
            {fieldErrors.name !== "" && (
              <div className="error">{fieldErrors.name}</div>
            )}
          </div>
          {/* 電話填寫表格 */}
          <div className="formStyle">
            <label className="form-label">電話： </label>
            <input
              className="form-control-lg"
              style={formStyle}
              placeholder="電話"
              type="tel"
              name="phone"
              pattern="^[0-9]*[1-9][0-9]*$"
              minLength="10"
              maxLength="10"
              value={fields.phone}
              onChange={handleFieldChange}
              required
            />
            {/* 錯誤訊息 */}
            {fieldErrors.phone !== "" && (
              <div className="error">請填寫正確的手機號碼</div>
            )}
          </div>
          {/* 信箱填寫表格 */}
          <div class="formStyle">
            <label class="form-label"> 信箱： </label>
            <input
              className="form-control-lg"
              style={formStyle}
              placeholder="name@example.com"
              type="email"
              name="email"
              value={fields.email}
              onChange={handleFieldChange}
              required
            />
            {/* 錯誤訊息 */}
            {fieldErrors.email !== "" && (
              <div className="error">{fieldErrors.email}</div>
            )}
          </div>
          {/* 開始時間選取欄位 */}
          <div class="formStyle">
            <label class="form-label">開始： </label>

            <input
              id="date"
              className="form-control-lg"
              type={"datetime-local"}
              min={new Date().toISOString().slice(0, -8)}
              style={formStyle}
              name="startTime"
              value={fields.startTime}
              onChange={handleFieldChange}
              required
            />
            {/* 錯誤訊息 */}
            {fieldErrors.startTime !== "" && (
              <div className="error">{fieldErrors.startTime}</div>
            )}
          </div>

          {/* 結束時間選取欄位 */}
          <div class="formStyle">
            <label class="form-label">結束： </label>
            <input
              type="datetime-local"
              min={new Date().toISOString().slice(0, -8)}
              className="form-control-lg"
              style={formStyle}
              name="endTime"
              value={fields.endTime}
              onChange={handleFieldChange}
              required
            />
            {/* 錯誤訊息 */}
            {fieldErrors.endTime !== "" && (
              <div className="error">{fieldErrors.endTime}</div>
            )}
          </div>
          <img alt="" className="Meeple" src="img/booking/Meeple.png" />

          {/* 訂購確認按鈕 */}
          <button className="btn siteBookCheck">訂購確認</button>
        </form>
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
      <div className="dice1">
        <Dice size={180} />
      </div>
      <div className="dice2">
        <Dice size={180} />
      </div>

      {/* <img alt="" className="diceImg" src="img/booking/dice.png"></img> */}
    </>
  );
}

export default Booking;
