import "bootstrap/dist/css/bootstrap.min.css";
import "../../css/faq.css";
import React from "react";
const FAQBillPage = () => {
  return (
    <div class="content_question">
      {/* 內文問題框架 */}
      <h3>&nbsp;&nbsp;&nbsp;&nbsp;發票常見問題 :</h3>
      {/* 問題標題 */}
      <ul class="question_list">
        {/* 問題項目 */}
        <li>
          <div class="abreast2">
            <div>
              <h4>Q1. 什麼是「電子發票」？商品收到了，發票怎麼沒一起附上？</h4>
            </div>
            <div class="stretch_button"></div>
          </div>
          <div class="answer">
            <p>
              根據財政部令「電子發票實施作業要點」，於消費開立之「二聯電子發票」、「三聯電子發票」，不主動寄送，
              <br></br>遊戲職人亦會將發票號碼上傳至政府平台。
            </p>
            <br></br>
            <p>
              或您可於出貨後24小時於
              <a
                href="http://localhost:3000/memberCenter/memberProduct"
                style={{ textDecoration: "none" }}
              >
                【訂單查詢】
              </a>
              中查閱訂單發票內容，相關資料請參考財政部電子發票整合服務平台 。
            </p>
            <br></br>
            <p>
              目前遊戲職人消費開立之「三聯電子發票」為會員載具，尚未開放共通性載具選項。
            </p>
          </div>
        </li>
        <li>
          <div class="abreast2">
            <div>
              <h4>
                Q2. 如何選擇開立三聯電子發票？該如何取得紙本或成為會計憑證報帳？
              </h4>
            </div>
            <div class="stretch_button"></div>
          </div>
          <div class="answer">
            <p>
              請在結帳流程中的「發票資訊」處，選擇三聯電子發票並填寫統一編號
            </p>
            <br></br>
            <p>
              您可於出貨後24小時至
              <a
                href="http://localhost:3000/memberCenter/memberProduct"
                style={{ textDecoration: "none" }}
              >
                【訂單查詢】
              </a>
              中下載開立的發票，該三聯電子發票證明聯，即為會計憑證，<br></br>
              亦可透過此單據向公司報帳進行核銷(可直接黏貼於傳票上)，相關說明，請參考財政部。
            </p>
          </div>
        </li>
        <li>
          <div class="abreast2">
            <div>
              <h4>
                Q3. 使用電子發票，會有人通知我中獎嗎？電子發票如何兌領獎？
              </h4>
            </div>
            <div class="stretch_button"></div>
          </div>
          <div class="answer">
            <p>
              「二聯式電子發票」每逢單月26日將由財政部自動對獎（已索取紙本／已捐贈／已作廢發票除外），並於單月28日產生中獎清冊供營業人下載索取。
            </p>
            <br></br>
            <span>各載具對應之中獎通知單位：</span>
            <table
              border="1"
              bordercolor="#dddddd"
              cellpadding="0"
              cellspacing="0"
              width="100%"
            >
              <tbody>
                <tr>
                  <td align="center" bgcolor="#eeeeee">
                    {" "}
                    載具
                  </td>
                  <td align="center" bgcolor="#eeeeee">
                    {" "}
                    狀態
                  </td>
                  <td align="center" bgcolor="#eeeeee" width="25%">
                    {" "}
                    中獎通知單位
                  </td>
                  <td align="center" bgcolor="#eeeeee" colspan="2">
                    {" "}
                    如何領取中獎發票
                  </td>
                </tr>
                <tr>
                  <td align="center" rowspan="2">
                    {" "}
                    遊戲職人會員帳號
                  </td>
                  <td width="80" height="95" align="center">
                    {" "}
                    未歸戶<br></br>
                    （註1）
                  </td>
                  <td width="80" height="95" align="center" valign="middle">
                    遊戲職人將於單月29日（遇假日順延）依「財政部電子發票整合服務平台」所提供之中獎清冊以簡訊及會員消息中心發送中獎通知給您。
                  </td>
                  <td height="95" colspan="2" align="center" valign="middle">
                    請於兌獎期限內至7-11超商列印紙本發票兌獎【
                    <a
                      href="https://www.ibon.com.tw/operate.aspx?fromPage=life.aspx&routeIDListInfo=4;F021;0,7,39,106#gsc.tab=0"
                      target="_blank"
                    >
                      ibon中獎發票列印步驟
                    </a>
                    】
                  </td>
                </tr>
                <tr>
                  <td align="center" rowspan="2">
                    <p align="center">
                      {" "}
                      已歸戶<br></br>
                      （註2）
                    </p>
                  </td>
                  <td align="center" rowspan="2" valign="middle" width="35%">
                    由財政部電子發票整合服務平台依據消費者留存之電子郵件以及手機簡訊通知中獎，亦可至財政部電子發票整合服務平台或便利商店多媒體服務機查詢。
                  </td>
                  <td align="center">
                    {" "}
                    已設定<br></br>
                    領獎帳戶
                  </td>
                  <td align="center" valign="middle" width="30%">
                    獎金將於開獎次月6號直接匯入歸戶指定帳號中(扣除應繳納稅額)。
                  </td>
                </tr>
                <tr>
                  <td align="center">
                    {" "}
                    手機條碼<br></br>
                    自然人憑證
                  </td>
                  <td align="center">
                    {" "}
                    未設定<br></br>
                    領獎帳戶
                  </td>
                  <td align="center" valign="middle" width="30%">
                    中獎人可至電子發票平台或多媒體服務機（如：7-11 ibon／全家
                    FamiPort／萊爾富 Life-ET／OK．go）列印紙本發票兌獎。
                  </td>
                </tr>
                <tr>
                  <td align="center" colspan="5" valign="middle">
                    <table
                      border="0"
                      cellpadding="0"
                      cellspacing="0"
                      width="98%"
                    >
                      <tbody>
                        <tr>
                          <td height="76">
                            （註1）※
                            如您未曾至財政部電子發票整合服務平台進行手機條碼或自然人憑證之歸戶設定，您的發票即為未歸戶。
                            <br></br>
                            （註2）※
                            建議您，可至財政部電子發票整合服務平台進行歸戶設定，即可透過平台自動對獎及兌獎至指定帳戶。
                          </td>
                        </tr>
                      </tbody>
                    </table>
                  </td>
                </tr>
              </tbody>
            </table>
          </div>
        </li>
        <li>
          <div class="abreast2">
            <div>
              <h4>Q4. 發票可以指定日期或開立其它品名嗎？</h4>
            </div>
            <div class="stretch_button"></div>
          </div>
          <div class="answer">
            <p>
              因發票採用系統化自動開立，因此發票上的品名將依實際訂購的商品名稱開立，請恕無法指定開立其它品名或指定開立日期。
            </p>
          </div>
        </li>
        <li>
          <div class="abreast2">
            <div>
              <h4>Q5. 購物發票，是否可開立為多張發票？</h4>
            </div>
            <div class="stretch_button"></div>
          </div>
          <div class="answer">
            <p>
              因lativ發票採用系統化自動開立，故一筆訂單對應一張發票，請恕無法分別開立多張。如有分別開立需求，請將商品分別下單。
            </p>
          </div>
        </li>
        <li>
          <div class="abreast2">
            <div>
              <h4>Q6. 若電子發票輸入資料有誤，是否還能修改？</h4>
            </div>
            <div class="stretch_button"></div>
          </div>
          <div class="answer">
            <p>
              若於訂購時已選擇發票類型，訂單成立後即無法再換開其他類型電子發票，請於消費時確認應取得二聯（個人消費）或三聯（報帳用）發票，為配合國稅局勸止二聯換開三聯之政策，本公司有權利考量各因素後拒絕換開發票。若誤選請盡速取消訂單重新訂購。
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
export default FAQBillPage;
