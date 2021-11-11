import "bootstrap/dist/css/bootstrap.min.css";
import "../../css/faq.css";
import React from "react";
const FAQDeliveryPage = () => {
  return (
    <div class="content_question">
      {/* 內文問題框架 */}
      <h3>&nbsp;&nbsp;&nbsp;&nbsp;配送取貨問題 :</h3>
      {/* 問題標題 */}
      <ul class="question_list">
        {/* 問題項目 */}
        <li>
          <div class="abreast2">
            <div>
              <h4>Q1. 可選擇的配送方式有那些？</h4>
            </div>
            <div class="stretch_button"></div>
          </div>
          <div class="answer">
            <table>
              <thead>
                <tr>
                  <th class="table_title_delivery1">付款方式</th>
                  <th class="table_title_delivery2">配送方式</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td class="table_item">貨到付款</td>
                  <td class="table_content">
                    商品將以<b>『黑貓宅急便』宅配方式寄出</b>
                    ，並於交付您貨物時收取貨款，貨物送達時會與您電話連絡，需請您務必保持電話暢通，不要拒接不認識的來電號碼，以免錯過貨物送達，連續配送三次均無法連絡，本訂單將自動取消喔！
                    <br></br>
                    <br></br>提醒事項：<br></br>
                    ※宅配人員僅提供送件及代收款項的服務，若會員對收到的商品有任何問題，請直接與客服連絡，
                    <br></br>
                    &nbsp;&nbsp;&nbsp;
                    配送人員無法為您辦理退換貨，貨到付款服務，僅接受現金付款（並請自備零錢喔）！
                    <br></br>
                    ※「貨到付款」服務僅限台灣本島，外島地區沒有提供「貨到付款」服務，不便之處敬請見諒。
                  </td>
                </tr>
                <tr>
                  <td class="table_item">超商取貨</td>
                  <td class="table_content">
                    <b>商品將配送至您所指定的門市</b>
                    ，到店時將會發送取貨通知簡訊、E-mail或會員中心通知您前往取貨。
                    <br></br>提醒事項： <br></br> ※
                    因『超商取貨付款』有材積限制，下單時若發現超過材積限制時，建議您分批下單（如有運費產生請恕無法合併計算）。
                    <br></br>※
                    如系統材積計算誤差，仍有超材情況發生，客服人員將另行通知。
                  </td>
                </tr>
              </tbody>
            </table>

            <br></br>
            <p>
              ※
              其他提醒：當商品出貨後，若未於通知期限內完成取貨或拒收，將會產生未取件記錄，如達2次以上(含)，
              <br></br>未來將無法再使用該付款方式下單。<br></br>
            </p>
          </div>
        </li>
        <li>
          <div class="abreast2">
            <div>
              <h4>Q2. 請問運費如何計算？</h4>
            </div>
            <div class="stretch_button"></div>
          </div>
          <div class="answer">
            <p>
              以下為常態免運費標準，實際請依官網行銷活動公告為依據
              (訂單金額無法合併計算)。
            </p>
            <p>
              1.
              『超商取貨付款』:單筆購物滿1000元，即享有免運費優惠；未達免運條件，將酌收50元物流費。
            </p>
            <p>
              2. 宅配訂單:單筆購物滿1200元；未達免運條件，將酌收60元物流費。
            </p>
          </div>
        </li>
        <li>
          <div class="abreast2">
            <div>
              <h4>Q3. 如何更改訂購內容、送貨地址或取消訂單？</h4>
            </div>
            <div class="stretch_button"></div>
          </div>
          <div class="answer">
            <p>
              <b>修改訂單：</b>
            </p>
            <p>
              訂單送出後即無法修改訂單內容，如需修改，您可由「會員登入」登入帳號，取消訂單後再重新下單。
            </p>
            <p>
              <b>取消訂單：</b>
            </p>
            <p>
              訂單尚未進入包裝作業前您可由「會員登入」登入帳號，自行取消訂單，
            </p>
            <p>
              由「會員登入」登入帳號 ＞
              進入「訂單查詢/問答/退貨查詢」狀態點選「取消訂單」，即完成取消該筆訂單。
            </p>{" "}
            <br></br>
            <p>※ 訂單取消後即無法復原。</p>
            <p>※ 若訂單商品已進入包裝作業，請恕無法為您取消訂單。</p>
            <p>※ 提醒您，若您取消訂單後重新訂購，商品庫存請依當時頁面為主！</p>
          </div>
        </li>
        <li>
          <div class="abreast2">
            <div>
              <h4>Q4. 台灣外島地區可以寄送嗎？</h4>
            </div>
            <div class="stretch_button"></div>
          </div>
          <div class="answer">
            <p>
              您可以選擇『超商取貨付款』，將以郵局海運配送，預計3-7日內配達，而送達時間會因天氣狀況、船隻班次而有變動的可能性。
            </p>
          </div>
        </li>
        <li>
          <div class="abreast2">
            <div>
              <h4>Q5. 訂購商品後需幾天的時間才可以收到商品呢？</h4>
            </div>
            <div class="stretch_button"></div>
          </div>
          <div class="answer">
            <p>常態的出貨時間為：今天下單，明天取貨。</p>
            <p>
              但請務必注意：週日及例假日不出貨，超過每日截止時間的訂單要多等一天。
            </p>
            <br></br>
            <p>
              原則上週二至週五收單截止時間為每日am10:00，超過am10:00則出貨時間多加一天。
            </p>
            <p>
              實際出貨時間仍依訂單量調節，如有延後出貨超過2天的緊急狀況，將公告於網頁最新消息中。
            </p>
            <table>
              <thead>
                <tr>
                  <th class="table_title_shipment1">下單時間</th>
                  <th class="table_title_shipment2">出貨時間說明</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td class="table_item">週二至週五am10:00前</td>
                  <td class="table_content">
                    今天下單：超過am10:00則出貨時間多加一天
                    <br></br>
                    今天出貨：出貨至便利店所屬物流中心
                    <br></br>
                    明天送達：商品配送至便利店門市(如有延後到貨，請依實際物流配送作業為主)
                    <br></br>
                    貨到付款訂單則配送至指定地址(偏遠及外島地區將於3-7日內送達)
                  </td>
                </tr>
                <tr>
                  <td class="table_item">週五am10:01~週日pm11:59</td>
                  <td class="table_content">原則上週一出貨，週二送達</td>
                </tr>
                <tr>
                  <td class="table_item">週一am00:00~週二am10:00</td>
                  <td class="table_content">原則上週二出貨，週三送達</td>
                </tr>
              </tbody>
            </table>

            <br></br>
            <p>※ 完成下單後，煩請留意取貨通知簡訊、E-mail或會員中心通知。</p>
            <p>※ 提醒您，黑貓宅急便週日無收送件之服務，敬請見諒。</p>
            <p>
              ※
              惟在天氣狀況不佳及交通道路中斷等配送困難的情況下，送達時間有可能變動。
            </p>
            <br></br>
            <p>若出貨量增加，出貨時間，請依據最新消息之公告說明為準！</p>
            <a href="/">
              <u>【最新消息】</u>
            </a>
          </div>
        </li>
        <li>
          <div class="abreast2">
            <div>
              <h4>Q7. 如何至門市取貨？</h4>
            </div>
            <div class="stretch_button"></div>
          </div>
          <div class="answer">
            <p>
              待收到「貨到門市通知函」或簡訊後，請至您所指定之門市取貨並告知店員您的姓名且核對包裹姓名是否正確，並支付訂購商品金額即可，若您不克前往領取，建議您可請家人或朋友代領亦可。
            </p>
            <p>
              商品送達門市日起算7日內，請務必完成取件喔！(如：商品於10/1送達門市，請於10/8
              23:59前完成取件，逾期則退回物流中心。)
            </p>
            <p style={{ color: "#c14948" }}>
              【特別提醒】若訂單使用『點數』全額扣抵（即應付金額=0），領貨時將不需支付任何費用，請務必攜帶訂購人的身份證、駕照或印有相片的健保卡前往指定門市取件，取貨不付款貨件僅接受本人領取。
            </p>
          </div>
        </li>
        <li>
          <div class="abreast2">
            <div>
              <h4>Q8. 沒有在領取的期限內取貨該怎麼辦？</h4>
            </div>
            <div class="stretch_button"></div>
          </div>
          <div class="answer">
            <p>
              若您逾期未完成取貨或簽收時，商品將會退回本公司，訂單亦將自動取消無法重新配送，
            </p>
            <p>如您仍需要該商品，請再次重新上網訂購。</p>
            <br></br>
            <p>提醒您，若有以下情況，將影響您未來下單的結帳方式：</p>
            <p>1.未於通知期限內至指定門巿取貨</p>
            <p>2.貨到付款未取/拒收件</p>
            <p>若達2次以上(含)，未來將無法再使用該付款方式下單。</p>
            <br></br>
            <p>請您與我們共同珍惜寶貴的訂購資源及維護自身權益。</p>
          </div>
        </li>
        <li>
          <div class="abreast2">
            <div>
              <h4>Q9. 門市訂單可否修改配送門市？</h4>
            </div>
            <div class="stretch_button"></div>
          </div>
          <div class="answer">
            <p>
            因超商門市取貨購物流程，須連結到超商訂單系統中，並非單獨於本公司系統中完成，若您完成超商門市選取後，若非因門市自身暫停服務問題，將無法再變更門市，請您見諒！
            </p>
            <p>
            您可由「會員登入」查詢，如訂單尚未進入包裝作業，您可自行取消訂單，再重新下單選擇正確的取件門市即可。
            </p>
          </div>
        </li>
        <li>
          <div class="abreast2">
            <div>
              <h4>Q10. 門市訂單可否修改取貨時間？</h4>
            </div>
            <div class="stretch_button"></div>
          </div>
          <div class="answer">
            <p>
            因超商取貨服務時限為超商訂定作業規範，無法依個人需求彈性更動，請您見諒！
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
export default FAQDeliveryPage;
