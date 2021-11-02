// 場地租賃
import "bootstrap/dist/css/bootstrap.min.css";
import "../../css/booking.css";
import React from "react";

const booking_index = () => {
  return (
    <>
      {/* 包廂介紹 */}
      <h2 className="text-center">包廂介紹</h2>
      <div className="titleLineBox">
        <img alt="" className="titleLine" src="img/index/line.png" />
      </div>
      {/* 六人房-文字介紹 */}
      <div className="sixRoom">
        <h5>【六人包廂】</h5>
        <p>適合人數：6人</p>
        <h5>【收費方式】</h5>
        <p>❮ 平日 ❯</p>
        <p>一小時：$200元，整日：$300元</p>
        <p>❮ 假日 ❯</p>
        <p>一小時：$250元，整日：$350元</p>
        <p>以上收費單位以人數計算</p>
      </div>
      {/* 四人房-文字介紹 */}
      <div className="fourRoom">
        <h5>【四人包廂】</h5>
        <p>適合人數：4人</p>
        <h5>【收費方式】</h5>
        <p>❮ 平日 ❯</p>
        <p>一小時：$150元，整日：$250元</p>
        <p>❮ 假日 ❯</p>
        <p>一小時：$200元，整日：$300元</p>
        <p>以上收費單位以人數計算</p>
      </div>
      {/* 場地租借 */}
      <h2 className="text-center">場地租借</h2>
      <div className="titleLineBox">
        <img alt="" className="titleLine" src="img/index/line.png" />
      </div>
      <div>
        <button>六人房</button>
        <button>四人房</button>
      </div>
      {/* 包廂說明+底圖 */}
      <h2 className="text-center">包廂說明</h2>
      <div className="titleLineBox">
        <img alt="" className="titleLine" src="img/index/line.png" />
      </div>
      <div className="roomExplain">
        <div className="roomExplainWord">
          <p>【1】包廂採預約制，訂購包廂即贈飲料暢飲 </p>
          <p>【2】請勿隨意更動插座、擺設等硬體設備</p>
          <p>【3】使用包廂須脫鞋</p>
          <p>【4】勿於包廂內飲用酒精類飲品</p>
          <p>【5】若使地毯、椅墊等汙損需酌收清潔費</p>
          <p>【6】包廂恕不進行遊戲教學服務</p>
        </div>
      </div>
      <div className="roomExplainBg"></div>
      <div className="bookingIndexBox">
        <img alt="" className="bookingIndex" src="/img/booking_index.jpg" />
      </div>
    </>
  );
};

export default booking_index;
