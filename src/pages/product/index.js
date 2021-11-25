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
                product_id={hotproductall[0]?.product_id}
                product_name={hotproductall[0]?.product_name}
                product_type={hotproductall[0]?.product_type}
                product_content={hotproductall[0]?.product_content}
                product_price={hotproductall[0]?.product_price}
                product_img={hotproductall[0]?.product_img}
              />
              <HotGame2
                product_id={hotproductall[1]?.product_id}
                product_name={hotproductall[1]?.product_name}
                product_type={hotproductall[1]?.product_type}
                product_content={hotproductall[1]?.product_content}
                product_price={hotproductall[1]?.product_price}
                product_img={hotproductall[1]?.product_img}
              />

              <HotGame3
                product_id={hotproductall[2]?.product_id}
                product_name={hotproductall[2]?.product_name}
                product_type={hotproductall[2]?.product_type}
                product_content={hotproductall[2]?.product_content}
                product_price={hotproductall[2]?.product_price}
                product_img={hotproductall[2]?.product_img}
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
                product_id={hotproductfamily[0]?.product_id}
                product_name={hotproductfamily[0]?.product_name}
                product_type={hotproductfamily[0]?.product_type}
                product_content={hotproductfamily[0]?.product_content}
                product_price={hotproductfamily[0]?.product_price}
                product_img={hotproductfamily[0]?.product_img}
              />
              <HotGame2
                product_id={hotproductfamily[1]?.product_id}
                product_name={hotproductfamily[1]?.product_name}
                product_type={hotproductfamily[1]?.product_type}
                product_content={hotproductfamily[1]?.product_content}
                product_price={hotproductfamily[1]?.product_price}
                product_img={hotproductfamily[1]?.product_img}
              />
              <HotGame3
                product_id={hotproductfamily[2]?.product_id}
                product_name={hotproductfamily[2]?.product_name}
                product_type={hotproductfamily[2]?.product_type}
                product_content={hotproductfamily[2]?.product_content}
                product_price={hotproductfamily[2]?.product_price}
                product_img={hotproductfamily[2]?.product_img}
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
                product_id={hotproductcard[0]?.product_id}
                product_name={hotproductcard[0]?.product_name}
                product_type={hotproductcard[0]?.product_type}
                product_content={hotproductcard[0]?.product_content}
                product_price={hotproductcard[0]?.product_price}
                product_img={hotproductcard[0]?.product_img}
              />

              <HotGame2
                product_id={hotproductcard[1]?.product_id}
                product_name={hotproductcard[1]?.product_name}
                product_type={hotproductcard[1]?.product_type}
                product_content={hotproductcard[1]?.product_content}
                product_price={hotproductcard[1]?.product_price}
                product_img={hotproductcard[1]?.product_img}
              />
              <HotGame3
                product_id={hotproductcard[2]?.product_id}
                product_name={hotproductcard[2]?.product_name}
                product_type={hotproductcard[2]?.product_type}
                product_content={hotproductcard[2]?.product_content}
                product_price={hotproductcard[2]?.product_price}
                product_img={hotproductcard[2]?.product_img}
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
                product_id={hotproductstrategy[0]?.product_id}
                product_name={hotproductstrategy[0]?.product_name}
                product_type={hotproductstrategy[0]?.product_type}
                product_content={hotproductstrategy[0]?.product_content}
                product_price={hotproductstrategy[0]?.product_price}
                product_img={hotproductstrategy[0]?.product_img}
              />
              <HotGame2
                product_id={hotproductstrategy[1]?.product_id}
                product_name={hotproductstrategy[1]?.product_name}
                product_type={hotproductstrategy[1]?.product_type}
                product_content={hotproductstrategy[1]?.product_content}
                product_price={hotproductstrategy[1]?.product_price}
                product_img={hotproductstrategy[1]?.product_img}
              />
              <HotGame3
                product_id={hotproductstrategy[2]?.product_id}
                product_name={hotproductstrategy[2]?.product_name}
                product_type={hotproductstrategy[2]?.product_type}
                product_content={hotproductstrategy[2]?.product_content}
                product_price={hotproductstrategy[2]?.product_price}
                product_img={hotproductstrategy[2]?.product_img}
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
