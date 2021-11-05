import "bootstrap/dist/css/bootstrap.min.css";
import "../../css/instant_QA.css";
import React from "react";
const instantQAPage = () => {
  return (
    <div className="container justify-content-center flex-column">
      {/* header */}
      {/* title */}
      <h3 class="title">即時問答</h3>
      <img src="/img/customer_service/small_dice.png" class="dice" alt="" />
      {/* 內文外框 */}
      <div class="outer">
        {/* 內文內框 */}
        <div class="inner">
          {/* 專員對話框 */}
          <div class="dialog_box">
            <div class="commissioner_dialog ">
              <img
                src="/img/customer_service/Commissioner_avatar.png"
                class="Commissioner_avatar hack_start"
                alt=""
              />
              哈摟~有甚麼地方能為您服務呢?
            </div>
          </div>
          <div class="dialog_box">
            <div class="commissioner_dialog">
              <img
                src="/img/customer_service/Commissioner_avatar.png"
                class="Commissioner_avatar"
                alt=""
              />
              <span class="commissioner_dialog">常見問題</span>
              <span class="commissioner_dialog">常見問題</span>
              <span class="commissioner_dialog">常見問題</span>
              <span class="commissioner_dialog">常見問題</span>
            </div>
          </div>
        </div>
        {/* 底圖 */}
        <img
          src="/img/customer_service/commissioner.png"
          class="commissioner"
          alt=""
        />
      </div>
    </div>
  );
};
export default instantQAPage;
