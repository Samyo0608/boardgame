import "bootstrap/dist/css/bootstrap.min.css";
import { Typeahead } from "react-bootstrap-typeahead"; // ES2015
import "../../css/customer_service_message.css";
import React, { useState } from "react";
import { Link, useRouteMatch } from "react-router-dom";
import Form from "react-bootstrap/Form";
const CreateQuestion = () => {
  const { path, url } = useRouteMatch();
  const [mainCategory, setMainCategory] = useState([]);
  const [subCategory, setSubCategory] = useState([]);
  const categoryOptions = [
    "商店相關",
    "訂單進度",
    "退換維修相關問題",
    "會員相關",
    "折價卷",
    "發票與退款",
  ];
  return (
    <>
      {/* 問題類別 */}
      <p class="subtitle">問題類別</p>
      <div class="outerCoating">
        <Form.Group class="questionTopicOuter">
          <Typeahead
            id="basic-typeahead-single"
            labelKey="name"
            onChange={setMainCategory}
            options={categoryOptions}
            placeholder="Choose a state..."
            selected={mainCategory}
          />
        </Form.Group>
        <Form.Group class="questionTopicOuter">
          <Typeahead
            id="basic-typeahead-single"
            labelKey="name"
            onChange={setMainCategory}
            options={categoryOptions}
            placeholder="Choose a state..."
            selected={mainCategory}
          />
        </Form.Group>
      </div>
      <p class="subtitle">問題內容</p>
      <div>
        <textarea
          class="problemItemOuter"
          placeholder="請填寫問題內容(限填200字)"
          required
          maxlength="200"
        ></textarea>
      </div>
      <Link to={url.replace("create", "record")}>
        <button class="submitButton">
          <span>送出</span>
        </button>
      </Link>
      <p>
        <span class="remind">您的訊息，商店將會盡快為您進行回覆。</span>
      </p>
      <img
        src="/img/customer_service/shoping.png"
        class="shopingPicture"
        alt=""
      />
    </>
  );
};
export default CreateQuestion;