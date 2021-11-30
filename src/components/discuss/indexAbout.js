import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faMapMarkerAlt } from "@fortawesome/free-solid-svg-icons";
import { faEnvelope, faPhoneAlt } from "@fortawesome/free-solid-svg-icons";

const IndexAbout = (props) => {
  return (
    <div
      class="aboutBox"
      style={{ backgroundImage: "url(/img/index/about.png)" }}
    >
      <div className="aboutBirdBox">
        <img alt="" src="/img/index/aboutBird.png" className="aboutBird" />
      </div>
      <div className="aboutBarContent">
        <div className="aboutBar text-center fw-bold">
          <div className="row">
            <div className="col-6"></div>
            <div className="col-2">
              <button
                type="button"
                onClick={() => {
                  props.setAbout("about");
                }}
                className="aboutTag"
              >
                <div className="aboutIcon1">i</div>關於我們
              </button>
            </div>
            <div className="col-2">
              <button
                type="button"
                onClick={() => {
                  props.setAbout("purchase");
                }}
                className="aboutTag"
              >
                <div className="aboutIcon2">$</div>如何購買
              </button>
            </div>
            <div className="col-2">
              <a href="/faq" className="aboutTag">
                <div className="aboutIcon3">?</div>問與答
              </a>
            </div>
          </div>
        </div>
        <div class="row aboutContent">
          <div className={`col-7 aboutLeft`}>
            <div
              className={`${
                props.about === "about"
                  ? "animate__animated animate__backInLeft"
                  : "disAboutLeft"
              }`}
            >
              <p className="mt-4 fw-bold fs-3">關於我們</p>
              <p>
                遊戲職人創立於2020年
                <br />
                店長及小助理都是遊戲狂熱者
                <br />
                不論是桌遊、卡牌皆愛不釋手
                <br />
                故創立了遊戲職人替所有遊戲人
                <br />
                提供購買產品的平台
              </p>
            </div>
            <div
              className={`aboutLeftContent ${
                props.about === "purchase"
                  ? "animate__animated animate__backInLeft"
                  : "disAboutLeft"
              }`}
            >
              <p className="mt-4 fw-bold fs-3">購買方式</p>
              <p>
                1.註冊會員後，登入會員帳號
                <br />
                2.至商品頁面挑選產品加入購物車
                <br />
                3.於購物車頁面確定數量及價錢後，建立訂單
                <br />
                4.於付款後等待3~5個工作天，商品將依運送方式送達目的地
              </p>
            </div>
            <div
              className={`aboutImgBox ${
                props.about === "about" ? "" : "noAboutImg"
              }`}
            >
              <img className="aboutImg" src="/img/index/aboutLeft.png" alt="" />
            </div>
            <div
              className={`aboutImgBox2 ${
                props.about === "purchase" ? "" : "noAboutImg"
              }`}
            >
              <img className="aboutImg" src="/img/index/shopping.png" alt="" />
            </div>
          </div>

          <div className="col-5 aboutRight">
            <div
              className={`aboutRightContent1 ${
                props.about === "about" ? "" : "noAboutImg"
              }`}
            >
              <p className="mt-4 fw-bold">
                <FontAwesomeIcon className="mx-3" icon={faMapMarkerAlt} />{" "}
                桃園市中壢區中大路300號
              </p>
              <p className="mt-4 fw-bold">
                <FontAwesomeIcon className="mx-3" icon={faPhoneAlt} />{" "}
                02-6631-8168
              </p>
              <p className="mt-4 fw-bold">
                <FontAwesomeIcon className="mx-3" icon={faEnvelope} />{" "}
                tablegame2021@gmail.com
              </p>
              <div className="mapImgBox">
                <img alt="" src="/img/index/map.jpg" className="mapImg" />
              </div>
            </div>
            <div
              className={`aboutRightContent ${
                props.about === "purchase" ? "" : "noAboutImg"
              }`}
            >
              <p className="mt-4 fw-bold">付款方式</p>
              <img className="aboutCard" alt="" src="img/index/mscard.png" />
              <img className="aboutCard" alt="" src="img/index/visa.png" />
              <img
                className="aboutCard aboutCard3"
                alt=""
                src="img/index/jcb.png"
              />
              <p className="mt-4 fw-bold">運送方式</p>
              <img className="aboutTeleport" alt="" src="img/index/seven.png" />
              <img className="aboutTeleport" alt="" src="img/index/life.png" />
              <img
                className="aboutTeleport"
                alt=""
                src="img/index/family.png"
              />
              <img
                className="aboutTeleport"
                alt=""
                src="img/index/blackcat.png"
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default IndexAbout;
