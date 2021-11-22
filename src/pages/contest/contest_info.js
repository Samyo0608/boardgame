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
import {Row, Col, Form } from "react-bootstrap";
import {withRouter} from "react-router-dom"
import axios from "axios";
import { API_URL } from '../../configs/config';
import Button from "@restart/ui/esm/Button";
import moment from "moment";
import Swal from 'sweetalert2'



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

// useEffect(async() => {
//   let keyinAdd = await axios.get(`${API_URL}/keyin/in`
//   );
//   setSignup(keyinAdd.data);
//   }, [])

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
  const [signup,setSignup] =useState({
    contest_title:"",
    contest_name: "",
    contest_phone:"",
    contest_email:"",
  });
  
 // 寫一個存放投票陣列的鉤子 

  async function handleSubmit(e) {
    e.preventDefault();
    try{
      let res = await axios.post(`${API_URL}/contest/keyin`,
      signup
    );
    } catch(e) {
      console.log("handleSubmit",e)
    }  
  }

  // 頁數判斷
  const pageNow = info.contest_id
  const pageNoFront = String(pageNow -1)
  const pageNoBack = String(pageNow +1)

  // BarChart陣列


  

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
            <Col  md={8} className="mt-4">{moment(info.contestDateStart).format("YYYY年MM月DD日")}</Col>
            <Col  md={4} className="mt-4"> <FontAwesomeIcon icon={faDice} />報名截止日期:</Col>
            <Col  md={8} className="mt-4">{moment(info.contestDateEnd).format("YYYY年MM月DD日")}</Col>
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

        <Form method="post" onSubmit={handleSubmit}>
          <Form.Group as={Row} className="fontActivity" >
            <Form.Label column md={4}>
            <FontAwesomeIcon icon={faDice} className="mt-4" />　活動名稱</Form.Label>
            <Col md={8}>
              <Form.Control 
                name="contest_title"
                type="text"
                required
                className="conInputStyle mt-4"
                // value={signup.contest_title}
                onChange={(e) => {
                  let newSignup = {...signup};
                  newSignup.contest_title =e.target.value;
                  setSignup(newSignup)
                  console.log(signup)
                }}
              />
            </Col>
          </Form.Group>

          <Form.Group as={Row} className="fontActivity" >
            <Form.Label column md={4}><FontAwesomeIcon icon={faDice} className="mt-4" />　姓　　名</Form.Label>
            <Col md={8}>
              <Form.Control 
                name="contest_title"
                placeholder=""
                className="conInputStyle mt-4"
                // value={signup.contest_name}
                onChange={(e) => {
                  let newSignup = {...signup};
                  newSignup.contest_name =e.target.value;
                  setSignup(newSignup)
                  console.log(signup)
                }}
              />
            </Col>
          </Form.Group>

          <Form.Group as={Row} className="fontActivity" >
            <Form.Label column md={4}><FontAwesomeIcon icon={faDice} className="mt-4" />　連絡電話</Form.Label>
            <Col md={8}>
              <Form.Control 
                name="contest_title"
                placeholder=""
                className="conInputStyle mt-4"
                // value={signup.contest_title}
                onChange={(e) => {
                  let newSignup = {...signup};
                  newSignup.contest_phone =e.target.value;
                  setSignup(newSignup)
                  console.log(signup)
                }}
              />
            </Col>
          </Form.Group>

          <Form.Group as={Row} className="fontActivity" >
            <Form.Label column md={4}><FontAwesomeIcon icon={faDice} className="mt-4" />　聯絡信箱</Form.Label>
            <Col md={8}>
              <Form.Control 
                name="contest_title"
                placeholder=""
                className="conInputStyle mt-4"
                // value={signup.contest_email}
                onChange={(e) => {
                  let newSignup = {...signup};
                  newSignup.contest_email =e.target.value;
                  setSignup(newSignup)
                  console.log(signup)
                }}
              />
            </Col>
          </Form.Group>
          <Button type="submit" className={info.contest_limit -info.contest_title_no === 0 ? "disConSubmit" : "conSubmit"}>{info.contest_limit -info.contest_title_no === 0 ? "已額滿" : "送　出"}</Button>
        </Form>

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
