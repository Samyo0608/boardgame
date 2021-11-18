import "bootstrap/dist/css/bootstrap.min.css";
import "../../css/index.css";
import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faShoppingCart } from "@fortawesome/free-solid-svg-icons";
import { faChevronLeft } from "@fortawesome/free-solid-svg-icons";
import { faChevronRight } from "@fortawesome/free-solid-svg-icons";
import { faAngleUp } from "@fortawesome/free-solid-svg-icons";
import { faAngleDown } from "@fortawesome/free-solid-svg-icons";
import { faMapMarkerAlt } from "@fortawesome/free-solid-svg-icons";
import { faEnvelope } from "@fortawesome/free-solid-svg-icons";
import { faPhoneAlt } from "@fortawesome/free-solid-svg-icons";

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

const Index = () => {
  return (
    <div className="container overflow-hidden">
      {/* banner */}
      <div className="bannerBox position-relative">
        <img className="banner" src="img/index/Ibanner3.png" alt="" />
        <div className="bannerPlantBox">
          <img className="bannerPlant" src="img/index/bannerText.png" alt="" />
        </div>
        <div className="bannerText me-5 mt-5 text-center">
          <p className="fs-1 fw-bold">Welcome to Game Master</p>
          <p className="fs-1 fw-bold">遊戲職人</p>
        </div>
        <div className="bubble1Box">
          <img className="bubble1" src="img/index/bubble1.png" alt="" />
        </div>
        <Link to="Product/" className="bubble1Text fs-3 fw-bold">
          選購桌遊
        </Link>
        <div className="bubble2Box">
          <img className="bubble2" src="img/index/bubble2.png" alt="" />
        </div>
        <Link to="booking" className="bubble2Text fs-3 fw-bold">
          場地租借
        </Link>
      </div>
      {/* 公告 */}
      {/* <div className="news d-inline-block mt-5">
        <div className="d-flex align-items-center px-5">
          <img alt="" className="loud" src="img/index/loud.png" />
          <div className="loudContent">
            <a href="#/" className="text-decoration-none">
              2021年10月營業時間異動
            </a>
          </div>
        </div>
      </div> */}

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
      {/* 投票排行標題 */}

      <div className="position-relative">
        <h2 className="text-center">最新排行</h2>
        <div className="titleLineBox">
          <img alt="" className="titleLine" src="img/index/line.png" />
        </div>
      </div>
      {/* 投票排行內容 */}
      <div class="recommendBox">
        <div className="voteBirdBox">
          <img alt="" className="voteBirdPic" src="/img/index/bird1.png" />
        </div>
        <ul className="list-unstyled pt-4 d-flex justify-content-evenly">
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

        {/* 投票box */}
        <div className="clanderContentBox">
          <div className="row">
            <div className="col ms-5 mt-5">
              <div className="position-relative voteImgBox">
                <div className="voteImgB">
                  <img className="voteImg" alt="" src="img/index/game1.jpg" />
                  <a
                    href="#/"
                    className="text-decoration-none text-center recommendTag d-inline-block pt-1"
                  >
                    <img
                      alt=""
                      src="img/index/family-tag.png"
                      className="tagImg"
                    />
                    <p className="tagText fs-6 fw-normal">家庭</p>
                  </a>
                  <a
                    href="#/"
                    className="text-dark text-center text-decoration-none voteCart d-inline-block"
                  >
                    <FontAwesomeIcon icon={faShoppingCart} className="me-3" />
                    購買
                  </a>
                </div>
              </div>
            </div>
            <div className="col text-center fw-bold mt-5">
              <a href="#/" className="rankBox1 rankBox">
                <div className="rankVote">108票</div>
                <div className="rankTitle">四季物語</div>
              </a>
              <a href="#/" className="rankBox2 rankBox">
                <div className="rankVote">90票</div>
                <div className="rankTitle">夢想人生</div>
              </a>
              <a href="#/" className="rankBox3 rankBox">
                <div className="rankVote">70票</div>
                <div className="rankTitle">烏邦果</div>
              </a>
              <a href="#/" className="rankBox4 rankBox">
                <div className="rankVote">60票</div>
                <div className="rankTitle">傳情畫意</div>
              </a>
              <a href="#/" className="rankBox5 rankBox">
                <div className="rankVote">40票</div>
                <div className="rankTitle">說書人</div>
              </a>
            </div>
          </div>
          <div className="voteLine"></div>
        </div>
        <a class="voteButton text-center" href="#/">
          前往投票
        </a>
      </div>

      {/* 當期比賽+插圖 */}
      <div className="position-relative contestTitle">
        <h2 className="text-center">當期比賽</h2>
        <div className="titleLineBox">
          <img alt="" className="titleLine" src="img/index/line.png" />
        </div>

        <div className="contestPicBox">
          <img alt="" className="commendPic" src="/img/index/contest.png" />
        </div>
      </div>

      {/* 當期比賽內容 */}
      <div className="row contestBox position-relative">
        <div className="col-9 p-0 contestImgBox">
          <img alt="" className="contestImg" src="/img/index/contest1.png" />
        </div>
        <div className="col-3 mt-3 p-0 text-center text-white position-relative">
          <p className="fs-5 fw-bold">第一屆寶可夢卡牌大賽</p>
          <p>舉辦日期 : 2021/09/01~09/07</p>
          <p>報名期限 : 2021/09/01~09/07</p>
          <p>尚餘名額 : 10位</p>
          <a class="contestButton text-center" href="#/">
            前往投票
          </a>
        </div>
        <a class="contestMoreButton text-center" href="#/">
          看全部
        </a>
      </div>

      {/* 討論區標題 */}

      <div className="position-relative discussTitle">
        <h2 className="text-center">討論區</h2>
        <div className="titleLineBox">
          <img alt="" className="titleLine" src="img/index/line.png" />
        </div>
      </div>

      {/* 討論區內容 */}
      <div class="discussBox">
        <div className="discussPicBox">
          <img alt="" className="rentPic" src="/img/index/discuss.png" />
        </div>
        <ul className="list-unstyled pt-4 d-flex justify-content-evenly">
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

        <div className="discussOutBox">
          <div className="discussInBox pt-2">
            {/* 最新討論 */}
            <div className="discussNew position-relative">
              <table class="table table-hover text-center fw-bold">
                <thead>
                  <tr className="text-secondary">
                    <th scope="col">標題</th>
                    <th scope="col">發文者</th>
                    <th scope="col">回覆數</th>
                    <th scope="col">發表時間</th>
                  </tr>
                </thead>
                <tbody className="discussBody">
                  <tr className="">
                    <th scope="row" class="text-start">
                      【卡牌】 第一屆寶可夢卡牌大賽預選名單出來了
                    </th>
                    <td>阿星</td>
                    <td>3</td>
                    <td>2021-09-30 15:23</td>
                  </tr>
                  <tr>
                    <th scope="row" class="text-start">
                      【家庭】 玩夢想人生遇到的問題 有人遇到過嗎?
                    </th>
                    <td>阿星</td>
                    <td>3</td>
                    <td>2021-09-30 15:23</td>
                  </tr>
                  <tr>
                    <th scope="row" class="text-start">
                      【策略】 崩潰 跟朋友玩一直輸
                    </th>
                    <td>阿星</td>
                    <td>3</td>
                    <td>2021-09-30 15:23</td>
                  </tr>
                </tbody>
              </table>
              <div className="discussTag discussTag1 text-center">最新</div>
            </div>
            {/* 最熱討論 */}
            <div className="discussNew mt-5 position-relative">
              <table class="table table-hover text-center fw-bold">
                <thead>
                  <tr className="text-secondary">
                    <th scope="col">標題</th>
                    <th scope="col">發文者</th>
                    <th scope="col">回覆數</th>
                    <th scope="col">發表時間</th>
                  </tr>
                </thead>
                <tbody className="discussBody">
                  <tr className="">
                    <th scope="row" class="text-start">
                      【卡牌】 第一屆寶可夢卡牌大賽預選名單出來了
                    </th>
                    <td>阿星</td>
                    <td>3</td>
                    <td>2021-09-30 15:23</td>
                  </tr>
                  <tr>
                    <th scope="row" class="text-start">
                      【家庭】 玩夢想人生遇到的問題 有人遇到過嗎?
                    </th>
                    <td>阿星</td>
                    <td>3</td>
                    <td>2021-09-30 15:23</td>
                  </tr>
                  <tr>
                    <th scope="row" class="text-start">
                      【策略】 崩潰 跟朋友玩一直輸
                    </th>
                    <td>阿星</td>
                    <td>3</td>
                    <td>2021-09-30 15:23</td>
                  </tr>
                </tbody>
              </table>
              <div className="discussTag discussTag2 text-center">最熱</div>
            </div>
            <a class="discussButton text-center" href="#/">
              看更多
            </a>
          </div>
          <div></div>
        </div>
      </div>
      {/* 關於我們 */}
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
                <a href="#/" className="aboutTag">
                  <div className="aboutIcon1">i</div>關於我們
                </a>
              </div>
              <div className="col-2">
                <a href="#/" className="aboutTag">
                  <div className="aboutIcon2">$</div>如何購買
                </a>
              </div>
              <div className="col-2">
                <a href="#/" className="aboutTag">
                  <div className="aboutIcon3">?</div>問與答
                </a>
              </div>
            </div>
          </div>
          <div class="row aboutContent">
            <div className="col-7 aboutLeft">
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
              <div className="aboutImgBox">
                <img
                  className="aboutImg"
                  src="/img/index/aboutLeft.png"
                  alt=""
                />
              </div>
            </div>
            <div className="col-5 aboutRight">
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
          </div>
        </div>
      </div>
      {/* 尾巴 */}
    </div>
  );
};

export default Index;
