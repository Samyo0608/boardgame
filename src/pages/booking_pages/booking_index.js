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
          <p>以上收費單位以人數計算</p>
          <button className="btn btn-info" href="/#">
            場地租借
          </button>
        </div>
      </div>
      {/*四人房*/}
      <div className="fourRoom">
        {/*四人房照片*/}
        <img alt="" className="fourRoomImg" src="img/booking/fourRoom.png" />
        {/* 四人房-文字介紹 */}
        <div className="fourRoomText">
          <h5>【四人包廂】</h5>
          <p>適合人數：6人</p>
          <h5>【收費方式】</h5>
          <p>❮ 平日 ❯</p>
          <p>一小時：$150元，整日：$250元</p>
          <p>❮ 假日 ❯</p>
          <p>一小時：$200元，整日：$300元</p>
          <p>以上收費單位以人數計算</p>
          <button className="btn btn-info" href="/#">
            場地租借
          </button>
        </div>
      </div>

      {/* 場地租借 */}
      <div className="site"></div>
      <h2 className="text-center">場地租借</h2>
      <div className="titleLineBox">
        <img alt="" className="titleLine" src="img/index/line.png" />
      </div>
      {/* 場地租借按鈕 */}
      <div className="siteButton">
        <button className="btn btn-info siteButton6" href="/#">
          六人房
        </button>
        <button className="btn btn-info siteButton4" href="/#">
          四人房
        </button>
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
    </>
  );
};

export default booking_index;
