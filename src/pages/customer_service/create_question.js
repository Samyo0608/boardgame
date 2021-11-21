import "bootstrap/dist/css/bootstrap.min.css";
import { Typeahead } from "react-bootstrap-typeahead"; // ES2015
import "../../css/customer_service_message.css";
import React, { useState } from "react";
import Form from "react-bootstrap/Form";
import { API_URL } from "../../configs/config";
import axios from "axios";
import { useHistory } from "react-router-dom";


const categoryHierarchy = {
  "商店相關":["商店相關2"],
  "訂單進度":["訂單進度2"],
  "退換維修相關問題":[],
  "會員相關":[],
  "折價卷":[],
  "發票與退款":[],
}

const CreateQuestion = () => {
  const history = useHistory();
  const [mainCategory, setMainCategory] = useState("");
  const [subCategory, setSubCategory] = useState("");
  const [questionContent, setQuestionContent] = useState("");
  const mainCategoryOptions = [
    "商店相關",
    "訂單進度",
    "退換維修相關問題",
    "會員相關",
    "折價卷",
    "發票與退款",
  ];
  const [subCategoryOptions, setSubCategoryOptions] = useState([]);
  const selecltMainCategory = (e) => {
    setMainCategory(e);
    if(mainCategory.length ===0){
      return;
    }
    const mainCategoryText = mainCategory[0]
    setSubCategoryOptions(categoryHierarchy[mainCategoryText])
  };

  const createQuestion = async () => {
    if (mainCategory.length === 0) {
      alert("請選擇主類別");
      return;
    }
    if (subCategory.length === 0) {
      alert("請選擇次類別");
      return;
    }
    if (questionContent.length === 0) {
      alert("請輸入內容");
      return;
    }
    const postQuestionBody = {
      user_id: 1,
      category: mainCategory[0],
      subcategory: subCategory[0],
      content: questionContent,
    };
    await axios.post(`${API_URL}/cutomerService/questions`, postQuestionBody);
    history.replace({
      pathname: "record",
      state: { isActive: true },
    });
  };

  return (
    <>
      {/* 問題類別 */}
      <p class="subtitle">問題類別</p>
      <div class="outerCoating">
        <Form.Group class="questionTopicOuter">
          <Typeahead
            id="basic-typeahead-single"
            labelKey="name"
            onChange={selecltMainCategory}
            options={mainCategoryOptions}
            placeholder="Choose a state..."
            selected={mainCategory}
          />
        </Form.Group>
        <Form.Group class="questionTopicOuter">
          <Typeahead
            id="basic-typeahead-single"
            labelKey="name"
            onChange={setSubCategory}
            options={subCategoryOptions}
            placeholder="Choose a state..."
            selected={subCategory}
          />
        </Form.Group>
      </div>
      <p class="subtitle">問題內容</p>
      <div>
        <textarea
          class="problemItemOuter"
          value={questionContent}
          onChange={(e) => setQuestionContent(e.target.value)}
          placeholder="請填寫問題內容(限填200字)"
          required
          maxlength="200"
        ></textarea>
      </div>
      {/* <Link to={url.replace("create", "record")}> */}
      <button onClick={createQuestion} class="submitButton">
        <span>送出</span>
      </button>
      {/* </Link> */}
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
