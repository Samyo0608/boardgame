import { useState } from "react";

const FAQBlock = ({ question, questionIndex, answerBlock }) => {
  const [showAnswerBlock, setShowAnswerBlock] = useState(false);

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
        <div class="stretch_button" onClick={() => switchAnswerBlock()}>
          <div class="minus"></div>
          <div className={`minus animation ${showAnswerBlock ? "":"rotated"}`}></div>
        </div>
      </div>
      <div class="answer_block">{showAnswerBlock ? answerBlock : null}</div>
    </div>
  );
};
export default FAQBlock;
