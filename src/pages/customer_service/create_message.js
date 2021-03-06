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

  function toTimestamp(string) {
    return new Date("2013/09/05 15:34:00").getTime() / 1000;
  }

  // You could also provide specific locale, if needed. For example:
  //function formatDate(string){
  //    var options = { year: 'numeric', month: 'long', day: 'numeric' };
  //    return new Date(string).toLocaleDateString('en-US',options);
  //}
  <div id="results"></div>;

  useEffect(() => {
    fetchQuestion();
  }, []);
  return (
    <>
      {/* ?????????????????? */}
      <p className="questionNumber">
        ???????????????:P{toTimestamp(parseTime(question.created_at))}
        {question.question_id}
      </p>
      <div class="historicalMessageFrame">
        <div class="shiftRight">
          <span>????????????</span>
          <img
            src="/img/customer_service/miniature_head.png"
            class="miniatureHead"
            alt=""
          />
        </div>
        <div class="historicalMessage">
          <span>{question.content}</span>
        </div>
        <div class="shiftRight">{parseTime(question.created_at)}</div>
      </div>
      {question.messages.map((message) => {
        return (
          <div class="historicalMessageFrame">
            <div class={message.is_from_user ? "shiftRight" : "shiftLeft"}>
              <span>{message.is_from_user ? "????????????" : "????????????"}</span>
              <img
                src={
                  message.is_from_user
                    ? "/img/customer_service/miniature_head.png"
                    : "/img/customer_service/manager.png"
                }
                class="miniatureHead"
                alt=""
              />
            </div>
            <div class="historicalMessage">
              <span>{message.content}</span>
            </div>
            <div class="shiftRight">{parseTime(message.created_at)}</div>
          </div>
        );
      })}
      {/* ???????????????????????? */}
      <p class="subtitle">????????????</p>
      <div>
        <textarea
          class="problemItemOuter"
          value={newMessageContent}
          onChange={(e) => setNewMessageContent(e.target.value)}
          placeholder="?????????????????????(??????200???)"
          required
          maxlength="200"
        ></textarea>
      </div>
      <button class="backButton">
        <a href="/customer_service_message/record">
          <span padding="200px">?????????</span>
        </a>
      </button>
      <button onClick={sendMessage} class="submitButton">
        <span>??????</span>
      </button>
      <p>
        <span class="remind">?????????????????????????????????????????????????????????</span>
      </p>
      {/* ????????? */}
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
