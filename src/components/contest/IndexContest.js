import {React, Link} from 'react'
import PropTypes from 'prop-types'
import {Row, Col,Carousel} from "react-bootstrap";
import moment from 'moment';
function IndexContest(props) {
    const {title1,pic1,date1,num1,title2,pic2,date2,num2,title3,pic3,date3,num3} =props;

    return (
        <>
          {/* 
        <div className="row contestBox position-relative">
        <div className="col-9 p-0 contestImgBox">
          <img alt="" className="contestImg" src="/img/index/contest1.png" />
        </div>
        <div className="col-3 mt-3 p-0 text-center text-white position-relative">
          <p className="fs-5 fw-bold">第一屆寶可夢卡牌大賽</p>
          <p>舉辦日期 : 2021/09/01~09/07</p>
          <p>報名期限 : 2021/09/01~09/07</p>
          <p>尚餘名額 : 10位</p>
          
        </div>
        <Link to="contest" target="_top" class="contestMoreButton text-center" href="#/">
          看全部
        </Link>
      </div> */}
          <Carousel variant="dark" >
            <Carousel.Item >
            <Row>
            <Col md={9} className=" slideContest">
            <div className="contestFit">
            <img
             className="d-block w-100"
             src= {pic1}
             alt="First slide"
                />
            </div>
            </Col>
            <Col md={3} className="contestActive slideContest">
            <p className="fs-5 fw-bold mt-5">《{title1}》</p>
                <p>舉辦日期 : {moment(date1).format("YYYY年MM月DD日")}</p>
                <p>剩餘名額 : {num1}</p>
            </Col> 
            </Row>
            </Carousel.Item>

            {/* 第二個活動 */}
            <Carousel.Item >
            <Row>
            <Col md={9} className="slideContest">
            <div className="contestFit">
            <img
             className="d-block w-100"
             src= {pic1}
             alt="First slide"
                />
            </div>
            </Col>
            <Col md={3} className="slideContest">
                <p className="fs-5 fw-bold mt-5">《{title2}》</p>
                <p>舉辦日期 : {moment(date1).format("YYYY年MM月DD日")}</p>
                <p>剩餘名額 : {num1}</p>
            </Col> 
            </Row>
            </Carousel.Item>
            {/* 第三個活動 */}
            <Carousel.Item >
            <Row>
            <Col md={9} className="slideContest">
            <div className="contestFit">
            <img
             className="d-block w-100"
             src= {pic1}
             alt="First slide"
                />
            </div>
            </Col>
            <Col md={3} className="slideContest">
            <p className="fs-5 fw-bold mt-5">《{title1}》</p>
                <p>舉辦日期 : {moment(date1).format("YYYY年MM月DD日")}</p>
                <p>剩餘名額 : {num1}</p>
            </Col> 
            </Row>
            </Carousel.Item>
           
           
        </Carousel>
        </>
    )
}

export default IndexContest

