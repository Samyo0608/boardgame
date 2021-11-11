import React from "react";
import reactDom from "react-dom";
import PropTypes from "prop-types";
import "../../css/vote.css";
import "normalize.css";
import "bootstrap/dist/css/bootstrap.min.css";
import { Container, Row, Col } from "react-bootstrap";
import BarChart from "../../components/contest/BarChart";
function Vote(props) {
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
          <Col>
            <button className="viewButton col-3">全系列</button>
          </Col>
          <Col>
            <button className="viewButton col-3">家庭系列</button>
          </Col>
          <Col>
            <button className="viewButton col-3">卡牌系列</button>
          </Col>
          <Col>
            <button className="viewButton col-3">策略系列</button>
          </Col>
        </Row>
        <div className="voteResult pt-3">
          <h2 className="text-center">目前投票結果</h2>
          <div className="titleLineBox">
            <img alt="" className="titleLine" src="img/index/line.png" />
          </div>
          <Container>
            <BarChart />
            <Row className="d-flex justify-content-center ps-5 ms-4 pt-5">
              <Col md={4}>
                <div className="votePic mt-5">
                  <img
                    alt="遊戲圖片"
                    className="voteImg"
                    src="/img/contest/vote/family06_incanGold.jpg"
                    fluid
                  />
                </div>
              </Col>
              <Col md={4}>
                <div className="votePic">
                  <img
                    alt="遊戲圖片"
                    className="voteImg"
                    src="/img/contest/vote/family08_avalon.jpg"
                    fluid
                  />
                </div>
              </Col>
              <Col md={4}>
                <div className="votePic mt-5">
                  <img
                    alt="遊戲圖片"
                    className="voteImg"
                    src="/img/contest/vote/family05_geisters.jpg"
                    fluid
                  />
                </div>
              </Col>
              <Col md={4}>
                <div className="voteRank mt-5 ms-3">第三名</div>{" "}
              </Col>
              <Col md={4}>
                <div className="voteRank ms-3">第一名</div>{" "}
              </Col>
              <Col md={4}>
                <div className="voteRank mt-5 ms-3">第二名</div>
              </Col>
            </Row>
          </Container>
        </div>
        <div className="voteChoose">
          <div>
            <div>
              <h2 className="text-center pt-3">我也要投票!</h2>
              <div className="titleLineBox">
                <img
                  alt=""
                  className="titleLine mb-3"
                  src="img/index/line.png"
                />
              </div>
            </div>
            <div>
              <form
                action=""
                className="fs-2 p-2 justify-content-left align-items-center mb-3"
              >
                <label className="inputFont mb-3">
                  <input
                    type="radio"
                    name="vote"
                    checked="true"
                    className="conInput"
                  />
                  傳情畫意
                </label>
                <label className="inputFont mb-3">
                  <input type="radio" name="vote" className="conInput" />
                  估估劃劃
                </label>
                <label className="inputFont mb-3">
                  <input type="radio" name="vote" className="conInput" />
                  諾亞方舟
                </label>
                <label className="inputFont mb-3">
                  <input type="radio" name="vote" className="conInput" />
                  籤籤入扣
                </label>
                <label className="inputFont mb-3">
                  <input type="radio" name="vote" className="conInput" />
                  閃靈快手
                </label>
                <label className="inputFont mb-3">
                  <input type="radio" name="vote" className="conInput" />
                  印加寶藏
                </label>
                <label className="inputFont mb-3">
                  <input type="radio" name="vote" className="conInput" />
                  BANG!
                </label>
                <label className="inputFont mb-3">
                  <input type="radio" name="vote" className="conInput" />
                  阿瓦隆
                </label>
                <label className="inputFont mb-3">
                  <input type="radio" name="vote" className="conInput" />
                  狼人殺
                </label>

                <input
                  type="submit"
                  value="送  出"
                  className="submitVote m-3"
                />
              </form>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default Vote;
