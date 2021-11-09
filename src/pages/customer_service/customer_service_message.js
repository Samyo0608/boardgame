import "bootstrap/dist/css/bootstrap.min.css";
import { Typeahead } from "react-bootstrap-typeahead"; // ES2015
import "../../css/customer_service_message.css";
import React, { useState } from "react";
import Form from "react-bootstrap/Form";
const CustomerServicePage = () => {
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
          <p class="subtitle">問題類別</p>
          <div class="outerCoating">
            <Form.Group class="questionTopicOuter">
              <Typeahead
                id="basic-typeahead-single"
                labelKey="name"
                onChange={setSingleSelections}
                options={options}
                placeholder="Choose a state..."
                selected={singleSelections}
              />
            </Form.Group>
            <Form.Group class="questionTopicOuter">
              <Typeahead
                id="basic-typeahead-single"
                labelKey="name"
                onChange={setSingleSelections}
                options={options}
                placeholder="Choose a state..."
                selected={singleSelections}
              />
            </Form.Group>
          </div>
          <p class="subtitle">問題內容</p>
          <div>
            <textarea  class="problemItemOuter" placeholder="請填寫問題內容(限填200字)" required  maxlength="200" >
            </textarea>
          </div>
          <button class="submitButton">
            <span>送出</span>
          </button>
          <p>
            <span class="remind">您的訊息，商店將會盡快為您進行回覆。</span>
          </p>
        <img
          src="/img/customer_service/shoping.png"
          class="shopingPicture"
          alt=""
        />
        </div>
      </div>
    </div>
  );
};
export default CustomerServicePage;
