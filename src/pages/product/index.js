import { React, useState, useEffect } from "react";
import "../../css/vote.css";
import "normalize.css";
import "bootstrap/dist/css/bootstrap.min.css";
import { Col, Row, Container } from "react-bootstrap";
// import { render } from "react-dom";
import HotGame from "../../components/product/HotGame";
import Game from "../../components/product/Game";
import HotGame2 from "../../components/product/HotGame2";
// import A_button from "../../components/product/A_button";
import HotGame3 from "../../components/product/HotGame3";
import axios from "axios";
import { API_URL } from "../../configs/config";

// 分類按鈕的狀態圖
const typeButton = [
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
// let active = 1;
// let items = [];
// for (let number = 1; number <= 3; number++) {
//   items.push(
//     <Pagination.Item key={number} active={number === active}>
//       {number}
//     </Pagination.Item>
//   );
// }

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
          {typeButton.map((v, i) => {
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
        <div className={`PPResult pt-3 ${status === 1 ? "d-block" : "d-none"}`}>
          <Container>
            <Row>
              {AllRank?.slice(0, 1).map((product) => {
                return (
                  <Col key={product.product_id}>
                    <HotGame
                      product_id={product.product_id}
                      product_name={product.product_name}
                      product_type={product.product_type}
                      product_content={product.product_content}
                      product_price={product.product_price}
                      product_img={product.product_img}
                      product_vote={product.product_vote}
                    />
                  </Col>
                );
              })}
            </Row>
            <Row>
              {AllRank?.slice(1, 2).map((product) => {
                return (
                  <Col key={product.product_id}>
                    <HotGame2
                      product_id={product.product_id}
                      product_name={product.product_name}
                      product_type={product.product_type}
                      product_content={product.product_content}
                      product_price={product.product_price}
                      product_img={product.product_img}
                      product_vote={product.product_vote}
                    />
                  </Col>
                );
              })}
            </Row>
            <Row>
              {AllRank?.slice(2, 3).map((product) => {
                return (
                  <Col key={product.product_id}>
                    <HotGame3
                      product_id={product.product_id}
                      product_name={product.product_name}
                      product_type={product.product_type}
                      product_content={product.product_content}
                      product_price={product.product_price}
                      product_img={product.product_img}
                      product_vote={product.product_vote}
                    />
                  </Col>
                );
              })}
            </Row>

            {/* 排序紐 */}
            {/* <div className="buttooon0">
              <Button className="button123">價格排序</Button>
              <Button className="button1234">最高</Button>
              <Button className="button12345">最低</Button>
            </div> */}
            {/* <div>
              <A_button />
            </div> */}
            <div className="boxer123">
              <div>
                <Row>
                  {AllRank?.slice(3, 9).map((product) => {
                    return (
                      <Col md={4} key={product.product_id}>
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
            </div>
            {/* 分頁 */}
            {/* <div>
              <Pagination>{items}</Pagination>
              <br />
            </div> */}
            {/* <div>
              <Pagination count={3} />
              <Pagination count={3} color="primary" />
            </div> */}
          </Container>
        </div>
        {/* 家庭系列 */}
        <div
          className={`voteResult pt-3 ${status === 2 ? "d-block" : "d-none"}`}
        >
          <Container>
            <Row>
              {FamilyRank?.slice(0, 1).map((product) => {
                return (
                  <Col key={product.product_id}>
                    <HotGame
                      product_id={product.product_id}
                      product_name={product.product_name}
                      product_type={product.product_type}
                      product_content={product.product_content}
                      product_price={product.product_price}
                      product_img={product.product_img}
                      product_vote={product.product_vote}
                    />
                  </Col>
                );
              })}
            </Row>
            <Row>
              {FamilyRank?.slice(1, 2).map((product) => {
                return (
                  <Col key={product.product_id}>
                    <HotGame2
                      product_id={product.product_id}
                      product_name={product.product_name}
                      product_type={product.product_type}
                      product_content={product.product_content}
                      product_price={product.product_price}
                      product_img={product.product_img}
                      product_vote={product.product_vote}
                    />
                  </Col>
                );
              })}
            </Row>
            <Row>
              {FamilyRank?.slice(2, 3).map((product) => {
                return (
                  <Col key={product.product_id}>
                    <HotGame3
                      product_id={product.product_id}
                      product_name={product.product_name}
                      product_type={product.product_type}
                      product_content={product.product_content}
                      product_price={product.product_price}
                      product_img={product.product_img}
                      product_vote={product.product_vote}
                    />
                  </Col>
                );
              })}
            </Row>
            {/* 排序紐 */}
            {/* <div className="buttooon0">
              <Button className="button123">價格排序</Button>
              <Button className="button1234">最高</Button>
              <Button className="button12345">最低</Button>
            </div> */}

            <div className="boxer123">
              <Row>
                {FamilyRank.slice(3).map((product) => {
                  return (
                    <Col md={4} key={product.product_id}>
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
              {CardRank?.slice(0, 1).map((product) => {
                return (
                  <Col key={product.product_id}>
                    <HotGame
                      product_id={product.product_id}
                      product_name={product.product_name}
                      product_type={product.product_type}
                      product_content={product.product_content}
                      product_price={product.product_price}
                      product_img={product.product_img}
                      product_vote={product.product_vote}
                    />
                  </Col>
                );
              })}
            </Row>
            <Row>
              {CardRank?.slice(1, 2).map((product) => {
                return (
                  <Col key={product.product_id}>
                    <HotGame2
                      product_id={product.product_id}
                      product_name={product.product_name}
                      product_type={product.product_type}
                      product_content={product.product_content}
                      product_price={product.product_price}
                      product_img={product.product_img}
                      product_vote={product.product_vote}
                    />
                  </Col>
                );
              })}
            </Row>
            <Row>
              {CardRank?.slice(2, 3).map((product) => {
                return (
                  <Col key={product.product_id}>
                    <HotGame3
                      product_id={product.product_id}
                      product_name={product.product_name}
                      product_type={product.product_type}
                      product_content={product.product_content}
                      product_price={product.product_price}
                      product_img={product.product_img}
                      product_vote={product.product_vote}
                    />
                  </Col>
                );
              })}
            </Row>
            {/* 排序紐 */}
            {/* <div className="buttooon0">
              <Button className="button123">價格排序</Button>
              <Button className="button1234">最高</Button>
              <Button className="button12345">最低</Button>
            </div> */}

            <div className="boxer123">
              <Row>
                {CardRank.slice(3).map((product) => {
                  return (
                    <Col md={4} key={product.product_id}>
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
              {StrategyRank?.slice(0, 1).map((product) => {
                return (
                  <Col key={product.product_id}>
                    <HotGame
                      product_id={product.product_id}
                      product_name={product.product_name}
                      product_type={product.product_type}
                      product_content={product.product_content}
                      product_price={product.product_price}
                      product_img={product.product_img}
                      product_vote={product.product_vote}
                    />
                  </Col>
                );
              })}
            </Row>
            <Row>
              {StrategyRank?.slice(1, 2).map((product) => {
                return (
                  <Col key={product.product_id}>
                    <HotGame2
                      product_id={product.product_id}
                      product_name={product.product_name}
                      product_type={product.product_type}
                      product_content={product.product_content}
                      product_price={product.product_price}
                      product_img={product.product_img}
                      product_vote={product.product_vote}
                    />
                  </Col>
                );
              })}
            </Row>
            <Row>
              {StrategyRank?.slice(2, 3).map((product) => {
                return (
                  <Col key={product.product_id}>
                    <HotGame3
                      product_id={product.product_id}
                      product_name={product.product_name}
                      product_type={product.product_type}
                      product_content={product.product_content}
                      product_price={product.product_price}
                      product_img={product.product_img}
                      product_vote={product.product_vote}
                    />
                  </Col>
                );
              })}
            </Row>

            {/* 排序紐 */}
            {/* <div className="buttooon0">
              <Button className="button123">價格排序</Button>
              <Button className="button1234">最高</Button>
              <Button className="button12345">最低</Button>
            </div> */}

            <div className="boxer123">
              <Row>
                {StrategyRank.slice(3).map((product) => {
                  return (
                    <Col md={4} key={product.product_id}>
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
