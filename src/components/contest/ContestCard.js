import React from 'react'
import PropTypes from 'prop-types'
import "bootstrap/dist/css/bootstrap.min.css";
import {Container, Row,Col,Form,FormControl,Button} from "react-bootstrap";
import {LABELIMGS} from "../../configs/config"
import {Link} from 'react-router-dom';
import moment from "moment";
// var moment = require('moment')

// 定義台灣制的日曆

// The end of moment defined.

function ContestCard(props) {
    const {id,date,title,innertext,limit,category,img,no} =props;

    return (
        <>
                    <Col md={6}>
                
                <div className="card m-5">
                {/* 標籤 */}
                <a
                  href="#/"
                  className="text-dark text-decoration-none recommendTag d-inline-block pt-1"
                >
                  <img
                    alt=""
                    src={LABELIMGS[category]}
                    className="tagImg"
                  />
                  <p className="tagText">{category}</p>
                </a>
                {/* 內容 */}
                    <div className="contestPic">
                    <img alt="遊戲圖片" className="images" src={img} fluid />
                    </div>
                    <p className="fs-5 m-2">{moment(date).format("YYYY年MM月DD日")}</p>
                    <h5>《{title}》</h5>
                    <p className="p-2 m-2">{innertext}</p>
                    <Link to={`/contestInfo/${id}`} className="d-flex">
                         <div className="personNo">剩餘名額:{limit - no}</div>
                        <div className={`${limit - no === 0 ?  "disButton" :"doButton" }`} >{`${limit - no === 0 ?  "已額滿" :"我要報名" }`}</div>
                    </Link>
                    
                </div>
            </Col> 
        </>
    )
}


export default ContestCard

