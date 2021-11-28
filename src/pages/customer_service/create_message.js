import "bootstrap/dist/css/bootstrap.min.css";
import "../../css/edit_reply.css";
import { useState, useEffect } from "react";
import { API_URL } from "../../configs/config";
import axios from "axios";
import { useLocation } from "react-router-dom";

const USER_ID = 1;

function parseUrlParametesFromLocation(inputString) {
  if (!inputString) {
    return "";
  }
  inputString = inputString.slice(1);
  const parameterStrs = inputString.split("&");
  let parsedParameterStrs = [];
  const parameters = {};
  for (let parameterStr of parameterStrs) {
    parsedParameterStrs = parameterStr.split("=");
    parameters[parsedParameterStrs[0]] = parsedParameterStrs[1];
  }
  return parameters;
}

function parseTime(inputString) {
  if (!inputString) {
    return "";
  }
  inputString = inputString.replace(/T/, " ");
  inputString = inputString.replace(/.000Z/, "");

  return inputString;
}

const CreateMessage = (props) => {
  const [question, setQuestion] = useState({ messages: [] });
  const [newMessageContent, setNewMessageContent] = useState("");
  const location = useLocation();

  const urlParameters = parseUrlParametesFromLocation(location.search);
  const admin = urlParameters.admin === "true";

  const fetchQuestion = async () => {
    const response = await axios.get(
      `${API_URL}/cutomerService/questions/${urlParameters.question_id}`
    );
    setQuestion(response.data);
    console.log(response.data);
  };
  const sendMessage = async () => {
    const postMessageBody = {
      question_id: urlParameters.question_id,
      user_id: USER_ID,
      content: newMessageContent,
      is_from_user: !admin,
    };
    await axios.post(
      `${API_URL}/cutomerService/questions/${urlParameters.question_id}/messages`,
      postMessageBody
    );
    await fetchQuestion();
  };

  useEffect(() => {
    fetchQuestion();
  }, []);
  return (
    <>
      {/* 顧客提問紀錄 */}
      <div class="historicalMessageFrame">
        <p>問題單編號:{question.question_id}</p>
        <div class="shiftright">
          <span>您的留言</span>
          <img
            src="/img/customer_service/miniature_head.png"
            class="miniatureHead"
            alt=""
          />
        </div>
        <div class="historicalMessage">
          <span>{question.content}</span>
        </div>
        <span class="shiftright">{parseTime(question.created_at)}</span>
      </div>
      {question.messages.map((message) => {
        return (
          <div class="historicalMessageFrame">
            <div class="shiftright">
              <span>{message.is_from_user ? "您的留言" : "客服回覆"}</span>
              <img
                src="/img/customer_service/miniature_head.png"
                class="miniatureHead"
                alt=""
              />
            </div>
            <div class="historicalMessage">
              <span>{message.content}</span>
            </div>
            <span class="shiftright">{parseTime(message.created_at)}</span>
          </div>
        );
      })}
      {/* 顧客再次發出提問 */}

      <p class="subtitle">問題內容</p>
      <div>
        <textarea
          class="problemItemOuter"
          value={newMessageContent}
          onChange={(e) => setNewMessageContent(e.target.value)}
          placeholder="請填寫問題內容(限填200字)"
          required
          maxlength="200"
        ></textarea>
      </div>
      <button class="backButton">
        <span>回上頁</span>
      </button>
      <button onClick={sendMessage} class="submitButton">
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
    </>
  );
};
export default CreateMessage;
export { parseUrlParametesFromLocation };
