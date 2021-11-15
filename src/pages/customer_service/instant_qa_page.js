import { useState } from "react";
import "../../css/instant_QA.css";
import InstantQADialogBox from "./instant_qa_dialog_box";

const CS_NAME = "遊戲職人客服"

const DEFAULT_HISTORY = [
  {
    sender: CS_NAME,
    isCustomer: false,
    dateTime: new Date(),
    items: [
      {
        type: "text",
        payload: "哈摟~有甚麼地方能為您服務呢?",
      },
    ],
  },
  {
    sender: CS_NAME,
    isCustomer: false,
    dateTime: Date.now(),
    items: [
      {
        type: "list",
        title: "常見問題",
        options: ["購物","會員","配送","取貨","退換貨","發票"],
      },
    ],
  },
  {
    sender: CS_NAME,
    isCustomer: false,
    dateTime: Date.now(),
    items: [
      {
        type: "text",
        payload: "請輸入您的問題~?",
      },
    ],
  },
];

const InstantQAPage = () => {
  const [dialogHistory, setDialogHistory] = useState(DEFAULT_HISTORY);
  return (
    <div className="container justify-content-center flex-column">
      {/* header */}
      {/* title */}
      <h3 class="title">即時問答</h3>
      <img src="/img/customer_service/small_dice.png" class="dice" alt="" />
      {/* 外框背景 */}
      <div class="outer">
        {/* 內文內框 */}
        <div class="inner">
          {/* 放大字型 */}
          {/* 對話框 */}

          {dialogHistory.map((item) => (
            <InstantQADialogBox message={item}></InstantQADialogBox>
          ))}
          <div class="dialog_box">
            {/* 對話時間 (1)*/}
            <span class="conversation_time_1">遊戲職人客服 11:40</span>

            {/* 專員對話框 */}
            <div class="commissioner_dialog ">
              <img
                src="/img/customer_service/Commissioner_avatar.png"
                class="Commissioner_avatar hack_start"
                alt=""
              />
              {/* 專員答覆 (1)*/}
              <span class="commissioner_answer_text">
                哈摟~有甚麼地方能為您服務呢?
              </span>
            </div>
          </div>

          <div class="dialog_box">
            {/* 對話時間 */}
            <span class="conversation_time">遊戲職人客服 11:40</span>
            {/* 專員對話框 */}
            <div class="commissioner_dialog">
              <img
                src="/img/customer_service/Commissioner_avatar.png"
                class="Commissioner_avatar"
                alt=""
              />
              {/* 問題框架 */}
              <div class="question_frame">
                {/* 問題清單 */}
                <p>常見問題</p>
                <ul class="questions_list">
                  <li>
                    <a href="">購物</a>
                  </li>
                  <li>
                    <a href="">會員</a>
                  </li>
                  <li>
                    <a href="">配送取貨</a>
                  </li>
                  <li>
                    <a href="">退換貨</a>
                  </li>
                  <li>
                    <a href="">發票</a>
                  </li>
                </ul>
                <div class="shopping_problem">
                  <ul>
                    <li>
                      <a href="">1.款項未入帳</a>
                    </li>
                    <li>
                      <a href="">2.收到的商品有問題怎麼辦</a>
                    </li>
                    <li>
                      <a href="">3.未收到商品</a>
                    </li>
                    <li>
                      <a href="">4.如何退換貨</a>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </div>

          {/* 對話框 */}
          <div class="dialog_box">
            {/* 對話時間 */}
            <span class="conversation_time">遊戲職人客服 11:50</span>

            {/* 專員對話框 */}
            <div class="commissioner_dialog ">
              <img
                src="/img/customer_service/Commissioner_avatar.png"
                class="Commissioner_avatar hack_start"
                alt=""
              />
              <span class="commissioner_answer">請輸入您的問題~</span>
            </div>
          </div>

          {/* 顧客對話 */}
          {/* 對話框 */}
          <div class="customer_dialog_box">
            {/* 顧客對話時間 */}
            <span class="customer_conversation_time">11:52</span>

            {/* 顧客對話框 */}
            <div class="customer_dialog ">
              <span class="customer_answer">商品到貨時間?</span>
              <img
                src="/img/customer_service/customer_avatar.png"
                class="customer_avatar"
                alt=""
              />
            </div>
          </div>
        </div>
        {/* 輸入問題外框*/}
        <div class="input_question_outer">
          {/* 輸入問題框*/}
          <div class="input_question">
            <input
              id="input"
              class="input_content"
              type="search"
              autocomplete="off"
              spellcheck="false"
              aria-live="polite"
              placeholder="輸入關鍵字查詢"
            />
            <img src="/img/customer_service/sent.png" class="sent_img" alt="" />
          </div>

          {/* 自動搜尋問題外框*/}
          <div class="automatic_search_outer">
            {/* 自動搜尋問題列表 */}
            <div class="automatic_search">
              <ul class="adjustment_ul">
                <li>1.賣家防騙指南</li>
                <li>2.如何取消交易</li>
                <li>3.商品有效期</li>
                <li>4.未收到商品</li>
                <li>5.打包商品</li>
                <li>6.系統提示商品已下架</li>
              </ul>
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
export default InstantQAPage;
