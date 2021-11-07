import React from 'react'
import PropTypes from 'prop-types'
import "../../css/contestInfo.css";
import "normalize.css";
import "bootstrap/dist/css/bootstrap.min.css";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faDice } from '@fortawesome/free-solid-svg-icons' // <-- import faSearch
import {Container, Row,Col,} from 'react-bootstrap'
function contest_info(props) {
    return (
        <>
             {/* 活動報名 */}
        <h2 className="text-center">活動報名</h2>
        <div className="titleLineBox">
            <img alt="" className="titleLine" src="img/index/line.png" />
        </div>
        <div className="conInfoBg container overflowhide">
            <h2 className="text-center">寶可夢卡牌報名對戰開始!
            </h2>
            <img alt="活動示意圖" src="img/contest/conInner01.jpg " className="conInner"/>
            <div className="conDirectionR">
                <h2 className="text-center">活動說明</h2>
                <div className="titleLineBox">
                    <img alt="" className="titleLine" src="img/index/line.png" />
                </div>
                <p className="fontActivity"><FontAwesomeIcon icon={faDice} />  比賽日期:2021年12月25日</p>
                <p className="fontActivity"><FontAwesomeIcon icon={faDice} />  報名截止日期:2021年11月30日</p>
                <p className="fontActivity"><FontAwesomeIcon icon={faDice} />  比賽模式/參加人數:個人賽方式/1人為限。</p>
                <p className="fontActivity"><FontAwesomeIcon icon={faDice} />  比賽方法:詳情請見文件說明檔</p>
                <a href="http://localhost:3000/#/contestInfo/">附檔:寶可夢卡牌對戰方式與規則</a>
            </div>

            <div className="conDirectionL">
                 <h2 className="text-center">活動報名</h2>
                <div className="titleLineBox">
                <img alt="" className="titleLine" src="img/index/line.png" />
                </div>
            </div>
        
            <div className="buttonZone">
                <a href="#/">上一頁</a>
                <button className="buttonStyleCon">回首頁</button>
                <a href="#/">下一頁</a>
            </div>
        
        </div>
      



        </>
    )
}

export default contest_info

