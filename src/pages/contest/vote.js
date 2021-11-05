import React from 'react'
import PropTypes from 'prop-types'
import "../../css/vote.css";
import "normalize.css";
import "bootstrap/dist/css/bootstrap.min.css";
import {Container, Row,Col,} from 'react-bootstrap'

function vote(props) {
    return (
        <>
             {/* 投票活動 */}
        <h2 className="text-center">投票活動</h2>
        <div className="titleLineBox">
            <img alt="" className="titleLine" src="img/index/line.png" />
        </div>
        {/* 投票結果區塊 */}
        <div className="container1">
        <Row>
        <Col><button className="viewButton col-3">全系列</button>
        </Col>
        <Col><button className="viewButton col-3">家庭系列</button>
        </Col>
        <Col><button className="viewButton col-3">卡牌系列</button>
        </Col>
        <Col><button className="viewButton col-3">策略系列</button>
        </Col>
        </Row>
        <div className="voteResult">
        <h4 className="text-center">投票活動</h4>
        <div className="titleLineBox">
            <img alt="" className="titleLine" src="img/index/line.png" />
        </div>
        </div>

        <Row>
            <Col></Col>
            <Col></Col>
            <Col></Col>
        </Row>
        </div>
          
       
        </>
    )
}



export default vote


