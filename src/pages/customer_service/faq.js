import "bootstrap/dist/css/bootstrap.min.css";
import "../../css/faq.css";
import React, { useState } from "react";
import FAQBlock from "./faq_block";

const faqQuestionCategories = {
  customer: [
    {
      question: "該如何加入會員呢？",
      answerBlock: (
        <>
          <p>
            電腦版：請您點選右上角
            <a href="/login" class="hover_style" alt="">
              「登入/註冊」
            </a>
            ，可選擇「手機號碼驗證註冊」或「使用Facebook快速註冊」。
          </p>
          <p>
            手機版/APP：請您點選右下角「個人」，可選擇以「手機號碼」、「Facebook」或「Apple
          </p>
          ID」(限iOS用戶)註冊。
        </>
      ),
    },
    {
      question: "忘記密碼怎麼辦？",
      answerBlock: (
        <>
          若您忘記密碼，請您先「
          <a href="/login" class="hover_style" alt="">
            <a href="/login" class="hover_style" alt="">
              會員登入
            </a>
          </a>
          」後，點選「
          <a href="/login" class="hover_style" alt="">
            忘記密碼」
          </a>
          再輸入註冊的電子郵件/手機號碼，系統會自動發送密碼重設通知給您，再請您依照通知步驟重新設定密碼即可。
        </>
      ),
    },
    {
      question: "忘記登入的會員帳號？",
      answerBlock: (
        <>
          煩請使用「
          <a href="/customer_service_message" class="hover_style" alt="">
            客服留言
          </a>
          」直接與客服中心聯繫。
        </>
      ),
    },
    {
      question: "該如何修改個人資料及密碼？",
      answerBlock: (
        <>
          煩請使用「
          <a href="/customer_service_message" class="hover_style" alt="">
            客服留言
          </a>
          」直接與客服中心聯繫。
          <p>
            電腦版：請「
            <a href="/login" class="hover_style" alt="">
              <a href="/login" class="hover_style" alt="">
                會員登入
              </a>
            </a>
            」至「個人資料及密碼修改」即可進行變更。
          </p>
          <p>
            手機版/APP：請「
            <a href="/login" class="hover_style" alt="">
              <a href="/login" class="hover_style" alt="">
                會員登入
              </a>
            </a>
            」後至「個人」上方大頭照點選「姓名」後即可進行變更。
          </p>
          <p style={{ color: "#c14948" }}>
            ※
            如更新E-mail帳號，請留意新信箱是否可正常收取遊戲職人相關信件通知喔。
          </p>
        </>
      ),
    },
    {
      question: "如何透過「線上客服」聯繫？",
      answerBlock: (
        <>
          請於上班時間至「
          <a
            href="/memberCenterundefined/memberProduct"
            class="hover_style"
            alt=""
          >
            訂單查詢
          </a>
          」中「客服問與答」點選「
          <a href="/customer_service_message" class="hover_style" alt="">
            客服留言
          </a>
          」，即可進行諮詢。 上班時間09:00-18:00(例假日暫不提供服務)
        </>
      ),
    },
    {
      question: "常收不到訂單確認信、商品到貨通知信、會員電子報？",
      answerBlock: (
        <>
          若未於收件夾看到Game
          Master的E-mail可F至垃圾信件夾內或是促銷內容分頁內搜尋，並且建議將Game
          Master的E-mail設定為收件連絡者，可盡量避免收不到訂單信件、商品到貨訊息及錯過優惠訊息的遺憾。
        </>
      ),
    },
    {
      question: "如何訂閱及取消電子報？",
      answerBlock: (
        <>
          請於官網右下角輸入您的電子信箱定點選【訂閱電子報】，即可完成訂閱。登入會員後，請至「
          <a href="/memberCenter:account/" class="hover_style" alt="">
            我的帳戶
          </a>
          」登入後，再點選「
          <a href="/memberCenterundefined/memSelf" class="hover_style" alt="">
            會員資訊
          </a>
          」即可修改訂閱狀態。
        </>
      ),
    },
    {
      question: "加入遊戲職人會員有什麼好處?",
      answerBlock: (
        <>
          遊戲職人將不定期舉辦會員優惠活動，加入遊戲職人會員可以即時獲得優惠及新品上市等最新訊息。
        </>
      ),
    },
  ],
  shopping: [
    {
      question: "購物流程說明",
      answerBlock: (
        <>
          <p>
            第一次購物：註冊帳號＞輸入手機號碼註冊＞選擇商品＞加入購物車＞前往結帳＞填寫收件資訊＞完成購物{" "}
          </p>
          <p>
            非第一次購物：選擇商品＞加入購物車＞前往結帳＞會員登入＞填寫收件資訊＞完成購物
          </p>
          <p style={{ color: "#c14948" }}>
            ※提醒您，商品加入購物車但未結帳前，並無保留商品庫存功能，商品庫存分配將以結帳順序為依據。
          </p>
        </>
      ),
    },
    {
      question: "目前提供哪些付款方式？",
      answerBlock: (
        <>
          <p>目前提供付款方式有幾種：</p>
          <p>1. 『超商取貨付款』，配合通路：7-11、全家</p>
          <p>2. 宅配貨到付款（限台灣本島） ※ 配合的宅配公司為：黑貓宅急便</p>
        </>
      ),
    },
    {
      question: "如何查詢目前訂單的處理情況？",
      answerBlock: (
        <>
          <p>
            完成訂購商品時，我們會同步發訂單確認函到您的信箱，內含訂單編號。若後續需要查詢訂單狀態，請登入「
            <a href="/memberCenter:account/" class="hover_style" alt="">
              我的帳戶
            </a>
            」的「
            <a
              href="/memberCenterundefined/memberProduct"
              class="hover_style"
              alt=""
            >
              訂單查詢
            </a>
            」查詢。
          </p>
        </>
      ),
    },
    {
      question: "如何修改、加訂或合併訂單？",
      answerBlock: (
        <>
          <p>
            1.
            為避免影響商品庫存及帳務錯誤，請恕我們無法為您再將訂單『修改』或『加購』或『合併』訂單商品。
          </p>
          <p>
            {" "}
            2. 若您已結帳完成訂單而有此需求，建議您可自行點選『取消訂單』。
          </p>
          <br></br>
          <p style={{ color: "#c14948" }}>
            ※提醒您，如遇訂單狀態已完成出貨無法攔截時，請恕無法協助取消訂單；如有不適合的商品，再請您於七日鑑賞期內辦理退貨服務。
          </p>
        </>
      ),
    },
    {
      question: "如何計算「七天鑑賞期」？",
      answerBlock: (
        <>
          <p>根據消保法規定七日鑑賞期權益 於完成簽收取件的隔日起算至第7天止</p>
          <p>(如您的收件地址有管理員代收，則以代收的隔日起算)。</p>
          <br></br>
          <p>
            提醒您！以下情況將無法為您辦理退貨，煩請留意以免影響您的退貨權益。
          </p>
          <p>1.商品已有使用痕跡或髒污或味道，請恕無法接受退貨。</p>
          <p>2.退回時，商品配件不全。</p>
          <p>3.已在商品上加工，非商品原樣。</p>
          <p>4.活動贈品未退回。</p>
          <p>5.超過七天鑑賞期。</p>{" "}
        </>
      ),
    },
    {
      question: "如何知道是否付款成功？",
      answerBlock: (
        <>
          <p>
            如果您付款成功，系統將會發送一封訂購成功通知信至您訂購時所留存的聯絡
            E-mail，您可再進行確認。
          </p>
          <p style={{ color: "#c14948" }}>
            ※ 如您是 yahoo 或是 hotmail
            可先至垃圾郵件匣進行確認，並強烈建議您使用Gmail或非Yahoo或hotmail信箱，以保障您訂購後的相關權益。
          </p>
        </>
      ),
    },
    {
      question: "商品出貨後會用什麼方式通知？",
      answerBlock: (
        <>
          <p>商品出貨後，系統將會發送『出貨通知信』至訂購人之聯絡 E-mail。</p>
        </>
      ),
    },
    {
      question: "會員點數折抵說明",
      answerBlock: (
        <>
          <p>獲得之折扣點數，在結帳時點選【我要使用點數】可立即折抵。</p>
          <p>
            會員點數經使用後即失效，無法因取消訂單／退貨／換貨／重新下單，或任何操作上因素要求退回，亦不得轉成等值現金或商品。
          </p>
        </>
      ),
    },
  ],
  delivery: [
    {
      question: "可選擇的配送方式有那些？",
      answerBlock: (
        <>
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
                  ，到店時會發送簡訊、E-mail或會員中心通知您前往取貨。
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
        </>
      ),
    },
    {
      question: "請問運費如何計算？",
      answerBlock: (
        <>
          <p>
            以下為常態免運費標準，實際請依官網行銷活動公告為依據
            (訂單金額無法合併計算)。
          </p>
          <p>
            1.
            『超商取貨付款』:單筆購物滿1000元，即享有免運費優惠；未達免運條件，將酌收50元物流費。
          </p>
          <p>2. 宅配訂單:單筆購物滿1200元；未達免運條件，將酌收60元物流費。</p>
        </>
      ),
    },
    {
      question: "如何更改訂購內容、送貨地址或取消訂單？",
      answerBlock: (
        <>
          <p>
            <b>修改訂單：</b>
          </p>
          <p>
            訂單送出後即無法修改訂單內容，如需修改，您可由「
            <a href="/login" class="hover_style" alt="">
              會員登入
            </a>
            」登入帳號，取消訂單後再重新下單。
          </p>
          <p>
            <b>取消訂單：</b>
          </p>
          <p>
            訂單尚未進入包裝作業前您可由「
            <a href="/login" class="hover_style" alt="">
              會員登入
            </a>
            」登入帳號，自行取消訂單，
          </p>
          <p>
            由「
            <a href="/login" class="hover_style" alt="">
              會員登入
            </a>
            」登入帳號 ＞ 進入「
            <a
              href="/memberCenterundefined/memberProduct"
              class="hover_style"
              alt=""
            >
              訂單查詢
            </a>
            」狀態點選「取消訂單」，即完成取消該筆訂單。
          </p>{" "}
          <br></br>
          <p>※ 訂單取消後即無法復原。</p>
          <p>※ 若訂單商品已進入包裝作業，請恕無法為您取消訂單。</p>
          <p>※ 提醒您，若您取消訂單後重新訂購，商品庫存請依當時頁面為主！</p>
        </>
      ),
    },
    {
      question: "台灣外島地區可以寄送嗎？",
      answerBlock: (
        <>
          <p>
            您可以選擇『超商取貨付款』，將以郵局海運配送，預計3-7日內配達，而送達時間會因天氣狀況、船隻班次而有變動的可能性。
          </p>
        </>
      ),
    },
    {
      question: "訂購商品後需幾天的時間才可以收到商品呢？",
      answerBlock: (
        <>
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
          <a href="/" class="hover_style">
            <u class="hover_style">【最新消息】</u>
          </a>
        </>
      ),
    },
    {
      question: "如何至門市取貨？",
      answerBlock: (
        <>
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
        </>
      ),
    },
    {
      question: "沒有在領取的期限內取貨該怎麼辦？",
      answerBlock: (
        <>
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
        </>
      ),
    },
    {
      question: "門市訂單可否修改配送門市？",
      answerBlock: (
        <>
          <p>
            因超商門市取貨購物流程，須連結到超商訂單系統中，並非單獨於本公司系統中完成，若您完成超商門市選取後，若非因門市自身暫停服務問題，將無法再變更門市，請您見諒！
          </p>
          <p>
            您可由「
            <a href="/login" class="hover_style" alt="">
              會員登入
            </a>
            」查詢，如訂單尚未進入包裝作業，您可自行取消訂單，再重新下單選擇正確的取件門市即可。
          </p>
        </>
      ),
    },
    {
      question: "門市訂單可否修改取貨時間？",
      answerBlock: (
        <>
          <p>
            因超商取貨服務時限為超商訂定作業規範，無法依個人需求彈性更動，請您見諒！
          </p>
        </>
      ),
    },
  ],
  refund: [
    {
      question: "如何辦理退換貨？",
      answerBlock: (
        <>
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
            alt=""
          />
          <p>2.離島或鑑賞期內自行寄回退貨商品</p>
          <p>
            您可利用郵局小包掛號或包裹寄回<b>(勿使用貨到付款)</b>。
          </p>
          <br></br>
          <p style={{ color: "#c14948" }}>
            ※請另外準備一個完整乾淨的袋子將退貨商品「完整密封」(請勿使用商品原透明包裝袋做為退貨外包裝），以避免商品於運送途中掉出遺失。如退貨商品因未妥善包裝以致商品遺失，將以實際收到之商品辦理退貨程序。
          </p>
        </>
      ),
    },
    {
      question: "退款方式及退款時間?",
      answerBlock: (
        <>
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
          <p style={{ color: "#c14948" }}>※ 帳號填寫注意事項：</p>
          <p style={{ color: "#c14948" }}>
            &nbsp;&nbsp;&nbsp;1.
            填寫退款帳號時請注意：提款卡卡號不一定等於存褶帳號，請以存褶帳號為準。
          </p>
          <p style={{ color: "#c14948" }}>
            &nbsp;&nbsp;&nbsp;2. 一般銀行帳戶，請勿自行加入銀行代碼
            ，帳號欄位請填寫存褶顯示之帳號即可，以免造成轉帳錯誤或失敗。
          </p>
          <p style={{ color: "#c14948" }}>
            &nbsp;&nbsp;&nbsp;3.中華郵政（代碼700）
            帳戶，帳號則需填寫存簿之【局號】＋【帳號】。
          </p>
        </>
      ),
    },
    {
      question: "什麼情況無法辦理退貨？",
      answerBlock: (
        <>
          <p>1. 超過7天退貨期限。</p>
          <p>
            2.
            商品已有使用痕跡或人為造成髒污、商品配件丟失或損毀等，恕不接受退貨。
          </p>
        </>
      ),
    },
    {
      question: "七天鑑賞期內退貨",
      answerBlock: (
        <>
          <p>
            根據消費者保護法之規定，遊戲職人提供您「享有商品到貨七天鑑賞期
            <b>(非試用期)</b> ， 隨時解約退貨」之權益。
          </p>
          <p style={{ color: "#c14948" }}>
            ※提醒您:商品退貨時，必須回復原狀，亦即必須回復至您收到商品時的原始狀態
            (包含商品、附件、內外包裝、隨機文件、贈品、發票等）。
          </p>{" "}
          <br></br>
          <p>下列情形可能影響您的退貨權限：</p>
          <p>
            1.在不影響您檢查商品情形下，您將商品包裝毀損、封條移除、貼膠移除或標籤拆除等情形。
          </p>
          <p>
            2.其他逾越檢查之必要，或可歸責於您之事由，致商品有毀損、滅失或變更者。
          </p>
          <p>
            3.請您在收到商品後立即確認商品狀況，若有瑕疵、缺失、毀損等重大瑕疵，請於收到商品七天鑑賞期內，於上班時間來電或完成退貨程序，
            我們會儘快為您處理。
          </p>
        </>
      ),
    },
    {
      question: "退款說明",
      answerBlock: (
        <>
          <p>
            商品確認收回後，提供上您的相關資料，需 3-5
            個工作天進行退款（不含假日）因繳款方式不同，退款方式分為二種：
          </p>
          <ul>
            <li class="listtext__item">
              信用卡：我們將透過綠界科技-第三方金流協助您辦理退刷作業。退刷申請後非立刻退刷完成，發卡銀行需要預計7-14個工作天(不含假日)退刷完成。
            </li>
            <li class="listtext__item">
              ATM 繳費：需提供您的匯款資料（存摺封面）E-mail
              至客服中心，退款申請後預計7-10天(不含假日)退還至您指定的帳戶中。
            </li>
          </ul>
        </>
      ),
    },
    {
      question: "換貨說明",
      answerBlock: (
        <>
          <ul>
            <li class="listtext__item">
              如需要換貨，請先聯絡客服，說明換貨原因。
            </li>
            <li class="listtext__item">若非商品瑕疵，恕不接受退換貨。</li>
            <li class="listtext__item">
              無條件退換貨須符合下述條件其中一項：
              <ol>
                <li>實際收到的商品與所訂購商品不符合。</li>
                <li>產品包裝內配件不齊全或商品規格與外包裝說明不符合。</li>
                <li>商品有瑕疵或於運送過程中有損壞者。</li>
              </ol>
            </li>
            <li class="listtext__item">
              <p style={{ color: "#c14948" }}>
                商品退換貨必須整筆訂單一起辦理退貨，且商品為全新狀態且完整包裝（包含外包裝、贈品等），恕無法部分退貨。
              </p>
              商品主體及其內容物 ( 如各項零附件、手冊、 贈品等 )
              均不可有短缺、破損、書寫文字或標記、使用之破壞 (
              如刮痕、摔傷、擠壓變形、受潮)
              及任何目視可見之人為損壞或人為使用痕跡。
            </li>
            <li class="listtext__item">
              到貨商品超過七天(含假日)以上，恕不接受退換貨。
            </li>
          </ul>
        </>
      ),
    },
  ],
  bill: [
    {
      question: "什麼是「電子發票」？商品收到了，發票怎麼沒一起附上？",
      answerBlock: (
        <>
          <p>
            根據財政部{" "}
            <a
              href="https://gazette.nat.gov.tw/EG_FileManager/eguploadpub/eg019159/ch04/type2/gov30/num8/Eg.htm"
              target="_blank"
              class="hover_style"
            >
              「電子發票實施作業要點」
            </a>
            ，於消費開立之「二聯電子發票」、「三聯電子發票」，不主動寄送，
            遊戲職人亦會將發票號碼上傳至政府平台，相關資料請參考{" "}
            <a
              href="https://www.einvoice.nat.gov.tw/ein_upload/html/ESQ/ESQ800W.html"
              target="_blank"
              class="hover_style"
            >
              電子發票說明
            </a>
            。
          </p>
          <br></br>
          <p>
            或您可於出貨後24小時於 【
            <a
              href="/memberCenterundefined/memberProduct"
              class="hover_style"
              alt=""
            >
              訂單查詢
            </a>
            】 中查閱訂單發票內容，相關資料請參考財政部電子發票整合服務平台 。
          </p>
          <br></br>
          <p>
            目前遊戲職人消費開立之「三聯電子發票」為會員載具，尚未開放共通性載具選項。
          </p>
        </>
      ),
    },
    {
      question: "什麼時候會收到我的發票？",
      answerBlock: (
        <>
          <ul>
            <li class="listtext__item">
              訂單成立後（完成付款），系統會同時開立發票，「綠界金流」及
              遊戲職人 官網會寄送發票開立通知的電子信件。也可於48小時後至{" "}
              <a href="https://www.einvoice.nat.gov.tw/index" target="_blank" class="hover_style">
                財政部電子發票整合服務平台
              </a>
              查詢。
            </li>
            <li class="listtext__item">
              公司戶電子發票：訂單成立後（完成付款），系統會同時開立發票，「綠界金流」及遊戲職人
              官網會寄送發票開立通知的電子信件。並且您可於「綠界金流」寄送的通知信中取得「電子發票證明聯」電子檔，即可自行列印紙本電子發票。
            </li>
          </ul>
        </>
      ),
    },
    {
      question: "如何選擇開立三聯電子發票？該如何取得紙本或成為會計憑證報帳？",
      answerBlock: (
        <>
          <p>請在結帳流程中的「發票資訊」處，選擇三聯電子發票並填寫統一編號</p>
          <br></br>
          <p>
            您可於出貨後24小時至 【
            <a
              href="/memberCenterundefined/memberProduct"
              class="hover_style"
              alt=""
            >
              訂單查詢
            </a>
            】 中下載開立的發票，該三聯電子發票證明聯，即為會計憑證，<br></br>
            亦可透過此單據向公司報帳進行核銷(可直接黏貼於傳票上)，相關說明，請參考財政部。
          </p>{" "}
        </>
      ),
    },
    {
      question: "使用電子發票，會有人通知我中獎嗎？電子發票如何兌領獎？",
      answerBlock: (
        <>
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
                    class="hover_style"
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
                  <table border="0" cellpadding="0" cellspacing="0" width="98%">
                    <tbody>
                      <tr height="76">
                        （註1）※
                        如您未曾至財政部電子發票整合平台進行手機條碼或自然人憑證之歸戶設定，即為未歸戶。
                        <br></br>
                        （註2）※ 建議您，可至{" "}
                        <a
                          href="https://www.einvoice.nat.gov.tw/index"
                          target="_blank"
                          class="hover_style"
                        >
                          財政部電子發票整合平台
                        </a>
                        進行歸戶設定，即可透過平台自動對獎及兌獎至指定帳戶。
                      </tr>
                    </tbody>
                  </table>
                </td>
              </tr>
            </tbody>
          </table>
        </>
      ),
    },
    {
      question: "列印了訂單查詢內的發票資訊電子檔，可以拿這張紙去銀行行庫兌獎嗎？",
      answerBlock: (
        <>
        <ul>
            <li class="listtext__item">
            依統一發票使用辦法規定，發票兌獎必須使用電子發票證明聯正本。(一張發票僅有一張正本，訂單查詢內所提供的列印僅供參考之用，不具兌獎的功能。)
            </li>
            <li class="listtext__item">
            其他有關領獎事項依「統一發票給獎辦法」規定辦理。如有任何兌獎疑慮，可至 <a href="https://www.einvoice.nat.gov.tw/index" target="_blank" class="hover_style">
                財政部電子發票整合服務平台
              </a>-常用功能查詢，或撥打電子發票24小時免付費專線
              <a href="tel:0800-521-988" title="電子發票24小時免付費專線">0800-521-988</a>。
            </li>
          </ul>
        </>
      ),
    },
    {
      question: "發票可以指定開立其它品名、金額或日期嗎？",
      answerBlock: (
        <>
          <p>本公司已全面導入電子式發票系統，發票一旦開立即完成無法更動其內容，發票商品名稱將依訂購當時品名和金額開立，請恕無法指定開立日期、其它品名或金額。</p>
        </>
      ),
    },
    {
      question: ".一筆訂單可以開立多張發票嗎？",
      answerBlock: (
        <>
          <p>因本公司發票採用系統化自動開立，故一筆訂單對應一張發票，請恕無法分別開立多張。如有分別開立需求，請將商品分別下單。</p>
        </>
      ),
    },
    {
      question: "發票欲申請換開為個人戶或公司戶？",
      answerBlock: (
        <>
          <p>依統一發票使用辦法規定，只有書寫錯誤得換開；個人戶發票無法換開為公司戶發票；公司戶發票無法換開為個人戶發票。發票一經開立，對於買方名稱及統一編號不得任意更改或應買方要求改開其他營利事業及統一編號。</p>
        </>
      ),
    },
    {
      question: "公司戶收到發票後，是否還能修改抬頭、統編？",
      answerBlock: (
        <>
          <p>收到發票五日內，若資料有誤，需更改抬頭名稱或統一編號，請您於「<a
              href="/memberCenterundefined/memberProduct"
              class="hover_style"
              alt=""
            >
              訂單查詢
            </a>」頁面，點選   <a href="/customer_service_message" class="hover_style" alt="">
            【聯絡客服】
          </a>，註明要修改的抬頭、統編及發票寄送EMAIL地址，客服人員將會盡速為您處理。以利為您換開發票，一般處理時間需約二週。</p>
        </>
      ),
    },
    {
      question: "商品猶豫期間內辦理退貨，但沒有發票那該怎麼辦？",
      answerBlock: (
        <>
<ul>
            <li class="listtext__item">
            「個人電子發票」：退貨時無需附回發票；我們將於退貨作業完成後，於系統直接作廢發票。
            </li>
            <li class="listtext__item">
            「公司戶電子發票」：因您已線上同意退訂退款說明，故毋須將紙本折讓單寄回本公司，如已下載列印電子發票證明聯進行報帳，請務必下載列印退貨折讓單，並交付您的財會單位。
            </li>
          </ul>
        </>
      ),
    },
    
  ],
};

const categoryEnChMapping = {
  customer: "常見會員問題",
  shopping: "購物常見問題",
  delivery: "配送取貨問題",
  refund: "退換貨及退款",
  bill: "發票常見問題",
};

const CustomerServicePage = () => {
  const [currentFAQs, setcurrentFAQs] = useState(
    faqQuestionCategories.customer
  );
  const [currentCategory, setCurrentCategory] = useState("customer");
  const [searchText, setSearchText] = useState("");

  const handleSearch = (event) => {
    if (event.key === "Enter") {
      const tempFAQs = [];
      for (let [category, faqs] of Object.entries(faqQuestionCategories)) {
        for (let faq of faqs) {
          console.log(faq.answerBlock.props);
          if (faq.question.includes(searchText)) {
            tempFAQs.push(faq);
          }
        }
      }
      setcurrentFAQs(tempFAQs);
    }
  };
  const selectCategory = (category) => {
    setcurrentFAQs(faqQuestionCategories[category]);
    setCurrentCategory(category);
    setIsShowMoreBlock(false);
  };

  // 顯示更多區塊
  const [isShowMoreBlock, setIsShowMoreBlock] = useState(false);
  const switchShowMoreBlock = () => {
    setIsShowMoreBlock(!isShowMoreBlock);
  };

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
              class="faq_input_content"
              type="search"
              autocomplete="off"
              spellcheck="false"
              aria-live="polite"
              placeholder="輸入關鍵字查詢"
              value={searchText}
              onInput={(e) => setSearchText(e.target.value)}
              onKeyDown={handleSearch}
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
              &nbsp;>&nbsp;{categoryEnChMapping[currentCategory]}
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
              <div
                class="opions_frame"
                onClick={() => selectCategory("customer")}
              >
                <img
                  src="/img/customer_service/person_icon.png"
                  alt=""
                  class="content_icon"
                />
                <h4>會員常見問題</h4>
              </div>
              <div
                class="opions_frame"
                onClick={() => selectCategory("shopping")}
              >
                <img
                  src="/img/customer_service/shopping_icon.png"
                  alt=""
                  class="content_icon"
                />
                <h4>購物常見問題</h4>
              </div>
              <div
                class="opions_frame"
                onClick={() => selectCategory("delivery")}
              >
                <img
                  src="/img/customer_service/money_package_icon.png"
                  alt=""
                  class="content_icon"
                />
                <h4>配送取貨問題</h4>
              </div>
              <div
                class="opions_frame"
                onClick={() => selectCategory("refund")}
              >
                <img
                  src="/img/customer_service/money_icon.png"
                  alt=""
                  class="content_icon"
                />
                <h4>退換貨及退款</h4>
              </div>
              <div class="opions_frame" onClick={() => selectCategory("bill")}>
                <img
                  src="/img/customer_service/check_finance_icon.png"
                  alt=""
                  class="content_icon"
                />
                <h4>發票常見問題</h4>
              </div>
            </div>
            {/* 內文問題框架 */}
            <div class="content_question">
              {/* 中間內文(問題回覆部分) */}
              <div
                className={
                  isShowMoreBlock
                    ? "content_question_qa_unfolded"
                    : "content_question_qa_folded"
                }
              >
                {currentFAQs.map((item, i) => (
                  <FAQBlock
                    key={item.question}
                    questionIndex={i + 1}
                    question={item.question}
                    answerBlock={item.answerBlock}
                  ></FAQBlock>
                ))}
              </div>
              <div>
                {/* 客服留言連結 */}
                <div>
                
                  <div class="expand_down" onClick={() => switchShowMoreBlock()}>
                  向下展開
                  </div>
                  {/* <img
                    src="/img/customer_service/drop_down.png"
                    alt=""
                    class="drop_down"
                  /> */}
                  <div class="poster__arrows">
        <div class="poster__arrow poster__arrow-1">

        </div> 
        <div class="poster__arrow poster__arrow-2">

        </div> 
        <div class="poster__arrow poster__arrow-3">

        </div>
        </div>
                
                </div>  
                <a href="/customer_service_message" class="hover_style link_message" >
                <div class="link_message_fram" >
                  <img
                    src="/img/customer_service/document_icon.png"
                    class="document_icon"
                    alt=""
                  />
                  <h4>客服留言</h4>
                  <p>我們會定時查看，</p>
                  <p>盡快回覆您!</p>
                </div>
                </a>
              </div>
            </div>
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
