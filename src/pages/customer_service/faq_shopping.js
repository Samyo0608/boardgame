import "bootstrap/dist/css/bootstrap.min.css";
import "../../css/faq.css";
import React from "react";
const FAQShoppingPage = () => {
  return (
    <div class="content_question">
      {/* 內文問題框架 */}
      <h3>&nbsp;&nbsp;&nbsp;&nbsp;購物常見問題 :</h3>
      {/* 問題標題 */}
      <ul class="question_list">
        {/* 問題項目 */}
        <li>
          <div class="abreast2">
            <div>
              <h4>Q1. 購物流程說明</h4>
            </div>
            <div class="stretch_button"></div>
          </div>
          <div class="answer">
            <p>
              第一次購物：註冊帳號＞輸入手機號碼註冊＞選擇商品＞加入購物車＞前往結帳＞填寫收件資訊＞完成購物
            </p>
            <br></br>

            <p>
              非第一次購物：選擇商品＞加入購物車＞前往結帳＞會員登入＞填寫收件資訊＞完成購物
            </p>
            <p>
              ※提醒您，商品加入購物車但未結帳前，並無保留商品庫存功能，商品庫存分配將以結帳順序為依據。
            </p>
          </div>
        </li>
        <li>
          <div class="abreast2">
            <div>
              <h4>Q2. 目前提供哪些付款方式？</h4>
            </div>
            <div class="stretch_button"></div>
          </div>
          <div class="answer">
            <p>目前提供付款方式有五種：</p>
            <p>1. 『超商取貨付款』，配合通路：7-11、全家</p>
            <p>2. 宅配貨到付款（限台灣本島） ※ 配合的宅配公司為：黑貓宅急便</p>
          </div>
        </li>
        <li>
          <div class="abreast2">
            <div>
              <h4>Q3. 如何查詢目前訂單的處理情況？</h4>
            </div>
            <div class="stretch_button"></div>
          </div>
          <div class="answer">
            <p>
              請您先「會員登入」後至「訂單查詢」，即可查詢該訂單的處理狀態。
            </p>
          </div>
        </li>
        <li>
          <div class="abreast2">
            <div>
              <h4>Q4. 如何修改、加訂或合併訂單?</h4>
            </div>
            <div class="stretch_button"></div>
          </div>
          <div class="answer">
            <p>
              1.
              為避免影響商品庫存及避免帳務錯誤，請恕我們無法為您再將訂單『修改』或『加購』或『合併』訂單商品。
            </p>
            <p>
              {" "}
              2. 若您已結帳完成訂單而有此需求，建議您可自行點選『取消訂單』。
            </p>
            <br></br>
            <p>
              ※提醒您，如遇訂單狀態已完成出貨無法攔截時，請恕無法協助取消訂單；如有不適合的商品，再請您於七日鑑賞期內辦理退貨服務。
            </p>
          </div>
        </li>
        <li>
          <div class="abreast2">
            <div>
              <h4>Q5.如何計算「七天鑑賞期」？</h4>
            </div>
            <div class="stretch_button"></div>
          </div>
          <div class="answer">
            <p>
              根據消保法規定七日鑑賞期權益 於完成簽收取件的隔日起算至第7天止
            </p>
            <p>(如您的收件地址有管理員代收，則以代收的隔日起算)。</p>
            <br></br>
            <p>
              提醒您！以下情況將無法為您辦理退貨，煩請留意以免影響您的退貨權益。
            </p>
            <p>1.商品已有使用摺痕或髒污或味道，請恕無法接受退貨。</p>
            <p>2.退回時，商品配件不全。</p>
            <p>3.已在商品上加工，非商品原樣。</p>
            <p>4.活動贈品未退回。</p>
            <p>5.超過七天鑑賞期。</p>
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
