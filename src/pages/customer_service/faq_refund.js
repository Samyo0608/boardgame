import "bootstrap/dist/css/bootstrap.min.css";
import "../../css/faq.css";
import React from "react";
const FAQRefundPage = () => {
  return (
    <div class="content_question">
      {/* 內文問題框架 */}
      <h3>&nbsp;&nbsp;&nbsp;&nbsp;退換貨及退款 :</h3>
      {/* 問題標題 */}
      <ul class="question_list">
        {/* 問題項目 */}
        <li>
          <div class="abreast2">
            <div>
              <h4>Q1. 如何辦理退換貨？</h4>
            </div>
            <div class="stretch_button"></div>
          </div>
          <div class="answer">
            <p>
              請您於鑑賞期七日內申請退貨，請於二日內至全省7-11、全家辦理，運費須自行承擔。
            </p>
            <p>
              若仍有需要的商品，請您重新下單訂購，以節省貨物因來回寄送所秏費的時間。
            </p>
            <p>※注意事項：</p>
            <p>
              1.退貨商品材積過大，超出超商限制(請見下圖)，無法使用超商辦理退貨寄件，則須『宅配自行寄回』。
            </p>
            <img
              style={{ margin: "20px 0" }}
              src="/img/customer_service/return.gif"
            />
            <p>2.離島或鑑賞期內自行寄回退貨商品</p>
            <p>
              您可利用郵局小包掛號或包裹寄回<b>(勿使用貨到付款)</b>。
            </p>
            <br></br>
            <p style={{ color: "#c14948" }}>
              ※請另外準備一個完整乾淨的袋子將退貨商品「完整密封」(請勿使用商品原透明包裝袋做為退貨外包裝），以避免商品於運送途中掉出遺失。如退貨商品因未妥善包裝以致商品遺失，將以實際收到之商品辦理退貨程序。
            </p>
          </div>
        </li>
        <li>
          <div class="abreast2">
            <div>
              <h4>Q2. 退款方式及退款時間？</h4>
            </div>
            <div class="stretch_button"></div>
          </div>
          <div class="answer">
            <table>
              <thead>
                <tr>
                  <th class="table_title_refund1">付款方式</th>
                  <th class="table_title_refund2">退貨作業時間</th>
                  <th class="table_title_refund3">退款方式</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td class="table_item">超商取貨付款</td>
                  <td class="table_content">
                    退貨包裏完成寄送後， 約7-8個工作天完成退款作業
                  </td>
                  <td class="table_content">
                    ※請您填寫銀行／郵局帳戶資料，我們將於7個工作日內，依您申請的帳戶資料完成餘額轉帳。(不需扣除手續費)
                  </td>
                </tr>
              </tbody>
            </table>
            <p style={{ color: "#c14948" }}>
            ※ 帳號填寫注意事項：
            </p>
            <p style={{ color: "#c14948" }}>
            &nbsp;&nbsp;&nbsp;1. 填寫退款帳號時請注意：提款卡卡號不一定等於存褶帳號，請以存褶帳號為準。
            </p>
            <p style={{ color: "#c14948" }}>
            &nbsp;&nbsp;&nbsp;2. 一般銀行帳戶，請勿自行加入銀行代碼 ，帳號欄位請填寫存褶顯示之帳號即可，以免造成轉帳錯誤或失敗。
            </p>
            <p style={{ color: "#c14948" }}>
            &nbsp;&nbsp;&nbsp;3.中華郵政（代碼700） 帳戶，帳號則需填寫存簿之【局號】＋【帳號】。
            </p>
          </div>
        </li>
        <li>
          <div class="abreast2">
            <div>
              <h4>Q3. 什麼情況無法辦理退貨？</h4>
            </div>
            <div class="stretch_button"></div>
          </div>
          <div class="answer">
            <p>
            1. 超過7天退貨期限。
            </p>
            <p>
            2. 商品已有使用痕跡、味道或人為造成髒污、商品配件丟失或損毀等，恕不接受退貨。
            </p>
          </div>
        </li>
        <li>
          <div class="abreast2">
            <div>
              <h4>Q4. 為什麼我已取貨或商品已送達簽收，但無法申請辦理退貨？</h4>
            </div>
            <div class="stretch_button"></div>
          </div>
          <div class="answer">
            <p>
            由於您取貨或商品簽收後約需24~48小時，物流商才會回覆您已完成取件的訊息，故煩請於取件或簽收後稍等48小時再申辦退貨，不便之處敬請見諒！
            </p>
          </div>
          </li>
      </ul>
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
export default FAQRefundPage;
