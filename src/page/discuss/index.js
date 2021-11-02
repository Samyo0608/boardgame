import "bootstrap/dist/css/bootstrap.min.css";
import "../../css/index.css";
import React from "react";

const index = () => {
  return (
    <>
      {/* banner */}
      <div className="bannerBox">
        <img className="banner" src="img/index/banner.jpg" alt="" />
      </div>
      {/* 公告 */}
      <div className="news d-inline-block mt-5">
        <div className="d-flex align-items-center px-5">
          <img alt="" className="loud" src="img/index/loud.png" />
          <div className="loudContent">2021年10月營業時間異動</div>
        </div>
      </div>

      {/* 推薦桌遊標題+插圖 */}
      <h2 className="text-center">推薦桌遊</h2>
      <div className="titleLineBox">
        <img alt="" className="titleLine" src="img/index/line.png" />
      </div>
      <div className="commendPicBox">
        <img alt="" className="commendPic" src="/img/index/commend.png" />
      </div>

      {/* 推薦桌遊 */}
      {/* <div className="recommendBox"></div> */}
    </>
  );
};

export default index;
