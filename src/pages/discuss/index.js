import "bootstrap/dist/css/bootstrap.min.css";
import "../../css/index.css";
import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faShoppingCart } from "@fortawesome/free-solid-svg-icons";
import { faChevronLeft } from "@fortawesome/free-solid-svg-icons";
import { faChevronRight } from "@fortawesome/free-solid-svg-icons";
import { faAngleUp } from "@fortawesome/free-solid-svg-icons";
import { faAngleDown } from "@fortawesome/free-solid-svg-icons";

const gameType = [
  { id: 1, name: "全部" },
  { id: 2, name: "家庭" },
  { id: 3, name: "策略" },
  { id: 4, name: "卡牌" },
];
const rentType = [
  { id: 1, name: "四人房" },
  { id: 2, name: "六人房" },
];

const index = () => {
  return (
    <div className="container overflow-hidden">

      {/* banner */}
      <div className="bannerBox">
        <img className="banner" src="img/index/banner.jpg" alt="" />
      </div>
      {/* 公告 */}
      <div className="news d-inline-block mt-5">
        <div className="d-flex align-items-center px-5">
          <img alt="" className="loud" src="img/index/loud.png" />
          <div className="loudContent">
            <a href="#/" className="text-decoration-none">
              2021年10月營業時間異動
            </a>
          </div>

        </div>
      </div>

      {/* 推薦桌遊標題+插圖 */}
      <div className="position-relative">
        <h2 className="text-center">推薦桌遊</h2>
        <div className="titleLineBox">
          <img alt="" className="titleLine" src="img/index/line.png" />
        </div>

        <div className="commendPicBox">
          <img alt="" className="commendPic" src="/img/index/commend.png" />
        </div>
      </div>

      {/* 推薦桌遊內容 */}
      <div class="recommendBox">
        <ul className="list-unstyled pt-3 d-flex justify-content-evenly">
          {gameType.map((v, i) => {
            return (
              <li key={v.id} className="">
                <a
                  href="#/"
                  className="d-inline-block recommendType text-decoration-none text-center"
                >
                  {v.name}
                </a>
              </li>
            );
          })}
        </ul>
        <div className="d-flex justify-content-evenly align-items-center">
          <div>
            <a href="#/" className="text-dark text-decoration-none text-center">
              <div className="recommendProductBox position-relative">
                <div className="rcmpB">
                  <img className="rcmpI" alt="" src="img/index/game2.jpg" />
                </div>
                <p className="pt-3 mb-1">烏幫果</p>
                <p>售價 : 100元</p>
                <a
                  href="#/"
                  className="text-dark text-decoration-none recommendCart d-inline-block pt-1"
                >
                  <FontAwesomeIcon icon={faShoppingCart} />
                </a>
                <a
                  href="#/"
                  className="text-dark text-decoration-none recommendTag d-inline-block pt-1"
                >
                  <img alt="" src="img/index/trag-tag.png" className="tagImg" />
                  <p className="tagText">策略</p>
                </a>
              </div>
            </a>

            <a href="#/" className="text-dark text-decoration-none text-center">
              <div className="recommendProductBox position-relative">
                <div className="rcmpB">
                  <img className="rcmpI" alt="" src="img/index/game3.jpg" />
                </div>
                <p className="pt-3 mb-1">傳情畫意</p>
                <p>售價 : 200元</p>
                <a
                  href="#/"
                  className="text-dark text-decoration-none recommendCart d-inline-block pt-1"
                >
                  <FontAwesomeIcon icon={faShoppingCart} />
                </a>
                <a
                  href="#/"
                  className="text-dark text-decoration-none recommendTag d-inline-block pt-1"
                >
                  <img
                    alt=""
                    src="img/index/family-tag.png"
                    className="tagImg"
                  />
                  <p className="tagText">家庭</p>
                </a>
              </div>
            </a>
          </div>
          <a
            href="#/"
            className="text-dark text-decoration-none text-center fw-bold fs-5"
          >
            <div className="recommendProductBoxM position-relative">
              <div className="rcmpMb">
                <img className="rcmpMi" alt="" src="img/index/game1.jpg" />
              </div>
              <p className="pt-4 mb-3">四季物語</p>
              <p>售價 : 300元</p>
              <a
                href="#/"
                className="text-dark text-decoration-none recommendCartM d-inline-block"
              >
                <FontAwesomeIcon icon={faShoppingCart} className="me-3" />
                購買
              </a>
              <a
                href="#/"
                className="text-dark text-decoration-none recommendTag d-inline-block pt-1"
              >
                <img alt="" src="img/index/family-tag.png" className="tagImg" />
                <p className="tagText fs-6 fw-normal">家庭</p>
              </a>
            </div>
          </a>
          <div>
            <a href="#/" className="text-dark text-decoration-none text-center">
              <div className="recommendProductBox position-relative">
                <div className="rcmpB">
                  <img className="rcmpI" alt="" src="img/index/game4.jpg" />
                </div>
                <p className="text-center pt-3 mb-1">夢想人生</p>
                <p className="text-center">售價 : 200元</p>
                <a
                  href="#/"
                  className="text-dark text-decoration-none recommendCart d-inline-block pt-1"
                >
                  <FontAwesomeIcon icon={faShoppingCart} />
                </a>
                <a
                  href="#/"
                  className="text-dark text-decoration-none recommendTag d-inline-block pt-1"
                >
                  <img alt="" src="img/index/card-tag.png" className="tagImg" />
                  <p className="tagText">卡牌</p>
                </a>
              </div>
            </a>

            <a href="#/" className="text-dark text-decoration-none text-center">
              <div className="recommendProductBox position-relative">
                <div className="rcmpB">
                  <img className="rcmpI" alt="" src="img/index/game5.jpg" />
                </div>
                <p className="text-center pt-3 mb-1">說書人</p>
                <p className="text-center">售價 : 200元</p>
                <a
                  href="#/"
                  className="text-dark text-decoration-none recommendCart d-inline-block pt-1"
                >
                  <FontAwesomeIcon icon={faShoppingCart} />
                </a>
                <a
                  href="#/"
                  className="text-dark text-decoration-none recommendTag d-inline-block pt-1"
                >
                  <img
                    alt=""
                    src="img/index/family-tag.png"
                    className="tagImg"
                  />
                  <p className="tagText">家庭</p>
                </a>
              </div>
            </a>
          </div>
        </div>

        <a class="moreButton text-center" href="#/">
          看更多
        </a>
      </div>

      {/* 場地租借標題 */}

      <div className="position-relative">
        <h2 className="text-center">場地租借</h2>
        <div className="titleLineBox">
          <img alt="" className="titleLine" src="img/index/line.png" />
        </div>
      </div>

      {/* 場地租借內容 */}
      <div class="recommendBox">
        <div className="rentPicBox">
          <img alt="" className="rentPic" src="/img/index/rent.png" />
        </div>
        <ul className="list-unstyled pt-4 d-flex justify-content-evenly">
          {rentType.map((v, i) => {
            return (
              <li key={v.id} className="">
                <a
                  href="#/"
                  className="d-inline-block recommendType text-decoration-none text-center"
                >
                  {v.name}
                </a>
              </li>
            );
          })}
        </ul>

        <div className="clanderContentBox">
          <div className="row">
            <div className="col ms-5 mt-5">
              <p className="fw-bold fs-4">
                <a href="#/" className="clanderArrow">
                  <FontAwesomeIcon icon={faChevronLeft} />
                </a>
                2021年09月
                <a href="#/" className="clanderArrow">
                  <FontAwesomeIcon icon={faChevronRight} />
                </a>
              </p>
              <p className="fs-5 fw-bold text-secondary clanderAlarm">
                灰底表示已出租!
              </p>

              <div className="fw-bold">
                <div className="row clanderDate">
                  <div class="col">一</div>
                  <div class="col">二</div>
                  <div class="col">三</div>
                  <div class="col">四</div>
                  <div class="col">五</div>
                  <div class="col">六</div>
                  <div class="col">日</div>
                </div>
                <div className="row clanderDate">
                  <div class="col">01</div>
                  <div class="col">02</div>
                  <div class="col">03</div>
                  <div class="col">04</div>
                  <div class="col">05</div>
                  <div class="col">06</div>
                  <div class="col">07</div>
                </div>
                <div className="row clanderDate">
                  <div class="col">08</div>
                  <div class="col">09</div>
                  <div class="col">10</div>
                  <div class="col">11</div>
                  <div class="col">12</div>
                  <div class="col">13</div>
                  <div class="col">14</div>
                </div>
                <div className="row clanderDate">
                  <div class="col">15</div>
                  <div class="col">16</div>
                  <div class="col">17</div>
                  <div class="col">18</div>
                  <div class="col">19</div>
                  <div class="col">20</div>
                  <div class="col">21</div>
                </div>
                <div className="row clanderDate">
                  <div class="col">23</div>
                  <div class="col">24</div>
                  <div class="col">25</div>
                  <div class="col">26</div>
                  <div class="col">27</div>
                  <div class="col">28</div>
                  <div class="col">29</div>
                </div>
                <div className="row clanderDate">
                  <div class="col">30</div>
                  <div class="col">31</div>
                  <div class="col"></div>
                  <div class="col"></div>
                  <div class="col"></div>
                  <div class="col"></div>
                  <div class="col"></div>
                </div>
              </div>
            </div>
            <div className="col text-center">
              <a href="#/" className="roomArrow">
                <FontAwesomeIcon icon={faAngleUp} />
              </a>

              <div className="roomBox">
                <img className="roomImg" alt="" src="img/index/room.jpg" />
              </div>
              <a href="#/" className="roomArrow">
                <FontAwesomeIcon icon={faAngleDown} />
              </a>
            </div>
          </div>
        </div>
        <a class="rentButton text-center" href="#/">
          前往出租
        </a>
      </div>
    </div>

  );
};

export default index;
