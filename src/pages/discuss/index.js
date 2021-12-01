import "bootstrap/dist/css/bootstrap.min.css";
import "animate.css";
import "../../css/index.css";
import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import IndexVote from "../../components/contest/IndexVote";
import axios from "axios";
import { API_URL } from "../../configs/config";
// 輪播照片套件
import Slider from "react-slick";
import Calendar from "./FullCalendarIndex.js";
import IndexContest from "../../components/contest/IndexContest";
import Inproall from "../../components/product/Inproall";
import Inprofamily from "../../components/product/Inprofamily";
import Inprocard from "../../components/product/Inprocard";
import Inprostrategy from "../../components/product/Inprostrategy";
import IndexAbout from "../../components/discuss/indexAbout";
import IndexDiscuss from "../../components/discuss/indexDiscuss";

const gameType = [
  { id: 1, name: "全部" },
  { id: 2, name: "家庭" },
  { id: 3, name: "卡牌" },
  { id: 4, name: "策略" },
];
// 跑一個迴圈將物件放入陣列
const barchartRun = (b) => {
  const bar = [];
  for (let i = 0; b < b.length; i++) {
    bar[i].push({ ...b[i] });
  }
  return bar;
};

// 使用迴圈將json檔寫入contestRun的常數中做為一個陣列
const contestRun = (c)=>{
  const state= []  // 做一個空陣列
    for (let i = 0; i < c.length; i++) {
      state.push({...c[i]})
    }
    return state
  }



const Index = () => {
  const [about, setAbout] = useState("about");
  // 投票狀態鉤子
  const [status, setStatus] = useState(1);
  // 投票資料帶入
  const [barno,setBarno]=useState(barchartRun(barchartRun));
  const[contest,setContest]=useState(contestRun(contestRun))

  // 從資料庫中叫出產品JSON
  useEffect(async () => {
    let res = await axios.get(`${API_URL}/vote/list`);
    setBarno(res.data);
  },[])
 
　// 從資料庫叫出比賽JSON
useEffect( () =>{
  async function a(){
  let res = await axios.get(`${API_URL}/contest/card`);
  setContest(res.data)}
  a()
},[])

// 取三個比賽
const newCon1=[];
const newcon1=()=>{
  for(let i=0; i<contest.length;i++){
      if (i<3)
      newCon1.push(contest[i])
  }
   return newCon1
}
newcon1();
console.log(newCon1)


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
  const textAll = [];
  const allData = () => {
    for (let i = 0; i < newRank2.length; i++) {
      if (newRank2[i].product_id > 0) textAll.push(newRank2[i].product_name);
    }
    return textAll;
  };
  allData();

  // 全票數
  const allArr = [];
  const allVoted = () => {
    for (let i = 0; i < newRank2.length; i++) {
      allArr.push(newRank2[i].product_vote);
    }
    return allArr;
  };
  allVoted();

  // [家庭]
  const famiRank = [];
  const famiIn = () => {
    for (let i = 0; i < barno.length; i++) {
      if (barno[i].product_type === "家庭") famiRank.push(barno[i]);
    }
    return famiRank;
  };

  famiIn();
  famiRank.sort(function (a, b) {
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
  const famiRank2 = [];
  const famiIn2 = () => {
    for (let i = 0; i < famiRank.length; i++) {
      if (i < 5) famiRank2.push(famiRank[i]);
    }
    return famiRank2;
  };
  famiIn2();
  //  console.log("家庭",famiRank2)
  // 家庭標籤
  const textFami = [];
  const famiData = () => {
    for (let i = 0; i < famiRank2.length; i++) {
      if (famiRank2[i].product_type === "家庭")
        textFami.push(famiRank2[i].product_name);
    }
    return textFami;
  };
  famiData();

  // 家庭票數
  const famiArr = [];
  const famiVoted = () => {
    for (let i = 0; i < famiRank2.length; i++) {
      famiArr.push(famiRank2[i].product_vote);
    }
    return famiArr;
  };
  famiVoted();

  // [卡牌]
  const cardRank = [];
  const cardIn = () => {
    for (let i = 0; i < barno.length; i++) {
      if (barno[i].product_type === "卡牌") cardRank.push(barno[i]);
    }
    return cardRank;
  };
  cardIn();
  //  console.log("卡牌全",cardRank)
  cardRank.sort(function (a, b) {
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
  const cardRank2 = [];
  const cardIn2 = () => {
    for (let i = 0; i < cardRank.length; i++) {
      if (i < 5) cardRank2.push(cardRank[i]);
    }
    return cardRank2;
  };
  cardIn2();

  // 卡牌標籤
  const textCard = [];
  const cardData = () => {
    for (let i = 0; i < cardRank2.length; i++) {
      if (cardRank2[i].product_type === "卡牌")
        textCard.push(cardRank2[i].product_name);
    }
    return textCard;
  };
  cardData();

  // 卡片票數
  const cardArr = [];
  const cardVoted = () => {
    for (let i = 0; i < cardRank2.length; i++) {
      cardArr.push(cardRank2[i].product_vote);
    }
    return cardArr;
  };
  cardVoted();

  // [策略]
  const tragRank = [];
  const tragIn = () => {
    for (let i = 0; i < barno.length; i++) {
      if (barno[i].product_type === "策略") tragRank.push(barno[i]);
    }
    return tragRank;
  };
  tragIn();
  // console.log(tragRank)
  tragRank.sort(function (a, b) {
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
  const tragRank2 = [];
  const tragIn2 = () => {
    for (let i = 0; i < tragRank.length; i++) {
      if (i < 5) tragRank2.push(tragRank[i]);
    }
    return tragRank2;
  };
  tragIn2();
  //  console.log(tragRank2)
  // 策略標籤
  const textTrag = [];
  const tragData = () => {
    for (let i = 0; i < tragRank2.length; i++) {
      if (tragRank2[i].product_type === "策略")
        textTrag.push(tragRank2[i].product_name);
    }
    return textTrag;
  };
  tragData();
  //  console.log("策略標籤",textTrag)
  // 策略票數
  const tragArr = [];
  const tragVoted = () => {
    for (let i = 0; i < tragRank2.length; i++) {
      tragArr.push(tragRank2[i].product_vote);
    }
    return tragArr;
  };
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
        <ul className="list-unstyled pt-4 d-flex justify-content-evenly">
          {gameType.map((v, i) => {
            return (
              <li key={v.id} className="">
                <button
                  className={`d-inline-block recommendType text-decoration-none text-center ${
                    status === v.id ? "recommendActive" : ""
                  }`}
                  onClick={(e) => {
                    setStatus(v.id);
                  }}
                >
                  {v.name}
                </button>
              </li>
            );
          })}
        </ul>
        {/* 全部系列 */}

        <div className={`${status === 1 ? "d-block" : "d-none"}`}>
          <Inproall />
        </div>
        <div className={`${status === 2 ? "d-block" : "d-none"}`}>
          <Inprofamily />
        </div>
        <div className={`${status === 3 ? "d-block" : "d-none"}`}>
          <Inprocard />
        </div>
        <div className={`${status === 4 ? "d-block" : "d-none"}`}>
          <Inprostrategy />
        </div>
        <Link to="/product" target="_top">
          <div className="moreButton text-center">看更多</div>
        </Link>
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
                  className={`d-inline-block recommendType text-decoration-none text-center ${
                    status === v.id ? "recommendActive" : ""
                  }`}
                  onClick={(e) => {
                    setStatus(v.id);
                  }}
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
          rankArr1={`../product_img/550x400/${newRank2.length>0 ? newRank2[0].product_img : ""}`}
          rankArr2={`../product_img/550x400/${newRank2.length>0 ? newRank2[1].product_img : ""}`}
          rankArr3={`../product_img/550x400/${newRank2.length>0 ? newRank2[2].product_img : ""}`}
           />
        </div>
        <div className={`${status===2?"d-block":"d-none"}`} >
        <IndexVote
          vote={famiArr}
          name={textFami}
          rankArr1={`../product_img/550x400/${famiRank2.length>0 ? famiRank2[0].product_img : ""}`}
          rankArr2={`../product_img/550x400/${famiRank2.length>0 ? famiRank2[1].product_img : ""}`}
          rankArr3={`../product_img/550x400/${famiRank2.length>0 ? famiRank2[2].product_img : ""}`}
           />
        </div>
        <div className={`${status===3?"d-block":"d-none"}`} >
        <IndexVote 
           vote={cardArr}
           name={textCard}
           rankArr1={`../product_img/550x400/${cardRank2.length>0 ? cardRank2[0].product_img : ""}`}
           rankArr2={`../product_img/550x400/${cardRank2.length>0 ? cardRank2[1].product_img : ""}`}
           rankArr3={`../product_img/550x400/${cardRank2.length>0 ? cardRank2[2].product_img : ""}`}
        />
        </div>
        <div className={`${status===4?"d-block":"d-none"}`} >
        <IndexVote 
          vote={tragArr}
          name={textTrag}
          rankArr1={`../product_img/550x400/${tragRank2.length>0 ? tragRank2[0].product_img : ""}`}
          rankArr2={`../product_img/550x400/${tragRank2.length>0 ? tragRank2[1].product_img : ""}`}
          rankArr3={`../product_img/550x400/${tragRank2.length>0 ? tragRank2[2].product_img : ""}`}
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
        <IndexContest 
        // 第一個比賽資訊
          title1={contest.length>0 ? contest[0].contest_title : ""}
          pic1={`../img/contest/${contest.length>0 ? contest[0].contestPic : ""}`}
          date1={contest.length>0 ? contest[0].contestDateStart : ""}
          num1={contest.length>0 ? contest[0].contest_limit - contest[0].contest_title_no : "" }
          // title2={newCon1.length>0 ? newCon1[1].contest_title : ""}
           // 第二個比賽資訊
          // date2={contest.length>0 ? contest[1].contestDateStart : ""}
          // num2={contest.length>0 ? contest[1].contest_limit - contest[1].contest_title_no : "" }
           // 第三個比賽資訊
          // title3={contest.length>0 ? contest[2].contest_title : ""}
          // pic3={contest.length>0 ? contest[2].contestPic : ""}
          // date3={contest.length>0 ? contest[2].contestDateStart : ""}
          // num3={contest.length>0 ? contest[2].contest_limit - contest[1].contest_title_no : "" }
        />


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
        <IndexDiscuss />
        <a class="discussButton text-center" href="#/">
          看更多
        </a>
        <div></div>
      </div>
      {/* 關於我們 */}
      <IndexAbout about={about} setAbout={setAbout}></IndexAbout>
      {/* 尾巴 */}
    </div>
  );
};

export default Index;
