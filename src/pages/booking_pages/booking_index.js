// 場地租賃
import "bootstrap/dist/css/bootstrap.min.css";
import "../../css/booking.css";
import React, { useState, useRef } from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import FullCalendar from "@fullcalendar/react"; // must go before plugins
import dayGridPlugin from "@fullcalendar/daygrid"; // a plugin!
import timeGridPlugin from "@fullcalendar/timegrid";
import "@fullcalendar/daygrid/main.css";
import "@fullcalendar/timegrid/main.css";

// 測試資料
const parsing = [
  { room: "", date: "", time: "" },
  {
    title: "四人房",
    start: "2021-11-10T09:00:00",
    end: "2021-11-10T12:00:00",
  },
  {
    title: "六人房",
    start: "2021-11-12T13:00:00",
    end: "2021-11-12T17:00:00",
  },
  {
    title: "四人房",
    start: "2021-11-09",
    end: "",
  },
];
function Booking() {
  // 日曆套件

  // 使用物件值作為狀態值,儲存所有欄位
  const [fields, setFields] = useState({
    room: "",
    name: "",
    phone: "",
    email: "",
    date: "",
    time: "",
  });
  // 儲存欄位錯誤訊息
  const [fieldErrors, setFieldErrors] = useState({
    room: "",
    name: "",
    phone: "",
    email: "",
    date: "",
    time: "",
  });

  // 專門處理每個欄位輸入用
  const handleFieldChange = (e) => {
    console.log(e.target.name, e.target.value, e.target.value);

    const name = e.target.name;
    const value = e.target.value;

    // 預設值為輸入值

    // 1.從原本的狀態物件上拷貝出一個新物件
    // 2.在拷貝的新物件上處理
    // "合併"原有物件值的語法
    const updatedFields = { ...fields, [name]: value };
    // 3.設定回狀態
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

    // 3.設定回錯誤訊息狀態
    setFieldErrors(updatedFieldErrors);
  };

  // 這段函式是為了跟錯誤訊息搭配用
  // 當整個表單有更動時會觸發
  // 認定使用者正在輸入某個欄位(更正某個有錯誤的欄位)
  // 清空某個欄位錯誤訊息
  const handleFormChange = (e) => {
    const updatedFieldErrors = {
      ...fieldErrors,
      [e.target.name]: "",
    };

    // 3. 設定回錯誤訊息狀態
    setFieldErrors(updatedFieldErrors);
  };

  // 表單送出觸發事件
  const handleSubmit = (e) => {
    // 要先阻擋form的預設送出行為
    e.preventDefault();

    // 使用onSubmit時,可用FormData獲取各欄位的值(另一種得到表單值的方式)
    // 注意:FormData是要用各欄位的name屬性
    const formData = new FormData(e.target);
    console.log(formData.get("room"));
    console.log(formData.get("name"));
    console.log(formData.get("phone"));
    console.log(formData.get("email"));
    console.log(formData.get("date"));
    console.log(formData.get("time"));
    // 做客製化驗證

    // 驗證成功,用fetch或ajax送到伺服器
  };

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
        <div className="calendar">
          <FullCalendar
            defaultView="dayGridMonth"
            plugins={[dayGridPlugin, timeGridPlugin]} // 載入外掛
            locale="zh-tw"
            buttonText={{
              today: "今天",
              month: "月",
              week: "周",
              day: "天",
            }}
            allDayText="全天"
            firstDay={1} // /周一至周六為1～6，周日為0
            events={parsing}
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
        >
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
              type="text"
              name="phone"
              value={fields.phone}
              onChange={handleFieldChange}
              required
            />
            {/* 錯誤訊息 */}
            {fieldErrors.phone !== "" && (
              <div className="error">{fieldErrors.phone}</div>
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
          {/* 日期選取欄位 */}
          <div class="formStyle">
            <label class="form-label">日期： </label>
            <input
              type="date"
              className="form-control-lg"
              style={formStyle}
              name="date"
              value={fields.date}
              onChange={handleFieldChange}
              required
            ></input>
            {/* 錯誤訊息 */}
            {fieldErrors.date !== "" && (
              <div className="error">{fieldErrors.date}</div>
            )}
          </div>
          {/* 時段選取欄位 */}
          <div className="formStyle">
            <label className="form-label">時段： </label>
            <select
              className="form-control-lg"
              style={formStyle}
              name="time"
              value={fields.time}
              onChange={handleFieldChange}
              required
            >
              <option value="">時段...</option>
              <option value="morning">上午(09:00-12:00)</option>
              <option value="afternoon">下午(13:00-15:00)</option>
            </select>
            {/* 錯誤訊息 */}
            {fieldErrors.time !== "" && (
              <div className="error">{fieldErrors.time}</div>
            )}
          </div>
          <img alt="" className="Meeple" src="img/booking/Meeple.png" />

          {/* 訂購確認按鈕 */}
          <button type="submit" className="btn siteBookCheck">
            訂購確認
          </button>
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
      <div>
        <img alt="" className="diceImg" src="img/booking/dice.png"></img>
      </div>
    </>
  );
}

export default Booking;
