import "bootstrap/dist/css/bootstrap.min.css";
import "../../css/faq.css";
import React from "react";
import { Link, Route, Switch, useRouteMatch } from "react-router-dom";
import FAQShoppingPage from "./faq_shopping";
import FAQDeliveryPage from "./faq_delivery";
import FAQRefundPage from "./faq_refund";
import FAQBillPage from "./faq_bill";

const CustomerServicePage = () => {
  let { path, url } = useRouteMatch();
  return (
    <div className="container d-flex justify-content-center flex-column">
      {/* 搜尋列 */}
      <div id="search_container" class="search_css">
        <div class="fax_input_wrapper">
          <img
            src="/img/customer_service/FAQ.png"
            alt="FAQ_picture"
            class="FAQ_picture"
          />
          <div id="inputWrapper" class="inputWrapper_frame">
            <img
              src="/img/customer_service/earch_icon.png"
              alt=""
              class="search_icon"
            />
            <input
              id="input"
              class="input_content"
              type="search"
              autocomplete="off"
              spellcheck="false"
              aria-live="polite"
              placeholder="輸入關鍵字查詢"
            />
          </div>
        </div>
        <img
          src="/img/customer_service/Family_games.png"
          alt="Family_games"
          class="Family_games_picture"
        />
      </div>
      <div class="FAQ_outer">
        {/* 外框背景 */}
        <div class="FAQ_Content">
          {/* 內文框架*/}
          <div class="content_title">
            {/* 內文標題*/}
            <a href="/">
              <img
                src="/img/customer_service/front_page_icon.png"
                alt=""
                class="front_page_icon"
              />
            </a>
            <a href="/" class="faq hover_style">
              首頁
            </a>
            <span>
              &nbsp;>&nbsp;
              <a href="http://localhost:3000/faq" class="faq hover_style">
                客服中心
              </a>
              &nbsp;>&nbsp;會員常見問題
            </span>
            <img
              src="/img/customer_service/dice.png"
              alt=""
              class="dice_icon"
            />
          </div>

          <div class="abreast">
            {/*分類&問題並排框*/}
            <div class="content_category">
              {/* 內文左側分類*/}
              <Link
                class="faq_options hover_style"
                to={`${url}`}
              >
                <div class="opions_frame">
                <div class="content_icon shadow_red">
                  </div>
                  <h4>常會員見問題</h4>
                </div>
              </Link>
              <Link
                class="faq_options hover_style"
                to={`${url}/shopping`}
              >
                <div class="opions_frame">
                  <img
                    src="/img/customer_service/shopping_icon.png"
                    alt=""
                    class="content_icon"
                  />
                  <h4>購物常見問題</h4>
                </div>
              </Link>
              <Link
                class="faq_options hover_style"
                to={`${url}/delivery`}
              >
                <div class="opions_frame">
                  <img
                    src="/img/customer_service/money_package_icon.png"
                    alt=""
                    class="content_icon"
                  />
                  <h4>配送取貨問題</h4>
                </div>
              </Link>
              <Link
                class="faq_options hover_style"
                to={`${url}/refund`}
              >
                <div class="opions_frame">
                  <img
                    src="/img/customer_service/money_icon.png"
                    alt=""
                    class="content_icon"
                  />
                  <h4>退換貨及退款</h4>
                </div>
              </Link>
              <Link
                class="faq_options hover_style"
                to={`${url}/bill`}
              >
                <div class="opions_frame">
                  <img
                    src="/img/customer_service/check_finance_icon.png"
                    alt=""
                    class="content_icon"
                  />
                  <h4>發票常見問題</h4>
                </div>
              </Link>
            </div>
            <Switch>
              <Route exact path={path}>
                {/* 內文問題框架 */}
                <div class="content_question">
                  <h3>&nbsp;&nbsp;&nbsp;&nbsp;會員常見問題 :</h3>
                  {/* 問題標題 */}
                  <ul class="question_list">
                    {/* 問題項目 */}
                    <li>
                      <div class="abreast2">
                        <div>
                          <h4>Q1. 該如何加入會員呢？</h4>
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
                        ※
                        如更新E-mail帳號，請留意新信箱是否可正常收取lativ相關信件通知喔。
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
              </Route>
              <Route path={`${path}/shopping`} component={FAQShoppingPage} />
              <Route path={`${path}/delivery`} component={FAQDeliveryPage} />
              <Route path={`${path}/refund`} component={FAQRefundPage} />
              <Route path={`${path}/bill`} component={FAQBillPage} />
            </Switch>
            {/* div結尾(內文問題框架) */}
          </div>
          {/* div結尾(分類 &問題並排框) */}
        </div>
        {/* div結尾(內文框) */}
      </div>{" "}
      {/* div結尾(外框背景) */}
      {/* footer */}
    </div>
  );
};
export default CustomerServicePage;
