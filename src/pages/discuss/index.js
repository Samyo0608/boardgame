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
import IndexVote from "../../components/contest/IndexVote";
import axios from "axios";
import { API_URL } from '../../configs/config';
// 輪播照片套件
import Slider from "react-slick";
import Calendar from "./FullCalendarIndex.js";

const gameType = [
  { id: 1, name: "全部" },
  { id: 2, name: "家庭" },
  { id: 3, name: "卡牌" },
  { id: 4, name: "策略" },
];
const rentType = [
  { id: 1, name: "四人房" },
  { id: 2, name: "六人房" },
];

// 跑一個迴圈將物件放入陣列
const barchartRun = (b)=>{
  const bar =[]
  for(let i = 0; b< b.length; i++) {
      bar[i].push({...b[i]})
  }
  return bar
}

const Index = () => {

  // 投票狀態鉤子
  const[status,setStatus] = useState(1);
  // 投票資料帶入
  const [barno,setBarno]=useState(barchartRun(barchartRun));
  // 從資料庫中叫出產品JSON
  useEffect(async () =>{
    let res = await axios.get(`${API_URL}/vote/list`);
    setBarno(res.data);
  },[])
 

 // [全系列]
 const newrank=[...barno];
 newrank.sort(function(a, b) {
     var nameA = a.product_vote; 
     var nameB = b.product_vote; 
     if (nameA < nameB) {
       return 1;
     }
     if (nameA > nameB) {
       return -1;
     }
     return 0;
   }); 

const newRank2=[];
const newIn2=()=>{
  for(let i=0; i<newrank.length;i++){
      if (i<5)
      newRank2.push(newrank[i])
  }
   return newRank2
}
newIn2();

// 全標籤
const textAll=[];
const allData = ()=>{
    for(let i=0; i<newRank2.length;i++){
        if (newRank2[i].product_id > 0)
        textAll.push(newRank2[i].product_name)
    }
    return textAll
}
allData();

// 全票數
const allArr=[]
   const allVoted = ()=>{
       for(let i=0; i<newRank2.length;i++){
           allArr.push(newRank2[i].product_vote)
       }
       return allArr
   }  
   allVoted();



  
 // [家庭]
 const famiRank=[]
 const famiIn=()=>{
     for(let i=0; i<barno.length;i++){
         if (barno[i].product_type==="家庭")
         famiRank.push(barno[i])
     }
      return famiRank
  }
  
 famiIn();
 famiRank.sort(function(a, b) {
     var nameA = a.product_vote; 
     var nameB = b.product_vote; 
     if (nameA < nameB) {
       return 1;
     }
     if (nameA > nameB) {
       return -1;
     }
     return 0;
   });

   // 取出卡牌前五名迴圈
  const famiRank2=[]
  const famiIn2=()=>{
    for(let i=0; i<famiRank.length;i++){
        if (i<5)
        famiRank2.push(famiRank[i])
    }
     return famiRank2
 }
 famiIn2();
//  console.log("家庭",famiRank2)
// 家庭標籤
 const textFami=[];
 const famiData = ()=>{
     for(let i=0; i<famiRank2.length;i++){
         if (famiRank2[i].product_type==="家庭")
         textFami.push(famiRank2[i].product_name)
     }
     return textFami
 }
 famiData();

// 家庭票數
const famiArr=[]
    const famiVoted = ()=>{
        for(let i=0; i<famiRank2.length;i++){
            famiArr.push(famiRank2[i].product_vote)
        }
        return famiArr
    }  
    famiVoted();
   
 // [卡牌]
 const cardRank=[]
 const cardIn=()=>{
     for(let i=0; i<barno.length;i++){
         if (barno[i].product_type==="卡牌")
         cardRank.push(barno[i])
     }
      return cardRank
  }
 cardIn();
//  console.log("卡牌全",cardRank)
 cardRank.sort(function(a, b) {
     var nameA = a.product_vote; 
     var nameB = b.product_vote; 
     if (nameA < nameB) {
       return 1;
     }
     if (nameA > nameB) {
       return -1;
     }
     return 0;
   });

// 取出卡牌前五名迴圈
  const cardRank2=[]
  const cardIn2=()=>{
    for(let i=0; i<cardRank.length;i++){
        if (i<5)
        cardRank2.push(cardRank[i])
    }
     return cardRank2
 }
 cardIn2();

// 卡牌標籤
 const textCard=[];
 const cardData = ()=>{
     for(let i=0; i<cardRank2.length;i++){
         if (cardRank2[i].product_type==="卡牌")
         textCard.push(cardRank2[i].product_name)
     }
     return textCard
 }
 cardData();

// 卡片票數
const cardArr=[]
    const cardVoted = ()=>{
        for(let i=0; i<cardRank2.length;i++){
            cardArr.push(cardRank2[i].product_vote)
        }
        return cardArr
    }  
    cardVoted();

 
// [策略]
const tragRank=[]
const tragIn=()=>{
    for(let i=0; i<barno.length;i++){
        if (barno[i].product_type==="策略")
        tragRank.push(barno[i])
    }
     return tragRank
 }
tragIn();
// console.log(tragRank)
tragRank.sort(function(a, b) {
    var nameA = a.product_vote; 
    var nameB = b.product_vote; 
    if (nameA < nameB) {
      return 1;
    }
    if (nameA > nameB) {
      return -1;
    }
    return 0;
  });
// 取出策略前五名迴圈
  const tragRank2=[]
  const tragIn2=()=>{
    for(let i=0; i<tragRank.length;i++){
        if (i<5)
        tragRank2.push(tragRank[i])
    }
     return tragRank2
 }
 tragIn2();
//  console.log(tragRank2)
// 策略標籤
 const textTrag=[];
 const tragData = ()=>{
     for(let i=0; i<tragRank2.length;i++){
         if (tragRank2[i].product_type==="策略")
         textTrag.push(tragRank2[i].product_name)
     }
     return textTrag
 }
 tragData();
//  console.log("策略標籤",textTrag)
// 策略票數
const tragArr=[]
    const tragVoted = ()=>{
        for(let i=0; i<tragRank2.length;i++){
            tragArr.push(tragRank2[i].product_vote)
        }
        return tragArr
    }  
    tragVoted();
    // console.log("策略票數",tragArr)

// 排名結束

// 輪播套件
  var settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
  };
  
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
        <Link to="Product" className="bubble1Text fs-3 fw-bold">
          選購桌遊
        </Link>
        <div className="bubble2Box">
          <img className="bubble2" src="img/index/bubble2.png" alt="" />
        </div>
        <Link to="booking" className="bubble2Text fs-3 fw-bold">
          場地租借
        </Link>
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
      <div class="recommendBox-booking">
        <div className="rentPicBox">
          {/* 場地租借首頁照片 */}
          <img alt="" className="rentPic" src="/img/index/rent.png" />
        </div>
        <div className="bookingBG">
          <div className="sliderIndex">
            <Slider {...settings}>
              <div>
                <img alt="" className="" src="img/booking/siteIndex-3.jpg" />
              </div>
              <div>
                <img alt="" className="" src="img/booking/siteIndex-4.jpg" />
              </div>
            </Slider>
          </div>
          <div className="calendarIndex">
            <Calendar />
          </div>
        </div>

        {/* <ul className="list-unstyled pt-4 d-flex justify-content-evenly">
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
        </div> */}

        <a class="rentButton text-center" href="/booking">
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
                <button
                  className={`d-inline-block recommendType text-decoration-none text-center ${ status === v.id ? "recommendActive" : ""}`}
                  onClick={(e) => {setStatus(v.id)}}
                >
                  {v.name}
                </button>
              </li>
            );
          })}
        </ul>

        {/* 投票box */}
        <div className={`${status===1?"d-block":"d-none"}`} >
        <IndexVote 
          vote={allArr}
          name={textAll}
          rankArr1={newRank2.length>0 ? newRank2[0].product_img : ""}
          rankArr2={newRank2.length>0 ? newRank2[1].product_img : ""}
          rankArr3={newRank2.length>0 ? newRank2[2].product_img : ""}
           />
        </div>
        <div className={`${status===2?"d-block":"d-none"}`} >
        <IndexVote
          vote={famiArr}
          name={textFami}
          rankArr1={famiRank2.length>0 ? famiRank2[0].product_img : ""}
          rankArr2={famiRank2.length>0 ? famiRank2[1].product_img : ""}
          rankArr3={famiRank2.length>0 ? famiRank2[2].product_img : ""}
           />
        </div>
        <div className={`${status===3?"d-block":"d-none"}`} >
        <IndexVote 
           vote={cardArr}
           name={textCard}
           rankArr1={cardRank2.length>0 ? cardRank2[0].product_img : ""}
           rankArr2={cardRank2.length>0 ? cardRank2[1].product_img : ""}
           rankArr3={cardRank2.length>0 ? cardRank2[2].product_img : ""}
        />
        </div>
        <div className={`${status===4?"d-block":"d-none"}`} >
        <IndexVote 
          vote={tragArr}
          name={textTrag}
          rankArr1={tragRank2.length>0 ? tragRank2[0].product_img : ""}
          rankArr2={tragRank2.length>0 ? tragRank2[1].product_img : ""}
          rankArr3={tragRank2.length>0 ? tragRank2[2].product_img : ""}
        />
        </div>
        <Link to="/vote" target="_top" class="voteButton text-center" href="#/">
          前往投票
        </Link>
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
          <Link class="contestButton text-center" href="#/">
            前往報名
          </Link>
        </div>
        <Link to="contest" target="_top" class="contestMoreButton text-center" href="#/">
          看全部
        </Link>
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
                <button
                  
                  className="d-inline-block recommendType text-decoration-none text-center"
                  onClick={(e) => {setStatus(v.id)}}>
                  {v.name}
                </button>
                
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
