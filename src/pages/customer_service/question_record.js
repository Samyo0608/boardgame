import "bootstrap/dist/css/bootstrap.min.css";
import "../../css/question_record.css";
import { useState, useEffect } from "react";
import axios from "axios";
import { API_URL } from "../../configs/config";
import { useHistory } from "react-router-dom";

const USER_ID = 1;

const QuestionRecord = () => {
  const history = useHistory();
  const [questions, setQuestions] = useState([]);
  
  useEffect(() => {
    async function fetchQuestions() {
      const response = await axios.get(
        `${API_URL}/cutomerService/questions?user_id=${USER_ID}`
      );
      console.log(response.data);
      setQuestions(response.data);
    }

    fetchQuestions();
  }, []);

  const enterQuestionPage = (question) => {
    history.replace({
      pathname: "create_message",
      search: `?question_id=${question.question_id}`,
      state: { isActive: true },
    });
  };
  return (
    <>
      {/* 問題列表 */}

      {questions.map((item) => (
        <div class="OuterOptionBox">
          <div class="red_point"></div>
          <div class="optionBox"  onClick={()=>enterQuestionPage(item)}>
            <p>問題類別:{item.category}</p>
            <p>{item.content}</p>
            <span>問題單編號:{item.question_id}</span>
            <span>/1個對話</span>
          </div>
        </div>
      ))}

      {/* 右側圖 */}
      <img
        src="/img/customer_service/communication_cooperation.png"
        class="communicationPicture"
        alt=""
      />
    </>
  );
};

function selectedMainCategoriesOnchange(mainCategories, changeSubCategories) {
  console.log(mainCategories);
}

export default QuestionRecord;
