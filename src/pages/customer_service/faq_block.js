import "bootstrap/dist/css/bootstrap.min.css";
import "../../css/faq.css";
import React, { useState } from "react";

const FAQBlock = ({ question, questionIndex, answerBlock }) => {
  const [showAnswerBlock, setShowAnswerBlock] = useState(true);
  const switchAnswerBlock = () => {
    setShowAnswerBlock(!showAnswerBlock);
  };
  return (
    <div>
      <div class="abreast2">
        <div>
          <h4>
            Q{questionIndex}. {question}
          </h4>
        </div>
        <div class="stretch_button" onClick={() => switchAnswerBlock()}></div>
      </div>
      <div class="answer_block">{showAnswerBlock ? answerBlock : null}</div>
    </div>
  );
};
export default FAQBlock;
