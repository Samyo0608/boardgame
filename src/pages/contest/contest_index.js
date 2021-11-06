import React from 'react'
//import PropTypes from 'prop-types'
import "../../css/contest.css";
import "normalize.css";
import "bootstrap/dist/css/bootstrap.min.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faSearch } from '@fortawesome/free-solid-svg-icons' // <-- import faSearch
import {Container, Row,Col,Form,FormControl,Button} from "react-bootstrap";
//import Background from '../../../public/img/contest/conBg.jpg'
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
        <Form className="p-1">
        <FormControl
            type="search"
            placeholder="找遊戲"
            className="me-2 formControl"
            aria-label="Search"
          />
        <Button variant="link" className="searchIcon">
            <div>
              <FontAwesomeIcon icon={faSearch} />
            </div>
          </Button>
        </Form>
        
            <p className="fs-3 fontColor">分類:</p>
            <form action="" className="d-inline">
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
        
    <div>
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
                    src="img/index/family-tag.png"
                    className="tagImg"
                  />
                  <p className="tagText">家庭</p>
                </a>
                {/* 內容 */}
                    <div className="contestPic">
                    <img alt="遊戲圖片" className="images" src={process.env.PUBLIC_URL + '/img/contest/con01.jpg'}  fluid />
                    </div>
                    <p className="fs-5 m-2">2021-12-25(六)</p>
                    <h5>《寶可夢王者挑戰賽》</h5>
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
                    src="img/index/card-tag.png"
                    className="tagImg"
                  />
                  <p className="tagText">卡牌</p>
                </a>
                {/* 內容 */}
                    <div className="contestPic">
                    <img alt="遊戲圖片" className="images" src={process.env.PUBLIC_URL + '/img/contest/con02.jpg'} background-size="cover" fluid />
                    </div>
                    <p className="fs-5 m-2">2021-12-10(五)</p>
                    <h5>《辣個蟑螂又來啦!》</h5>
                    <p className="p-2 m-2">非常耐玩的德國蟑螂要在遊戲職人<br/>
                      舉辦比賽了，來挑戰看看吧!</p>
                    <div className="d-flex">
                        <div className="personNo">剩餘名額:6位</div>
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
                    src="img/index/card-tag.png"
                    className="tagImg"
                  />
                  <p className="tagText">卡牌</p>
                </a>
                {/* 內容 */}
                    <div className="contestPic">
                    <img alt="遊戲圖片" className="images" src={process.env.PUBLIC_URL + '/img/contest/con03.jpg'} background-size="cover" fluid />
                    </div>
                    <p className="fs-5 m-2">2021-11-28(日)</p>
                    <h5>《要...一起跳舞嗎?》</h5>
                    <p className="p-2 m-2">犯人在跳舞，你抓得到嗎?<br/>
                        一款鬥心機的卡牌遊戲，來參加看看嗎?</p>
                    <div className="d-flex">
                         <div className="personNo">剩餘名額:2位</div>
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
                    <img alt="遊戲圖片" className="images" src={process.env.PUBLIC_URL + '/img/contest/con04.jpg'} background-size="cover" fluid />
                    </div>
                    <p className="fs-5 m-2">2021-11-15(一)</p>
                    <h5>《波多黎各，渡假溜~》</h5>
                    <p className="p-2 m-2">有玩過波多璃各嗎?<br/>
                        高手們快來報名參加吧!</p>
                    <div className="d-flex">
                         <div className="personNo">剩餘名額:2位</div>
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
                    <img alt="遊戲圖片" className="images" src={process.env.PUBLIC_URL + '/img/contest/con05.jpg'} background-size="cover" fluid />
                    </div>
                    <p className="fs-5 m-2">2021-10-31(日)</p>
                    <h5 className="">《愜意午後的農家樂!》</h5>
                    <p className="p-2 m-2">嚮往農村生活嗎?<br/>
                        快揪三五好友一同來比賽，渡過一個愉快的下午吧~</p>
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
                    <img alt="遊戲圖片" className="images" src={process.env.PUBLIC_URL + '/img/contest/con06.jpg'} background-size="cover" fluid />
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

    </div>
    
        </>
    )
}


export default index

