import React from 'react'
import PropTypes from 'prop-types'
import "../../App.css";
import "../../css/contest.css"
import "normalize.css";
import "bootstrap/dist/css/bootstrap.min.css";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faDice } from '@fortawesome/free-solid-svg-icons' // <-- import faDice
import {Container, Row,Col,} from 'react-bootstrap'


function index(props) {
    return (
        <>
        <div className="p-3">
            <h2 className=""> <FontAwesomeIcon icon={faDice}  />活動資訊</h2> 
        </div>
        <div className="line" />
        
        <div className="searchBar m-3 p-2 ">
        {/* <div className="searchBarWhite p-2"></div> */}
            <form action="" className="d-inline">
            <input type="search" className="p-2"/>
            <span className="searchIcon"></span>
                <input type="checkbox" className="" value="" />
                <label For="vehicle1" className="fs-3 fontColor">卡牌</label>
                <input type="checkbox" className="" value=""/>
                <label for="vehicle2" className="fs-3 fontColor">家庭</label>
                <input type="checkbox" className="" value=""/>
                <label for="vehicle3" className="fs-3 fontColor"> 策略</label>
                <label className="fs-3 fontColor">
                <span className="delete">&#10005;</span>清除結果</label>
            </form> 
            
        
      
     </div>
     <Container>
        <Row>
            <Col md={6}>
                <div className="card m-5">
                    <div className="contestPic">
                    <img alt="遊戲圖片" className="images" src={process.env.PUBLIC_URL + '/img/contest/c01.jpg'}  fluid />
                    </div>
                    <p className="fs-5 m-2">2021-12-25(六)</p>
                    <h5 className="">《寶可夢王者挑戰賽》</h5>
                    <p className="p-2 m-2">大家期待已久的寶可夢卡牌對戰賽終於來啦!<br/>
                                        趕快手刀衝刺來報名吧!</p>
                    <div className="d-flex">
                         <div className="personNo">剩餘名額:0位</div>
                        <div className="disButton ">已額滿</div>
                </div>
                    
                </div>
            </Col>
            <Col md={6}>
                <div className="card m-5">
                    <div className="contestPic">
                    <img alt="遊戲圖片" className="images" src={process.env.PUBLIC_URL + '/img/contest/c01.jpg'} background-size="cover" fluid />
                    </div>
                    <p className="fs-5 m-2">2021-12-25(六)</p>
                    <h5 className="">《寶可夢王者挑戰賽》</h5>
                    <p className="p-2 m-2">大家期待已久的寶可夢卡牌對戰賽終於來啦!<br/>
                                        趕快手刀衝刺來報名吧!</p>
                    <div className="d-flex">
                         <div className="personNo">剩餘名額:0位</div>
                        <div className="disButton">已額滿</div>
                </div>
                    
                </div>
            </Col>
            <Col md={6}>
                <div className="card m-5">
                    <div className="contestPic">
                    <img alt="遊戲圖片" className="images" src={process.env.PUBLIC_URL + '/img/contest/c01.jpg'} background-size="cover" fluid />
                    </div>
                    <p className="fs-5 m-2">2021-12-25(六)</p>
                    <h5 className="">《寶可夢王者挑戰賽》</h5>
                    <p className="p-2 m-2">大家期待已久的寶可夢卡牌對戰賽終於來啦!<br/>
                                        趕快手刀衝刺來報名吧!</p>
                    <div className="d-flex">
                         <div className="personNo">剩餘名額:0位</div>
                        <div className="disButton">已額滿</div>
                </div>
                    
                </div>
            </Col>
            <Col md={6}>
                <div className="card m-5">
                    <div className="contestPic">
                    <img alt="遊戲圖片" className="images" src={process.env.PUBLIC_URL + '/img/contest/c01.jpg'} background-size="cover" fluid />
                    </div>
                    <p className="fs-5 m-2">2021-12-25(六)</p>
                    <h5 className="">《寶可夢王者挑戰賽》</h5>
                    <p className="p-2 m-2">大家期待已久的寶可夢卡牌對戰賽終於來啦!<br/>
                                        趕快手刀衝刺來報名吧!</p>
                    <div className="d-flex">
                         <div className="personNo">剩餘名額:0位</div>
                        <div className="disButton">已額滿</div>
                </div>
                    
                </div>
            </Col>
            <Col md={6}>
                <div className="card m-5">
                    <div className="contestPic">
                    <img alt="遊戲圖片" className="images" src={process.env.PUBLIC_URL + '/img/contest/c01.jpg'} background-size="cover" fluid />
                    </div>
                    <p className="fs-5 m-2">2021-12-25(六)</p>
                    <h5 className="">《寶可夢王者挑戰賽》</h5>
                    <p className="p-2 m-2">大家期待已久的寶可夢卡牌對戰賽終於來啦!<br/>
                                        趕快手刀衝刺來報名吧!</p>
                    <div className="d-flex">
                         <div className="personNo">剩餘名額:0位</div>
                        <div className="disByautton">已額滿</div>
                </div>
                    
                </div>
            </Col>
            <Col md={6}>
                <div className="card m-5">
                    <div className="contestPic">
                    <img alt="遊戲圖片" className="images" src={process.env.PUBLIC_URL + '/img/contest/c01.jpg'} background-size="cover" fluid />
                    </div>
                    <p className="fs-5 m-2">2021-12-25(六)</p>
                    <h5 className="">《寶可夢王者挑戰賽》</h5>
                    <p className="p-2 m-2">大家期待已久的寶可夢卡牌對戰賽終於來啦!<br/>
                                        趕快手刀衝刺來報名吧!</p>
                    <div className="d-flex">
                         <div className="personNo">剩餘名額:0位</div>
                        <div className="disButton">已額滿</div>
                </div>
                    
                </div>
            </Col>
            
        </Row>
</Container>
        </>
    )
}


export default index

