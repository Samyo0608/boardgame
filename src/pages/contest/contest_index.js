import React from 'react'
//import PropTypes from 'prop-types'
// import "../../App.css";
import "../../css/contest.css"
import "normalize.css";
import "bootstrap/dist/css/bootstrap.min.css";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faSearch } from '@fortawesome/free-solid-svg-icons' // <-- import faSearch
import {Container, Row,Col,} from 'react-bootstrap'


function index(props) {
    return (
        <>
        
        {/* 活動資訊 */}
        <h2 className="text-center">活動資訊</h2>
        <div className="titleLineBox">
            <img alt="" className="titleLine" src="img/index/line.png" />
        </div>

    <div className="searchBar row">
        <div className="d-flex">
            <form action="" className="d-inline">
          
                <input type="search" className="" id="search"/>
                <FontAwesomeIcon icon={faSearch} className="searchIcon"/>
               
                <input type="checkbox" className="" value="" id="card" />
                <label For="card" className="fs-3 fontColor">卡牌</label>
                <input type="checkbox" className="" value="" id="family"/>
                <label for="family" className="fs-3 fontColor">家庭</label>
                <input type="checkbox" className="" value="" id="stategy"/>
                <label for="stategy" className="fs-3 fontColor"> 策略</label>
                <label className="fs-3 fontColor">
                    <span className="deleButton">&#10005; 清除結果</span>
                </label>
            </form> 
        </div>
    </div>
        
                
              
    

     {/* 活動資訊卡片 */}
     <Container>
        <Row>
            <Col md={6}>
                
                <div className="card m-5">
                {/* 標籤 */}
                <a
                  href="#/"
                  className="text-dark text-decoration-none recommendTag d-inline-block pt-1"
                >
                  <img
                    alt=""
                    src="img/index/card-tag.png"
                    className="tagImg"
                  />
                  <p className="tagText">卡牌</p>
                </a>
                {/* 內容 */}
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
            
            
            {/* 內容 */}
                <div className="card m-5">
                    {/* 標籤 */}
                <a
                  href="#/"
                  className="text-dark text-decoration-none recommendTag d-inline-block pt-1"
                >
                  <img
                    alt=""
                    src="img/index/trag-tag.png"
                    className="tagImg"
                  />
                  <p className="tagText">策略</p>
                </a>
                {/* 內容 */}
                    <div className="contestPic">
                    <img alt="遊戲圖片" className="images" src={process.env.PUBLIC_URL + '/img/contest/c01.jpg'} background-size="cover" fluid />
                    </div>
                    <p className="fs-5 m-2">2021-12-25(六)</p>
                    <h5 className="">《寶可夢王者挑戰賽》</h5>
                    <p className="p-2 m-2">大家期待已久的寶可夢卡牌對戰賽終於來啦!<br/>
                                        趕快手刀衝刺來報名吧!</p>
                    <div className="d-flex">
                         <div className="personNo">剩餘名額:3位</div>
                        <div className="doButton">我要報名</div>
                </div>
                    
                </div>
            </Col>
            <Col md={6}>
                <div className="card m-5">
                    {/* 標籤 */}
                    <a
                  href="#/"
                  className="text-dark text-decoration-none recommendTag d-inline-block pt-1"
                >
                  <img
                    alt=""
                    src="img/index/family-tag.png"
                    className="tagImg"
                  />
                  <p className="tagText">家庭</p>
                </a>
                {/* 內容 */}
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
                    {/* 標籤 */}
                    <a
                  href="#/"
                  className="text-dark text-decoration-none recommendTag d-inline-block pt-1"
                >
                  <img
                    alt=""
                    src="img/index/card-tag.png"
                    className="tagImg"
                  />
                  <p className="tagText">卡牌</p>
                </a>
                {/* 內容 */}
                    <div className="contestPic">
                    <img alt="遊戲圖片" className="images" src={process.env.PUBLIC_URL + '/img/contest/c01.jpg'} background-size="cover" fluid />
                    </div>
                    <p className="fs-5 m-2">2021-12-25(六)</p>
                    <h5 className="">《寶可夢王者挑戰賽》</h5>
                    <p className="p-2 m-2">大家期待已久的寶可夢卡牌對戰賽終於來啦!<br/>
                                        趕快手刀衝刺來報名吧!</p>
                    <div className="d-flex">
                         <div className="personNo">剩餘名額:10位</div>
                        <div className="doButton">我要報名</div>
                </div>
                    
                </div>
            </Col>
            <Col md={6}>
                <div className="card m-5">
                    {/* 標籤 */}
                    <a
                  href="#/"
                  className="text-dark text-decoration-none recommendTag d-inline-block pt-1"
                >
                  <img
                    alt=""
                    src="img/index/trag-tag.png"
                    className="tagImg"
                  />
                  <p className="tagText">策略</p>
                </a>
                {/* 內容 */}
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
                        {/* 標籤 */}
                <a
                  href="#/"
                  className="text-dark text-decoration-none recommendTag d-inline-block pt-1"
                >
                  <img
                    alt=""
                    src="img/index/family-tag.png"
                    className="tagImg"
                  />
                  <p className="tagText">家庭</p>
                </a>
                {/* 內容 */}
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

