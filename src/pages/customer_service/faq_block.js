import "bootstrap/dist/css/bootstrap.min.css";
import "../../css/faq.css";
const FAQBlock = ({ question, questionIndex, answerBlock }) => {
  return (
    <div>
      <div class="abreast2">
        <div>
          <h4>Q{questionIndex}. {question}</h4>
        </div>
        <div class="stretch_button"></div>
      </div>
      <div class="answer">
        {answerBlock}
      </div>
      {/* 問題項目結束 */}
    </div>
  );
};
export default FAQBlock;
