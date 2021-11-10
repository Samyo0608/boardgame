import "bootstrap/dist/css/bootstrap.min.css";
import "../../css/faq.css";
import React from "react";
const FAQShoppingPage = () => {
  return (
    <div class="content_question">
      {/* 內文問題框架 */}
      <h3>&nbsp;&nbsp;&nbsp;&nbsp;購物常見問題:</h3>
      {/* 問題標題 */}
      <ul class="question_list">
        {/* 問題項目 */}
        <li>
          <div class="abreast2">
            <div>
              <h4>Q1. 該如何加入購物呢？</h4>
            </div>
            <div class="stretch_button"></div>
          </div>
          <div class="answer">
            電腦版：請您點選右上角「登入/註冊」，可選擇「手機號碼驗證註冊」或「使用Facebook快速註冊」。
            手機版/APP：請您點選右下角「個人」，可選擇以「手機號碼」、「Facebook」或「Apple
            ID」(限iOS用戶)註冊。
          </div>
        </li>
        <li>
          <div class="abreast2">
            <div>
              <h4>Q2. 忘記密碼怎麼辦？</h4>
            </div>
            <div class="stretch_button"></div>
          </div>
          <div class="answer">
            若您忘記密碼，請您先「會員登入」後，點選「忘記密碼」
            再輸入註冊的電子郵件/手機號碼，系統會自動發送密碼重設通知給您，再請您依照通知步驟重新設定密碼即可。
          </div>
        </li>
        <li>
          <div class="abreast2">
            <div>
              <h4>Q3. 忘記登入的會員帳號？</h4>
            </div>
            <div class="stretch_button"></div>
          </div>
          <div class="answer">煩請直接與客服中心聯繫。 </div>
        </li>
        <li>
          <div class="abreast2">
            <div>
              <h4>Q4. 該如何修改個人資料及密碼？</h4>
            </div>
            <div class="stretch_button"></div>
          </div>
          <div class="answer">
            電腦版：請「會員登入」至「個人資料及密碼修改」即可進行變更。
            手機版/APP：請「會員登入」後至「個人」上方大頭照點選「姓名」後即可進行變更。
            ※ 如更新E-mail帳號，請留意新信箱是否可正常收取lativ相關信件通知喔。
          </div>
        </li>
        <li>
          <div class="abreast2">
            <div>
              <h4>Q5. 如何透過「線上客服」聯繫？？</h4>
            </div>
            <div class="stretch_button"></div>
          </div>
          <div class="answer">
            請於上班時間至「訂單查詢」中「客服問與答」點選「客服」，即可進行諮詢。
            上班時間09:00-18:00(例假日暫不提供服務)
          </div>
        </li>
      </ul>{" "}
      {/* 問題項目結束 */}
      <div>
        {/* 客服留言連結 */}
        <div class="expand_down">
          <span>查看更多常見問題</span>
          <img
            src="/img/customer_service/drop_down.png"
            alt=""
            class="drop_down"
          />
        </div>
        <div class="link_message">
          <img
            src="/img/customer_service/document_icon.png"
            class="document_icon"
            alt=""
          />
          <h4>客服留言</h4>
          <p>我們會定時查看，</p>
          <p>盡快回覆您!</p>
        </div>
      </div>
      {/* div結尾(客服留言連結) */}
    </div>
  );
};
export default FAQShoppingPage;
