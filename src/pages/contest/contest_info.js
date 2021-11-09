import {React} from "react";
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
import { Container, Row, Col } from "react-bootstrap";
function Contest_info(props) {
  return (
    <>
      {/* 活動報名 */}

      <h2 className="text-center">活動報名</h2>
      <div className="titleLineBox">
        <img alt="" className="titleLine" src="img/index/line.png" />
      </div>
      
      <img src="../img/contest/conBg02.jpg" alt="" className="bagd" />
     
      <div>
      <div className="firstTitle bold">寶可夢卡牌報名對戰開始!</div>

        <img
          alt="活動示意圖"
          src="img/contest/conInner01.jpg "
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
            <Col  md={8} className="mt-4">2021年12月25日</Col>
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
  );
}

export default Contest_info;
