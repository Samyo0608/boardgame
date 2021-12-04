import { useState, useRef, useEffect } from "react";
import "../../css/instant_QA.css";
import InstantQADialogBox from "./instant_qa_dialog_box";

const CS_NAME = "遊戲職人";
const USER_NAME = "使用者";

const DEFAULT_HISTORY = [
  {
    sender: CS_NAME,
    isCustomer: false,
    dateTime: new Date(),
    items: [
      {
        type: "text",
        payload: "哈摟~有什麼地方能為您服務呢？",
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
        title: "常見問題 :",
        options: [
          <div class="list_fram">
            <img
              src="/img/customer_service/member.png"
              height="130px"
              width="140px"
            />{" "}
            <span class="click_range_title">會員</span>
            <ul class="list_background">
              <li class="click_range_list">忘記密碼</li>
              <li class="click_range_list">點數回饋</li>
              <li class="click_range_list">修改資料</li>
              <li class="click_range_list">聯繫我們</li>
            </ul>
          </div>,
          <div class="list_fram">
            <img
              src="/img/customer_service/shopping.png"
              height="130px"
              width="140px"
            />
            <span class="click_range_title">購物</span>
            <ul class="list_background">
              <li class="click_range_list">查詢訂單</li>
              <li class="click_range_list">取消訂單</li>
              <li class="click_range_list">更改數量</li>
              <li class="click_range_list">付款方式</li>
            </ul>
          </div>,
          <div class="list_fram">
            <img
              src="/img/customer_service/commodity.png"
              height="130px"
              width="140px"
            />
            <span class="click_range_title">商品</span>
            <ul class="list_background">
              <li class="click_range_list">商品瑕疵</li>
              <li class="click_range_list">更換商品</li>
              <li class="click_range_list">開立統編</li>
              <li class="click_range_list">庫存進貨</li>
            </ul>
          </div>,
          <div class="list_fram">
            <img
              src="/img/customer_service/delivery.png"
              height="130px"
              width="140px"
            />{" "}
            <span class="click_range_title">配送取貨</span>
            <ul class="list_background">
              <li class="click_range_list">商品自取</li>
              <li class="click_range_list">配送方式</li>
              <li class="click_range_list">到貨時間</li>
              <li class="click_range_list">未收到貨</li>
            </ul>
          </div>,
          <div class="list_fram">
            <img
              src="/img/customer_service/returned.png"
              height="130px"
              width="140px"
            />{" "}
            <span class="click_range_title">退貨</span>
            <ul class="list_background">
              <li class="click_range_list">退貨規定</li>
              <li class="click_range_list">退貨方式</li>
              <li class="click_range_list">退款時間</li>
              <li class="click_range_list">聯繫我們</li>
            </ul>
          </div>,
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
        payload: "請於輸入您的問題~",
      },
    ],
  },
];
const INTENT_MAP = {
  greeting: {
    regexes: [/(你好)|(嗨)|(哈囉)/, /嗨嗨/],
    replies: [
      {
        type: "text",
        payload: "您好~!我是您的專屬機器人~請告訴我您的問題吧~ ^_^",
      },
    ],
  },
  angry: {
    regexes: [/(生氣)|(廢物)|(垃圾)/, /87/],
    replies: [
      {
        type: "text",
        payload: (
          <div class="robot_answer">
            <span>
              <img src="/img/customer_service/sad.png" alt="" />{" "}
              嗚嗚~被罵了，我會繼續努力學習，讓您覺得我成長了。
            </span>
            <div class="robot_answer_inner">
              需要專人服務，可於
              <a href="/customer_service_message" alt="">
                《客服留言》
              </a>
              留下您的問題，將盡快協助您~服務時間：每日09:00~17:30
            </div>
          </div>
        ),
      },
    ],
  },
  angry2: {
    regexes: [/討厭/],
    replies: [
      {
        type: "text",
        payload: (
          <p class="robot_answer">
            T︵T我最討厭遇到問題無法回答，所以我一直很努力學習新知
          </p>
        ),
      },
    ],
  },
  angry3: {
    regexes: [/沒用/],
    replies: [
      {
        type: "text",
        payload: (
          <div class="robot_answer">
            <span>
              <img src="/img/customer_service/sad.png" alt="" />{" "}
              目前沒有完全符合您提問的答案，建議您換個方式描述或是一次詢問單一問題，或許我就能回答您喔，謝謝~
            </span>
            <div class="robot_answer_inner">
              需要專人服務，可於
              <a href="/customer_service_message" alt="">
                《客服留言》
              </a>
              留下您的問題，將盡快協助您~服務時間：每日09:00~17:30
            </div>
          </div>
        ),
      },
    ],
  },
  broken: {
    regexes: [/(壞掉)/, /(壞)/],
    replies: [
      {
        type: "text",
        payload: <p class="robot_answer">沒有啊，智能客服很正常的！</p>,
      },
    ],
  },
  love: {
    regexes: [/(愛)|(喜歡)|(我愛你)/, /(謝謝)/],
    replies: [
      {
        type: "text",
        payload: (
          <span class="robot_answer">
            <img src="/img/customer_service/care.png" alt="" />
            感謝您的愛護和支持，我會繼續努力的！
          </span>
        ),
      },
    ],
  },
  forgotPassword: {
    regexes: [/忘記密碼/, /密碼忘了/],
    replies: [
      {
        type: "text",
        payload: (
          <p class="robot_answer">
            請您於<a href="/login">「會員登入」</a>頁面點選
            <a href="/login">「忘記密碼」</a>
            ，輸入您註冊的電子郵件地址，系統會自動發送密碼重設通知給您，再請您依照通知步驟重新設定密碼即可。
          </p>
        ),
      },
    ],
  },
  points: {
    regexes: [
      /(點數回饋)|(點數計算)|(點數)/,
      /(點數有效期)|(點數到期)|(點數期限)/,
    ],
    replies: [
      {
        type: "text",
        payload: (
          <div class="robot_answer">
            <ul>
              <li class="robot_answer_list">如何獲得點數？</li>
              於遊戲職人消費50元，可回饋1點紅利點數，小數點以下不列入紅利點數，亦無法累計至下筆訂單合併計算；除此之外，運費亦不列入紅利點數計算。
            </ul>
            <ul>
              <li class="robot_answer_list">紅利點數有使用期限嗎？</li>
              紅利點數沒有使用期限。(紅利點數屬於回饋性質，恕無法折換現金。)
            </ul>
            <ul>
              <li class="robot_answer_list"> 紅利點數何時會生效？</li>
              紅利點數將會於到貨後第7天由系統自動發送至該會員帳戶。例如：若出貨日為01月30日，則02月07日系統會自動發送紅利點數，倘若此期間會員若因故而取消/未完成訂單，系統則不給予紅利點數。
            </ul>
          </div>
        ),
      },
    ],
  },
  member_profile: {
    regexes: [
      /(修改資料)|(會員資料)|(改密碼)/,
      /(個人資料)|(密碼修改)|(密碼)/,
    ],
    replies: [
      {
        type: "text",
        payload: (
          <div class="robot_answer">
         煩請使用「
          <a href="/customer_service_message" class="hover_style" alt="">
            客服留言
          </a>
          」直接與客服中心聯繫。
          
<ul>
              <li class="robot_answer_list"> 電腦版：</li>
          <p>
           請「
            <a href="/login" class="hover_style" alt="">
              <a href="/login" class="hover_style" alt="">
                會員登入
              </a>
            </a>
            」至「個人資料及密碼修改」即可進行變更。
          </p>
          <li class="robot_answer_list"> 手機版/APP：</li>
          <p>
           請「
            <a href="/login" class="hover_style" alt="">
              <a href="/login" class="hover_style" alt="">
                會員登入
              </a>
            </a>
            」後至「個人」上方大頭照點選「姓名」後即可進行變更。
          </p>
          <p style={{ color: "#c14948" }}>
            ※
            如更新E-mail帳號，請留意新信箱是否可正常收取遊戲職人相關信件通知喔。
          </p>
          </ul>
          </div>
        ),
      },
    ],
  },
  connect_us: {
    regexes: [
      /(聯繫我們)|(聯絡)|(客服)/,
      /(電話)|(真人)|(客訴)/,
    ],
    replies: [
      {
        type: "text",
        payload: (
          <div class="robot_answer">
        <img src="/img/customer_service/order_problem.png" alt="" class="commissioner_avatar"></img>
          
          <div class="connect_us">訂單相關問題，欲與專人聯繫，歡迎來電<br></br>客服專線：<a href="tel:02-6631-8168" title="來電Nobby by TESCOM訂單客服專線">0800-095-099</a><br></br>
            歡迎來信：<a href="mailto: tablegame2021@gmail.com" title="聯絡客服"> tablegame2021@gmail.com</a><br></br>
            營業時間：10:00~17:00，六日、國定假日除外</div>
       
          </div>
        ),
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
  const innerTrail = useRef(null);
  const [dialogHistory, setDialogHistory] = useState(DEFAULT_HISTORY);
  const [utteranceText, setUtteranceText] = useState("");
  const [utteranceOptions, setUtteranceOptions] = useState([]);
  const [fontSize, setFontSize] = useState("16px");
  const sendUtterance = (event) => {
    if (event.key === "Enter") {
      replyWithBot();
    }
  };
  const replyWithBot = () => {
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
    if (replies.length === 0) {
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
  };

  const handleSelectUtteranceOption = (e) => {
    console.log(e);
  };

  useEffect(() => {
    innerTrail.current.scrollIntoView({ behavior: "smooth" });
  });

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
      <div class="outer" style={{ "font-size": fontSize }}>
        {/* 內文內框 */}
        <div class="inner">
          {/* 放大字型 */}
          <span
            id="enlarge_font_size"
            onClick={(e) => setFontSize(fontSize === "18px" ? "16px" : "18px")}
          >
            <img
              src="/img/customer_service/enlarge-smallsize.png"
              class="enlarge"
              alt=""
            />
          </span>
          {/* 對話框 */}

          {dialogHistory.map((item) => (
            <InstantQADialogBox
              message={item}
              handleSelectItem={(e) => {
                setUtteranceText(e.target.innerText);
              }}
            ></InstantQADialogBox>
          ))}

          <div style={{ float: "left", clear: "both" }} ref={innerTrail}></div>
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
              placeholder="請輸入文字"
              value={utteranceText}
              onChange={(e) => setUtteranceText(e.target.value)}
              onKeyDown={sendUtterance}
            />
            <img
              onClick={replyWithBot}
              src="/img/customer_service/sent.png"
              class="sent_img"
              alt=""
            />
            {/* 自動搜尋問題外框*/}
            <div class="automatic_search_outer">
              {/* 自動搜尋問題列表 */}
              <div class="automatic_search">
                <ol class="adjustment_ul">
                  {utteranceOptions.map((option, index) => (
                    <li onClick={handleSelectUtteranceOption}>{option}</li>
                  ))}
                </ol>
              </div>
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
