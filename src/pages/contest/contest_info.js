import React from "react";
import PropTypes from "prop-types";
import "../../css/contestInfo.css";
import "normalize.css";
import "bootstrap/dist/css/bootstrap.min.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faDice,
  faAngleDoubleRight,
  faAngleDoubleLeft,
} from "@fortawesome/free-solid-svg-icons"; // <-- import faSearch
import { Container, Row, Col } from "react-bootstrap";
function contest_info(props) {
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

          <table className="fontActivity">
            <tr cellspacing="100">
              <td width="40%">
                <FontAwesomeIcon icon={faDice} /> 比賽日期:
              </td>
              <td width="60%">2021年12月25日</td>
            </tr>
            <tr>
              <td>
                <FontAwesomeIcon icon={faDice} /> 報名截止日期:
              </td>
              <td>2021年11月30日</td>
            </tr>
            <tr>
              <td>
                <FontAwesomeIcon icon={faDice} /> 比賽模式:
              </td>
              <td>以單人報名的個人賽方式進行。</td>
            </tr>
            <tr>
              <td>
                <FontAwesomeIcon icon={faDice} /> 比賽方法:
              </td>
              <td>詳情請見文件說明檔</td>
            </tr>
          </table>
          <a href="http://localhost:3000/#/contestInfo/">
            附檔:寶可夢卡牌對戰方式與規則
          </a>
        </div>

        {/* 活動報名區塊 */}

        <div className="conDirectionL">
          <h2 className="text-center">活動報名</h2>
          <div className="titleLineBox">
            <img alt="" className="titleLine" src="img/index/line.png" />
          </div>

          <table className="fontActivity">
            <tr>
              <td width="40%">
                <FontAwesomeIcon icon={faDice} />
                活動名稱:{" "}
              </td>
              <td width="60%" for="conName">
                <input type="text" className="conInputStyle"></input>
              </td>
            </tr>
            <tr>
              <td>

                <FontAwesomeIcon icon={faDice} />姓　　名:{" "}


              </td>
              <td>
                <input type="text" className="conInputStyle"></input>
              </td>
            </tr>
            <tr>
              <td>
                <FontAwesomeIcon icon={faDice} />
                連絡電話:{" "}
              </td>
              <td>
                <input type="text" className="conInputStyle"></input>
              </td>
            </tr>
            <tr>
              <td>
                <FontAwesomeIcon icon={faDice} />
                聯絡信箱:{" "}
              </td>
              <td>
                <input type="text" className="conInputStyle"></input>
              </td>
            </tr>
          </table>

          <input type="submit" value="送  出" className="conSubmit m-3" />
        </div>

        {/* 底部按鈕 */}
        <div className="buttonZone">
          <a href="#/contestInfo/" className="arrowStyle">
            <FontAwesomeIcon icon={faAngleDoubleLeft} />
          </a>
          <button className="buttonStyleCon">回首頁</button>
          <a href="#/contestInfo/" className="arrowStyle">
            <FontAwesomeIcon icon={faAngleDoubleRight} />
          </a>
        </div>
      </div>
    </>
  );
}

export default contest_info;
