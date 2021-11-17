import { useState } from "react";
import "../../css/instant_QA.css";
import InstantQADialogBox from "./instant_qa_dialog_box";

const CS_NAME = "遊戲職人客服";
const USER_NAME = "使用者";

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
        options: [
          "1.款項未入帳",
          "2.收到的商品有問題怎麼辦",
          "3.未收到商品",
          "4.如何退換貨",
          "退換貨",
          "發票",
        ],
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

const INTENT_MAP = {
  greeting: {
    regexes: [/(你好)|(嗨)|(哈囉)/],
    replies: [
      {
        type: "text",
        payload: "哈囉",
      },
    ],
  },
};
const DEFAULT_NO_REPLIES = [
  {
    type: "text",
    payload: "我不清楚您的問題",
  },
];

const InstantQAPage = () => {
  const [dialogHistory, setDialogHistory] = useState(DEFAULT_HISTORY);
  const [utteranceText, setUtteranceText] = useState("");
  const sendUtterance = (event) => {
    if (event.key === "Enter") {
      let replies = [];
      for (const [intentName, intentContent] of Object.entries(INTENT_MAP)) {
        for (let regex of intentContent.regexes) {
          if (regex.test(utteranceText)) {
            replies = intentContent.replies;
            break;
          }
        }
        if (replies.length > 0) {
          break;
        }
      }
      if (replies.length == 0) {
        replies = DEFAULT_NO_REPLIES;
      }
      dialogHistory.push({
        sender: USER_NAME,
        isCustomer: true,
        dateTime: Date.now(),
        items: [
          {
            type: "text",
            payload: utteranceText,
          },
        ],
      });
      dialogHistory.push({
        sender: CS_NAME,
        isCustomer: false,
        dateTime: Date.now(),
        items: replies,
      });
      setDialogHistory(dialogHistory);
      setUtteranceText("");
    }
  };
  return (
    <div className="container justify-content-center flex-column">
      {/* header */}
      {/* title */}
      <div class="title_frame">
        <h3 class="title">即時問答</h3>
        <img
          src="/img/customer_service/dice.png"
          class="instant_QA_dice"
          alt=""
        />
      </div>
      {/* 外框背景 */}
      <div class="outer">
        {/* 內文內框 */}
        <div class="inner">
          {/* 放大字型 */}
          <span id="enlarge_font_size">
            <img
              src="/img/customer_service/enlarge-smallsize.png"
              class="enlarge"
              alt=""
            />
          </span>
          {/* 對話框 */}

          {dialogHistory.map((item) => (
            <InstantQADialogBox message={item}></InstantQADialogBox>
          ))}
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
              onInput={(e) => setUtteranceText(e.target.value)}
              onKeyDown={sendUtterance}
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
