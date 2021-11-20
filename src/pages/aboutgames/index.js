import { React, useState } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import { Container, Row, Col } from "react-bootstrap";
import "../../css/aboutgame.css";
import "../../css/product.css";
import { NavLink } from "react-router-dom";
const attentionButton = [
  {
    id: 1,
    status: "遊戲詳情",
  },
  {
    id: 2,
    status: "遊戲內容",
  },
  {
    id: 3,
    status: "退換貨須知",
  },
];

function Aboutgame(props) {
  // const {
  //   product_name,
  //   product_img,
  //   product_price,
  //   product_content,
  //   retuen_detail,
  //   product_info,
  //   product_type,
  // } = props;
  const [status, setStatus] = useState(2);
  const product = [
    {
      product_id: 1,
      product_name: "狼人殺",
      product_type: "策略",
      product_img: "/img/product/crime.jpg",
      product_price: 123,
      product_content:
        "扮演勇敢的拓荒者，來到這座不知名的島上，你們叫它卡坦島。創立了第一批的村莊，收集資源，鋪設道路，興建城市，並且透過交易各取所需，解決資源分佈不均的問題。然而卡坦島畢竟是個小島，土地與資源都很有限；當勢力越來越強大，衝突也隨之而來。你是否能從群雄中脫穎而出，稱霸卡坦島？",
      product_info:
        "運籌帷幄，決勝千里！你身處中世紀時代的奧爾良。為了執掌一方霸權，你將徵募農民、商人、騎士、僧侶等列隨從來開拓商路、建設城市、研究科技，從而擴大你的影響力。騎士擴大你行動的疆域，確保你商路的安全；工匠能夠建造貿易站，開發各種提高效率的工具；學者在科學上開拓進取。另外，修道院也非常重要，不得不說，這些僧侶讓你避免了命運帶來的挫折。為了更好地發展，你總是想執行更多行動。獲勝的手段多種多樣，關鍵在於你是否能夠駕馭策略，融合所有的要素，最終擊敗你的對手！",
      return_detail: "牌套：126張",
    },
    {
      product_id: 2,
      product_name: "不要殺",
      product_type: "策略",
      product_img: "/product_img/550x400/Cat_10.png",
      product_price: 456,
      product_content:
        "在群島爭霸中，我們可妥善運用神明賜予的力量，還有神獸來扭轉戰局，精美的插圖與符合神話故事中的能力，使群島爭霸非常有在玩希臘神話遊戲",
    },
    {
      product_id: 3,
      product_name: "布拉克斯",
      product_type: "卡牌",
      product_img: "/product_img/550x400/Blokus.png",
      product_price: 999,
      product_content: "1234567我的貓咪在哪裡~",
    },
  ];
  return (
    <>
      <Container>
        <div className="hr"></div>
        <div className="box">
          <p className="p6">{product[0].product_name}</p>

          <img className="abb" src={product[0].product_img} alt="" />
          <div className="box456">
            <p className="ellipsis3">{product[0].product_content}</p>
          </div>
          <p className="pprice">${product[0].product_price}</p>
          <a href="#/">
            <img className="favorite4" src="/img/product/favorite.png" alt="" />
          </a>
          <a href="#/">
            <img className="buy4" src="/img/product/buy.png" alt="" />
          </a>
        </div>
        <NavLink to="/product">
          <img className=" backto" src="/img/product/back.png" alt="" />
        </NavLink>
        <div
          className="aboutbagd"
          style={{
            backgroundImage: `url(${
              process.env.PUBLIC_URL + "/img/product/BK.png"
            })`,
            width: "1000px",
            height: "650px",
          }}
        ></div>

        <div>
          <NavLink to="/discuss">
            <img className="forum" src="/img/product/forum.png" alt="" />
          </NavLink>
          <div className="box457">
            <Row>
              {attentionButton.map((v, i) => {
                return (
                  <Col>
                    <button
                      className={`about1 col-2 ${
                        status === v.id ? "about1Active" : ""
                      }`}
                      onClick={(e) => {
                        setStatus(v.id);
                      }}
                    >
                      {v.status}
                    </button>
                  </Col>
                );
              })}
            </Row>
            {/* 遊戲詳情 */}
            <div
              className={`about1Result pt-5 ${
                status === 1 ? "d-block" : "d-none"
              }`}
            >
              <p className="ellipsis6">{product[0].product_info}</p>
            </div>
            {/* 遊戲內容 */}

            <div
              className={`about1Result pt-5 ${
                status === 2 ? "d-block" : "d-none"
              }`}
            >
              <p className="ellipsis6">{product[0].return_detail}</p>
            </div>

            {/* 退換貨說明 */}
            <div
              className={`about1Result pt-5 ${
                status === 3 ? "d-block" : "d-none"
              }`}
            >
              <p className="">
                感謝您購買遊戲職人商品，我們致力於提供您品質優良的商品及完善舒適的購物體驗。
                若您對收到的商品有任何疑慮，請您可直接聯繫我們，我們會盡快回覆您的問題。{" "}
              </p>
              <p>
                (1)
                <span className="redone">鑑賞期非試用期</span>
                ,商品經使用將無法退貨,商品收到後請先確認外觀是否為瑕疵,經拆封使用後恕無法辦理退貨。
              </p>
              <p>
                (2)
                完整包裝:商品退貨時必須回復原狀,亦即必須回復至收到商品時的原始狀態
                <span className="redone">
                  (包含商品、配件、贈品、原廠內外包裝 (紙、盒、袋)
                  、內附文件-發票或資料的完整性等) 。
                </span>
              </p>
              <p>
                (3)若收到之商品有瑕疵狀況,麻煩請拍照提供給我們,以協助確認為商品本身瑕疵或為運送問題。
              </p>
              <p>
                【退貨申請說明】 請於收到商品
                <span className="redone">七天內(含例假日)</span>
                聯繫給予回覆處理。 欲退貨商品,請注意須符合以下條件才能辦理退貨。
              </p>
            </div>
          </div>
        </div>
      </Container>
    </>
  );
}

export default Aboutgame;
