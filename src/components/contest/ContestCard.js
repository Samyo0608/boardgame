import React from 'react'
import PropTypes from 'prop-types'
import "bootstrap/dist/css/bootstrap.min.css";
import {Container, Row,Col,Form,FormControl,Button} from "react-bootstrap";
// props範例
// {
//     id: 1,
//     date:'2021-12-25(六)',
//     title:'《寶可夢王者挑戰賽》',
//     innertext:'歡迎來參加活動',
//     limit: 2,
//     category:'家庭',
//     img:'img/contest/con01.jpg',
//     },

function ContestCard(props) {
    const {date,title,innertext,limit,category,img,imgTag} =props
    //const{data,tite,innertext,limit,category,img} = props

    
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
                    src={imgTag}
                    className="tagImg"
                  />
                  <p className="tagText">{category}</p>
                </a>
                {/* 內容 */}
                    <div className="contestPic">
                    <img alt="遊戲圖片" className="images" src={img} fluid />
                    </div>
                    <p className="fs-5 m-2">{date}</p>
                    <h5>{title}</h5>
                    <p className="p-2 m-2">{innertext}</p>
                    <div className="d-flex">
                         <div className="personNo">剩餘名額:{limit}</div>
                        <div className="disButton ">已額滿</div>
                </div>
                    
                </div>
            </Col> 
        </>
    )
}


export default ContestCard
