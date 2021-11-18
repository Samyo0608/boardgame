import "bootstrap/dist/css/bootstrap.min.css";
import "../../css/question_record.css";
const QuestionRecord = () => {
  return (
    <>
      {/* 問題列表 */}
      <a href="">
        <div class="OuterOptionBox">
          <div class="red_point"></div>
          <div class="optionBox">
            <p>問題類別:發票與退款</p>
            <p>我想要打統編，要如何用?</p>
            <span>問題單編號:P2110061200066</span>
            <span>/1個對話</span>
          </div>
        </div>
      </a>
      {/* 問題列表 */}
      <a href="">
        <div class="OuterOptionBox">
          <div class="red_point"></div>
          <div class="optionBox">
            <p>問題類別:會員相關</p>
            <p>如何更改密碼?</p>
            <span>問題單編號:P2110061100174 </span>
            <span>/1個對話</span>
          </div>
        </div>
      </a>
      {/* 問題列表 */}
      <a href="">
        <div class="OuterOptionBox">
          <div class="red_point"></div>
          <div class="optionBox">
            <p>問題類別:商店相關</p>
            <p> 訂購妙語說書人請問何時到貨??</p>
            <span>問題單編號:P2110061100163</span>
            <span>/2個對話</span>
          </div>
        </div>
      </a>

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
