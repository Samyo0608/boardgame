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
          電腦版：請您點選右上角「登入/註冊」，可選擇「手機號碼驗證註冊」或「使用Facebook快速註冊」。
          手機版/APP：請您點選右下角「個人」，可選擇以「手機號碼」、「Facebook」或「Apple
          ID」(限iOS用戶)註冊。
        </>
      ),
    },
    {
      question: "忘記密碼怎麼辦？",
      answerBlock: (
        <>
          若您忘記密碼，請您先「會員登入」後，點選「忘記密碼」
          再輸入註冊的電子郵件/手機號碼，系統會自動發送密碼重設通知給您，再請您依照通知步驟重新設定密碼即可。
        </>
      ),
    },
    {
      question: "忘記登入的會員帳號？",
      answerBlock: <>煩請直接與客服中心聯繫。</>,
    },
    {
      question: "該如何修改個人資料及密碼？",
      answerBlock: (
        <>
          電腦版：請「會員登入」至「個人資料及密碼修改」即可進行變更。
          手機版/APP：請「會員登入」後至「個人」上方大頭照點選「姓名」後即可進行變更。
          ※ 如更新E-mail帳號，請留意新信箱是否可正常收取lativ相關信件通知喔。
        </>
      ),
    },
    {
      question: "如何透過「線上客服」聯繫？？",
      answerBlock: (
        <>
          請於上班時間至「訂單查詢」中「客服問與答」點選「客服」，即可進行諮詢。
          上班時間09:00-18:00(例假日暫不提供服務)
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
            {" "}
            第一次購物：註冊帳號＞輸入手機號碼註冊＞選擇商品＞加入購物車＞前往結帳＞填寫收件資訊＞完成購物{" "}
            <p>
              非第一次購物：選擇商品＞加入購物車＞前往結帳＞會員登入＞填寫收件資訊＞完成購物
            </p>
            <p>
              ※提醒您，商品加入購物車但未結帳前，並無保留商品庫存功能，商品庫存分配將以結帳順序為依據。
            </p>
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
      question: "如何修改、加訂或合併訂單？",
      answerBlock: (
        <>
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
          <p>1.商品已有使用摺痕或髒污或味道，請恕無法接受退貨。</p>
          <p>2.退回時，商品配件不全。</p>
          <p>3.已在商品上加工，非商品原樣。</p>
          <p>4.活動贈品未退回。</p>
          <p>5.超過七天鑑賞期。</p>{" "}
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
          <a href="/">
            <u>【最新消息】</u>
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
            您可由「會員登入」查詢，如訂單尚未進入包裝作業，您可自行取消訂單，再重新下單選擇正確的取件門市即可。
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
      question: "退款方式及退款時間？",
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
            商品已有使用痕跡、味道或人為造成髒污、商品配件丟失或損毀等，恕不接受退貨。
          </p>
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
            您可於出貨後24小時至
            <a
              href="http://localhost:3000/memberCenter/memberProduct"
              style={{ textDecoration: "none" }}
            >
              【訂單查詢】
            </a>
            中下載開立的發票，該三聯電子發票證明聯，即為會計憑證，<br></br>
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
          <p>1.商品已有使用摺痕或髒污或味道，請恕無法接受退貨。</p>
          <p>2.退回時，商品配件不全。</p>
          <p>3.已在商品上加工，非商品原樣。</p>
          <p>4.活動贈品未退回。</p>
          <p>5.超過七天鑑賞期。</p>{" "}
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
                <div class="content_icon1 shadow_red:hover">
                  &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                </div>
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
                className={isShowMoreBlock ? "content_question_qa_unfolded" : "content_question_qa_folded"}
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
                <div class="expand_down">
                  <span onClick={() => switchShowMoreBlock()}>
                    查看更多常見問題
                  </span>
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
