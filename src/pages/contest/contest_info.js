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
import axios from "axios";
import { API_URL } from '../../configs/config';

 


function Contest_info(props) {

  // useEffect(() => {
  //   // 轉換網址id
  //   const newInfo = contestItems.find((v,i)=>{
  //     return v.id === Number(props.match.params.id)
  //   })
  //   // params(get)、query(get)、body(post)
  //   setInfo(newInfo) 
  // },[props.match.params.id])
 
  useEffect(async () =>{
    let res = await axios.get(`${API_URL}/contest/card`);
    setInfo(res.data);
    const newInfo = res.data.find((v,i)=>{
      return v.contest_id === Number(props.match.params.id)
    })
    setInfo(newInfo)
  },[props.match.params.id])

  const[info,setInfo]=useState({
    contest_id: 0,
    contest_title: '',
    contest_inner_text: '',
    contest_limit: 0,
    contest_title_no: 0,
    contestDateStart: '',
    contestDateEnd: '',
    contestModel: '',
    contestMethod: '',
    contestPic: '',
    category: '',

  })

  // 填寫報名資訊用
  const [keyin,setKeyin] =useState({
    contest_title:"",
    contest_name: "",
    contest_phone:"",
    contest_email:"",
  })
  
  function handleChange(e) {
    let newKeyin ={...keyin};
    newKeyin[e.target.contest_title] = e.target.value;
    setKeyin(newKeyin);
  }

  async function handleSubmit(e) {
    e.preventDefault();
    try{
      let formData = new FormData();
      formData.append("contest_title",keyin.contest_title);
      formData.append("contest_name",keyin.contest_name);
      formData.append("contest_phone",keyin.contest_phone);
      formData.append("contest_email",keyin.contest_email);
      let res = await axios.post(`${API_URL}/keyin/signup`,formData)
    } catch(e) {
      console.log("handleSubmit")
    }
  }

  //頁數判斷
  const pageNow = info.contest_id
  const pageNoFront = String(pageNow -1)
  const pageNoBack = String(pageNow +1)

  
  

  const show = (
    <>
        {/* 活動報名 */}

      <h2 className="text-center">活動報名</h2>
      <div className="titleLineBox">
        <img alt="" className="titleLine" src="../img/index/line.png" />
      </div>
      
      <img src="../img/contest/conBg02.jpg" alt="" className="bagd" />
     
      <div>
      <div className="firstTitle bold">{info.contest_title}</div>

        <img
          alt="活動示意圖"
          src={info.contestPic}
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
            <Col  md={8} className="mt-4">{info.contestDateStart}</Col>
            <Col  md={4} className="mt-4"> <FontAwesomeIcon icon={faDice} />報名截止日期:</Col>
            <Col  md={8} className="mt-4">{info.contestDateEnd}</Col>
            <Col  md={4} className="mt-4"> <FontAwesomeIcon icon={faDice} />比賽模式:</Col>
            <Col  md={8} className="mt-4">{info.contestModel}</Col>
            <Col  md={4} className="mt-4"> <FontAwesomeIcon icon={faDice} />比賽方法:</Col>
            <Col  md={8} className="mt-4">{info.contestMethod}</Col>

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

        <form method="post" onSubmit={handleSubmit}>
        <Row className="fontActivity">
          <Col md={4}><FontAwesomeIcon icon={faDice} className="mt-4" />
                活動名稱:</Col>
          <Col md={8} className="mt-4">
          <div name="contest_title" onSubmit={handleSubmit} className="d-flex justify-content-start ps-3">{info.contest_title}</div>
            
          </Col>
          <Col md={4} className="mt-4"><FontAwesomeIcon icon={faDice} />姓　　名:</Col>
          <Col md={8}><input name="contest_name" onSubmit={handleSubmit} type="text" className="conInputStyle mt-4"></input></Col>
          <Col md={4} className="mt-4"> <FontAwesomeIcon icon={faDice} />
                連絡電話:</Col>
          <Col md={8} className="mt-4">
          <input name="contest_phone" onSubmit={handleSubmit} type="text" className="conInputStyle"/></Col>
          <Col md={4} className="mt-4"><FontAwesomeIcon icon={faDice} />
                聯絡信箱:</Col>
          <Col md={8} className="mt-4"><input name="contest_email" type="text" className="conInputStyle"/></Col>
          <Col md={12} className="mt-1">
          <input type="submit" onSubmit={handleSubmit} value={info.contest_limit -info.contest_title_no === 0 ? "已額滿" : "送　出"} className={info.contest_limit -info.contest_title_no === 0 ? "disConSubmit" : "conSubmit"} /></Col>
        </Row>
        </form>

        </div>

        {/* 底部按鈕 */}
        <div className="buttonZone">
          <Link to={`${pageNoFront === "0" ? "6" : pageNoFront}`} className="arrowStyle">
            <FontAwesomeIcon icon={faAngleDoubleLeft} />
          </Link>
          <Link to="/" className="buttonStyleCon" value="/">回首頁</Link>
          <Link to={`${pageNoBack === "7" ? "1" : pageNoBack}`} className="arrowStyle">
            <FontAwesomeIcon icon={faAngleDoubleRight} />
          </Link>
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
