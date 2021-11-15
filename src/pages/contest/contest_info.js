import {React,useState,useEffect} from "react";
import PropTypes from "prop-types";
import "../../css/contestInfo.css";
import "normalize.css";
import "bootstrap/dist/css/bootstrap.min.css";
import { Link } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faDice,
  faAngleDoubleRight,
  faAngleDoubleLeft,
} from "@fortawesome/free-solid-svg-icons"; // <-- import faSearch
import {Row, Col } from "react-bootstrap";
import {withRouter} from "react-router-dom"

// 假資料製作
const contestItems = [
  {
  id: 1,
  date:'2021-12-25(六)',
  title:'《寶可夢王者挑戰賽》',
  innertext:'大家期待已久的寶可夢卡牌對戰賽終於來啦!趕快手刀衝刺來報名吧!',
  limit: 2,
  category:'卡牌',
  img:'img/contest/con01.jpg',
  imgTag:'img/index/card-tag.png',
  contestDataStart:"2021年12月25日",
  contestDataEnd:"2021年11月30日",
  contestModal:"以單人報名的個人賽方式進行。",
  contestMethod:"詳情請見文件說明檔",
  contestPic:"../img/contest/conInner01.jpg",
  },
  {
  id: 2,
  date:'2021-12-10(五)',
  title:'《辣個蟑螂又來啦!》',
  innertext:'非常耐玩的德國蟑螂要在遊戲職人舉辦比賽了，來挑戰看看吧!',
  limit: 2,
  category:'卡牌',
  img:'img/contest/con02.jpg',
  imgTag:"img/index/card-tag.png",
  contestDataStart:"2021年12月25日",
  contestDataEnd:"2021年11月30日",
  contestModal:"以單人報名的個人賽方式進行。",
  contestMethod:"詳情請見文件說明檔",
  contestPic:"../img/contest/conInner01.jpg",
  },
  {
  id: 3,
  date:'2021-11-28(日)',
  title:'《要...一起跳舞嗎?》',
  innertext:'犯人在跳舞，你抓得到嗎?一款鬥心機的卡牌遊戲，來參加看看嗎?',
  limit: 5,
  category:'卡牌',
  img:'img/contest/con03.jpg',
  imgTag:'img/index/card-tag.png',
  contestDataStart:"2021年12月25日",
  contestDataEnd:"2021年11月30日",
  contestModal:"以單人報名的個人賽方式進行。",
  contestMethod:"詳情請見文件說明檔",
  contestPic:"img/index/line.png",
  },
  // {
  //   id: 4,
  //   date:'2021-11-15(一)',
  //   title:'《波多黎各，渡假溜~》',
  //   innertext:'有玩過波多璃各嗎?高手們快來報名參加吧!',
  //   limit: 5,
  //   category:'策略',
  //   img:'img/contest/con04.jpg',
  //   imgTag:'img/index/trag-tag.png',
  //   },
  //   {
  //     id:5,
  //     date:'2021-10-31(日)',
  //     title:'《愜意午後的農家樂!》',
  //     innertext:'嚮往農村生活嗎?快揪三五好友一同來比賽，渡過一個愉快的下午吧~',
  //     limit: 5,
  //     category:'策略',
  //     img:'img/contest/con05.jpg',
  //     imgTag:'img/index/trag-tag.png',
  //     },
  //   {
  //     id: 6,
  //     date:'2021-10-25(一)',
  //     title:'《大富翁全家同樂會》',
  //     innertext:'歡迎來參加活動',
  //     limit: 5,
  //     category:'家庭',
  //     img:'img/contest/con06.jpg',
  //     imgTag:'img/index/family-tag.png',
  //   },
]
 


function Contest_info(props) {
  const[info,setInfo]=useState({
    id: 0,
    date:'',
    title:'',
    innertext:'',
    limit: 0,
    category:'',
    img:'',
    imgTag:'',
    contestDataStart:'',
    contestDataEnd:'',
    contestModal:'',
    contestMethod:'',
    contestPic:'',

  })

  useEffect(() => {
    // 轉換網址id
    const newInfo = contestItems.find((v,i)=>{
      return v.id === Number(props.match.params.id)
    })
    // params(get)、query(get)、body(post)
    setInfo(newInfo) 
  },[props.match.params.id])
  


  const show = (
    <>
        {/* 活動報名 */}

      <h2 className="text-center">活動報名</h2>
      <div className="titleLineBox">
        <img alt="" className="titleLine" src="../img/index/line.png" />
      </div>
      
      <img src="../img/contest/conBg02.jpg" alt="" className="bagd" />
     
      <div>
      <div className="firstTitle bold">標題{info.date}</div>

        <img
          alt="活動示意圖"
          src="../img/contest/conInner01.jpg "
          className="conInner"
        />
        <div className="conDirectionR">
          <h2 className="text-center">活動說明</h2>
          <div className="titleLineBox">
            <img alt="" className="titleLine" src="img/index/line.png" />
          </div>

          {/* 活動說明區塊 */}

          <Row className="fontActivity d-flex">
            <Col  md={4} className="mt-4"> <FontAwesomeIcon icon={faDice} />比賽日期:</Col>
            <Col  md={8} className="mt-4">12月25日</Col>
            <Col  md={4} className="mt-4"> <FontAwesomeIcon icon={faDice} />報名截止日期:</Col>
            <Col  md={8} className="mt-4">2021年11月30日</Col>
            <Col  md={4} className="mt-4"> <FontAwesomeIcon icon={faDice} />比賽模式:</Col>
            <Col  md={8} className="mt-4">以單人報名的個人賽方式進行。</Col>
            <Col  md={4} className="mt-4"> <FontAwesomeIcon icon={faDice} />比賽方法:</Col>
            <Col  md={8} className="mt-4">詳情請見文件說明檔</Col>

            <Col md={12} className="mt-4 justify-content-end"><div  className="d-flex justify-content-end me-5"><Link to="/contestInfo" >
            附檔:寶可夢卡牌對戰方式與規則</Link></div></Col>
          </Row>
        </div>

        {/* 活動報名區塊 */}

        <div className="conDirectionL">
          <h2 className="text-center">活動報名</h2>
          <div className="titleLineBox">
            <img alt="" className="titleLine" src="img/index/line.png" />
          </div>

        <form>
        <Row className="fontActivity">
          <Col md={4}><FontAwesomeIcon icon={faDice} className="mt-4" />
                活動名稱:</Col>
          <Col md={8} className="mt-4">
          <div className="d-flex justify-content-start ps-3">寶可夢卡牌對戰</div>
            
          </Col>
          <Col md={4} className="mt-4"><FontAwesomeIcon icon={faDice} />姓　　名:</Col>
          <Col md={8}><input type="text" className="conInputStyle mt-4"></input></Col>
          <Col md={4} className="mt-4"> <FontAwesomeIcon icon={faDice} />
                連絡電話:</Col>
          <Col md={8} className="mt-4"><input type="text" className="conInputStyle"/></Col>
          <Col md={4} className="mt-4"><FontAwesomeIcon icon={faDice} />
                聯絡信箱:</Col>
          <Col md={8} className="mt-4"><input type="text" className="conInputStyle"/></Col>
          <Col md={12} className="mt-1"><input type="submit" value="送  出" className="conSubmit m-3" /></Col>
        </Row>
        </form>

        </div>

        {/* 底部按鈕 */}
        <div className="buttonZone">
          <a href="#/contestInfo/" className="arrowStyle">
            <FontAwesomeIcon icon={faAngleDoubleLeft} />
          </a>
          <button className="buttonStyleCon" value="/">回首頁</button>
          <a href="#/contestInfo/" className="arrowStyle">
            <FontAwesomeIcon icon={faAngleDoubleRight} />
          </a>
        </div>
      </div>



    </>

    
  )

  return (
    <>
      {show}
    </>
  );
}

export default withRouter(Contest_info);
