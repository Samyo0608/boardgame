import { React, useState, useEffect } from "react";
// import reactDom from "react-dom";
// import PropTypes from "prop-types";
import "../../css/vote.css";
import "normalize.css";
import "bootstrap/dist/css/bootstrap.min.css";
import { Container, Row, Col, Button } from "react-bootstrap";
import HotGame from "../../components/product/HotGame";
import Game from "../../components/product/Game";
import HotGame2 from "../../components/product/HotGame2";
import HotGame3 from "../../components/product/HotGame3";
// import { version } from "react-dom";
import axios from "axios";
import { API_URL } from "../../configs/config";

// 分類按鈕的狀態圖
const categoryButton = [
  {
    id: 1,
    status: "全系列",
  },
  {
    id: 2,
    status: "家庭系列",
  },
  {
    id: 3,
    status: "卡牌系列",
  },
  {
    id: 4,
    status: "策略系列",
  },
];

function Product(props) {
  const [status, setStatus] = useState(1);

  // 全部遊戲
  const [hotproductall, sethotproductall] = useState([]);
  useEffect(async () => {
    let res = await axios.get(`${API_URL}/productlist/all`);
    sethotproductall(res.data);
  }, []);

  // 家庭遊戲
  const [hotproductfamily, sethotproductfamily] = useState([]);
  useEffect(async () => {
    let res = await axios.get(`${API_URL}/productlist/family`);
    sethotproductfamily(res.data);
  }, []);

  // 卡牌遊戲
  const [hotproductcard, sethotproductcard] = useState([]);
  useEffect(async () => {
    let res = await axios.get(`${API_URL}/productlist/card`);
    sethotproductcard(res.data);
  }, []);

  // 策略遊戲
  const [hotproductstrategy, sethotproductstrategy] = useState([]);
  useEffect(async () => {
    let res = await axios.get(`${API_URL}/productlist/strategy`);
    sethotproductstrategy(res.data);
  }, []);

  // 全系列排名
  const AllRank = [];
  const allIn = () => {
    for (let i = 0; i < hotproductall.length; i++) {
      if (hotproductall[i]) AllRank.push(hotproductall[i]);
    }
    return AllRank;
  };
  allIn();
  // 將全系列陣列中的vote排大小
  AllRank.sort(function (a, b) {
    var nameA = a.product_vote;
    var nameB = b.product_vote;
    if (nameA < nameB) {
      return 1;
    }
    if (nameA > nameB) {
      return -1;
    }
    return 0;
  });
  // 家庭排名
  const FamilyRank = [];
  const familyIn = () => {
    for (let i = 0; i < hotproductfamily.length; i++) {
      if (hotproductfamily[i]) FamilyRank.push(hotproductfamily[i]);
    }
    return FamilyRank;
  };
  familyIn();
  // 將家庭陣列中的vote排大小
  FamilyRank.sort(function (a, b) {
    var nameA = a.product_vote;
    var nameB = b.product_vote;
    if (nameA < nameB) {
      return 1;
    }
    if (nameA > nameB) {
      return -1;
    }
    return 0;
  });
  // 卡牌排名
  const CardRank = [];
  const cardIn = () => {
    for (let i = 0; i < hotproductcard.length; i++) {
      if (hotproductcard[i]) CardRank.push(hotproductcard[i]);
    }
    return CardRank;
  };
  cardIn();
  // 將卡牌陣列中的vote排大小
  CardRank.sort(function (a, b) {
    var nameA = a.product_vote;
    var nameB = b.product_vote;
    if (nameA < nameB) {
      return 1;
    }
    if (nameA > nameB) {
      return -1;
    }
    return 0;
  });
  // 策略排名
  const StrategyRank = [];
  const strategyIn = () => {
    for (let i = 0; i < hotproductstrategy.length; i++) {
      if (hotproductstrategy[i]) StrategyRank.push(hotproductstrategy[i]);
    }
    return StrategyRank;
  };
  strategyIn();
  // 將策略陣列中的vote排大小
  StrategyRank.sort(function (a, b) {
    var nameA = a.product_vote;
    var nameB = b.product_vote;
    if (nameA < nameB) {
      return 1;
    }
    if (nameA > nameB) {
      return -1;
    }
    return 0;
  });

  return (
    <>
      <h2 className="text-center">產品頁面</h2>
      <div className="titleLineBox">
        <img alt="" className="titleLine" src="img/index/line.png" />
      </div>
      <div className="container1456">
        <Row>
          {categoryButton.map((v, i) => {
            return (
              <Col>
                <button
                  className={`viewButton col-3 ${
                    status === v.id ? "viewButtonActive" : ""
                  }`}
                  onClick={(e) => {
                    setStatus(v.id);
                  }}
                >
                  {v.status}
                </button>
              </Col>
            );
          })}
        </Row>
        {/* 全部遊戲 */}
        <div
          className={`voteResult pt-3 ${status === 1 ? "d-block" : "d-none"}`}
        >
          <Container>
            <Row>
              <HotGame
                product_id={AllRank[0]?.product_id}
                product_vote={AllRank[0]?.product_vote}
                product_name={AllRank[0]?.product_name}
                product_type={AllRank[0]?.product_type}
                product_content={AllRank[0]?.product_content}
                product_price={AllRank[0]?.product_price}
                product_img={AllRank[0]?.product_img}
              />
              <HotGame2
                product_id={AllRank[1]?.product_id}
                product_vote={AllRank[1]?.product_vote}
                product_name={AllRank[1]?.product_name}
                product_type={AllRank[1]?.product_type}
                product_content={AllRank[1]?.product_content}
                product_price={AllRank[1]?.product_price}
                product_img={AllRank[1]?.product_img}
              />

              <HotGame3
                product_id={AllRank[2]?.product_id}
                product_vote={AllRank[2]?.product_vote}
                product_name={AllRank[2]?.product_name}
                product_type={AllRank[2]?.product_type}
                product_content={AllRank[2]?.product_content}
                product_price={AllRank[2]?.product_price}
                product_img={AllRank[2]?.product_img}
              />
            </Row>
            {/* 排序紐 */}
            <div className="buttooon0">
              <Button className="button123">價格排序</Button>
              <Button className="button1234">最高</Button>
              <Button className="button12345">最低</Button>
            </div>

            <div className="boxer123">
              <Row>
                {hotproductall.slice(3).map((product) => {
                  return (
                    <Col md={4}>
                      <Game
                        product_id={product.product_id}
                        product_name={product.product_name}
                        product_type={product.product_type}
                        product_price={product.product_price}
                        product_img={product.product_img}
                      />
                    </Col>
                  );
                })}
              </Row>
            </div>
          </Container>
        </div>
        {/* 家庭系列 */}
        <div
          className={`voteResult pt-3 ${status === 2 ? "d-block" : "d-none"}`}
        >
          <Container>
            <Row>
              <HotGame
                product_id={FamilyRank[0]?.product_id}
                product_vote={FamilyRank[0]?.product_vote}
                product_name={FamilyRank[0]?.product_name}
                product_type={FamilyRank[0]?.product_type}
                product_content={FamilyRank[0]?.product_content}
                product_price={FamilyRank[0]?.product_price}
                product_img={FamilyRank[0]?.product_img}
              />
              <HotGame2
                product_id={FamilyRank[1]?.product_id}
                product_vote={FamilyRank[1]?.product_vote}
                product_name={FamilyRank[1]?.product_name}
                product_type={FamilyRank[1]?.product_type}
                product_content={FamilyRank[1]?.product_content}
                product_price={FamilyRank[1]?.product_price}
                product_img={FamilyRank[1]?.product_img}
              />
              <HotGame3
                product_id={FamilyRank[2]?.product_id}
                product_vote={FamilyRank[2]?.product_vote}
                product_name={FamilyRank[2]?.product_name}
                product_type={FamilyRank[2]?.product_type}
                product_content={FamilyRank[2]?.product_content}
                product_price={FamilyRank[2]?.product_price}
                product_img={FamilyRank[2]?.product_img}
              />
            </Row>
            {/* 排序紐 */}
            <div className="buttooon0">
              <Button className="button123">價格排序</Button>
              <Button className="button1234">最高</Button>
              <Button className="button12345">最低</Button>
            </div>

            <div className="boxer123">
              <Row>
                {hotproductfamily.slice(3).map((product) => {
                  return (
                    <Col md={4}>
                      <Game
                        product_id={product.product_id}
                        product_name={product.product_name}
                        product_type={product.product_type}
                        product_price={product.product_price}
                        product_img={product.product_img}
                      />
                    </Col>
                  );
                })}
              </Row>
            </div>
          </Container>
        </div>
        {/* 卡牌系列 */}
        <div
          className={`voteResult pt-3 ${status === 3 ? "d-block" : "d-none"}`}
        >
          <Container>
            <Row>
              <HotGame
                product_id={CardRank[0]?.product_id}
                product_vote={CardRank[0]?.product_vote}
                product_name={CardRank[0]?.product_name}
                product_type={CardRank[0]?.product_type}
                product_content={CardRank[0]?.product_content}
                product_price={CardRank[0]?.product_price}
                product_img={CardRank[0]?.product_img}
              />

              <HotGame2
                product_id={CardRank[1]?.product_id}
                product_vote={CardRank[1]?.product_vote}
                product_name={CardRank[1]?.product_name}
                product_type={CardRank[1]?.product_type}
                product_content={CardRank[1]?.product_content}
                product_price={CardRank[1]?.product_price}
                product_img={CardRank[1]?.product_img}
              />
              <HotGame3
                product_id={CardRank[2]?.product_id}
                product_vote={CardRank[2]?.product_vote}
                product_name={CardRank[2]?.product_name}
                product_type={CardRank[2]?.product_type}
                product_content={CardRank[2]?.product_content}
                product_price={CardRank[2]?.product_price}
                product_img={CardRank[2]?.product_img}
              />
            </Row>
            {/* 排序紐 */}
            <div className="buttooon0">
              <Button className="button123">價格排序</Button>
              <Button className="button1234">最高</Button>
              <Button className="button12345">最低</Button>
            </div>

            <div className="boxer123">
              <Row>
                {hotproductcard.slice(3).map((product) => {
                  return (
                    <Col md={4}>
                      <Game
                        product_id={product.product_id}
                        product_name={product.product_name}
                        product_type={product.product_type}
                        product_price={product.product_price}
                        product_img={product.product_img}
                      />
                    </Col>
                  );
                })}
              </Row>
            </div>
          </Container>
        </div>

        {/* 策略系列 */}
        <div
          className={`voteResult pt-3 ${status === 4 ? "d-block" : "d-none"}`}
        >
          <Container>
            <Row>
              <HotGame
                product_id={StrategyRank[0]?.product_id}
                product_vote={StrategyRank[0]?.product_vote}
                product_name={StrategyRank[0]?.product_name}
                product_type={StrategyRank[0]?.product_type}
                product_content={StrategyRank[0]?.product_content}
                product_price={StrategyRank[0]?.product_price}
                product_img={StrategyRank[0]?.product_img}
              />
              <HotGame2
                product_id={StrategyRank[1]?.product_id}
                product_vote={StrategyRank[1]?.product_vote}
                product_name={StrategyRank[1]?.product_name}
                product_type={StrategyRank[1]?.product_type}
                product_content={StrategyRank[1]?.product_content}
                product_price={StrategyRank[1]?.product_price}
                product_img={StrategyRank[1]?.product_img}
              />
              <HotGame3
                product_id={StrategyRank[2]?.product_id}
                product_vote={StrategyRank[2]?.product_vote}
                product_name={StrategyRank[2]?.product_name}
                product_type={StrategyRank[2]?.product_type}
                product_content={StrategyRank[2]?.product_content}
                product_price={StrategyRank[2]?.product_price}
                product_img={StrategyRank[2]?.product_img}
              />
            </Row>
            {/* 排序紐 */}
            <div className="buttooon0">
              <Button className="button123">價格排序</Button>
              <Button className="button1234">最高</Button>
              <Button className="button12345">最低</Button>
            </div>

            <div className="boxer123">
              <Row>
                {hotproductstrategy.slice(3).map((product) => {
                  return (
                    <Col md={4}>
                      <Game
                        product_id={product.product_id}
                        product_name={product.product_name}
                        product_type={product.product_type}
                        product_price={product.product_price}
                        product_img={product.product_img}
                      />
                    </Col>
                  );
                })}
              </Row>
            </div>
          </Container>
        </div>
      </div>
    </>
  );
}

export default Product;
