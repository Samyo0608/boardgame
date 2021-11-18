import "bootstrap/dist/css/bootstrap.min.css";
import { Typeahead } from "react-bootstrap-typeahead"; // ES2015
import "../../css/edit_reply.css";
import React, { useState } from "react";
import Form from "react-bootstrap/Form";
const EditReply = () => {
  const [singleSelections, setSingleSelections] = useState([]);
  const options = ["商店相關", "訂單進度", "退換維修相關問題", "會員相關", "折價卷", "發票與退款"];
  return (
    <div className="container justify-content-center flex-column">
    {/* header */}
    {/* title */}
    <div class="djustTitle">
      <h3>客服留言</h3>
      <img
        src="/img/customer_service/small_dice.png"
        class="csDice"
        alt=""
      />
    </div>
      {/* 外框背景 */}
      <div class="messageOuter">
        {/* 分頁 */}
        <div class="pagination">
          <a href=""><div>客服留言</div></a>
          <a href=""><div>問答紀錄</div></a>
        </div>

        {/* 內文內框 */}
        <div class="messageInner">
          {/* 問題類別 */}
          <div class="historicalMessageFrame">
            <p>問題單編號:P2110061100163</p>
            <div class="shiftright">
            <span >
            您的留言
            </span>
            <img
        src="/img/customer_service/miniature_head.png"
        class="miniatureHead"
        alt=""
      />
            </div>
            <div class="historicalMessage">
            <span>訂購妙語說書人何時到貨?
            </span>
            </div>
            <span class="shiftright">
            2021/10/06
            </span>
          </div>
      
          <p class="subtitle">問題內容</p>
          <div>
            <textarea  class="problemItemOuter" placeholder="請填寫問題內容(限填200字)" required  maxlength="200" >
            </textarea>
          </div>
          <button class="backButton">
            <span>回上頁</span>
          </button>
          <button class="submitButton">
            <span>送出</span>
          </button>
          <p>
            <span class="remind">問題送出後，商店將會盡快為您進行回覆。</span>
          </p>
          {/* 右側圖 */}
      <img
        src="/img/customer_service/communication_cooperation.png"
        class="communicationPicture2"
        alt=""
      />
        </div>
      </div>
    </div>
  );
};
export default EditReply;