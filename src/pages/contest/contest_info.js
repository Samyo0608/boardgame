import React from 'react'
import PropTypes from 'prop-types'
import "../../css/contestInfo.css";
import "normalize.css";
import "bootstrap/dist/css/bootstrap.min.css";
//import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
//import { faSearch } from '@fortawesome/free-solid-svg-icons' // <-- import faSearch
import {Container, Row,Col,} from 'react-bootstrap'
function contest_info(props) {
    return (
        <>
             {/* 活動報名 */}
        <h2 className="text-center">活動報名</h2>
        <div className="titleLineBox">
            <img alt="" className="titleLine" src="img/index/line.png" />
        </div>
        <div className="conInfoBg">
        <h2 className="text-center">寶可夢卡牌報名對戰開始!
        </h2>
        <img alt="活動示意圖" src="img/contest/conInner01.jpg " className="conInner"/>
       
        </div>
        </>
    )
}

export default contest_info

