import { React, useState } from "react";
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
  const [status, setStatus] = useState(2);
  const product = [
    {
      product_id: 1,
      product_name: "狼人殺",
      product_type: "家庭",
      product_img: "/img/product/crime.jpg",
      product_price: 123,
      product_content: "544654",
    },
    {
      product_id: 2,
      product_name: "不要殺",
      product_type: "策略",
      product_img: "/product_img/550x400/Cat_10.png",
      product_price: 456,
      product_content:
        "在群島爭霸中，我們可妥善運用神明賜予的力量，還有神獸來扭轉戰局，精美的插圖與符合神話故事中的能力，使群島爭霸非常有在玩希臘神話遊戲",
    },
    {
      product_id: 3,
      product_name: "布拉克斯",
      product_type: "卡牌",
      product_img: "/product_img/550x400/Blokus.png",
      product_price: 999,
      product_content: "1234567我的貓咪在哪裡~",
    },
  ];

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
            <HotGame
              product_name={product[0].product_name}
              product_type={product[0].product_type}
              product_price={product[0].product_price}
              product_img={product[0].product_img}
              product_content={product[0].product_content}
            />
            <HotGame2
              product_name={product[1].product_name}
              product_type={product[1].product_type}
              product_price={product[1].product_price}
              product_img={product[1].product_img}
              product_content={product[1].product_content}
            />
            <HotGame3
              product_name={product[2].product_name}
              product_type={product[2].product_type}
              product_price={product[2].product_price}
              product_img={product[2].product_img}
              product_content={product[2].product_content}
            />
            {/* 排序紐 */}
            <div className="buttooon0">
              <Button className="button123">價格排序</Button>
              <Button className="button1234">最高</Button>
              <Button className="button12345">最低</Button>
            </div>

            <div className="boxer123">
              <Row>
                {product.map((value, index) => {
                  return (
                    <Col md={4}>
                      <Game
                        product_name={product[0].product_name}
                        product_type={product[0].product_type}
                        product_price={product[0].product_price}
                        product_img={product[0].product_img}
                      />
                    </Col>
                  );
                })}
              </Row>
              <Row>
                {product.map((value, index) => {
                  return (
                    <Col md={4}>
                      <Game
                        product_name={product[0].product_name}
                        product_type={product[0].product_type}
                        product_price={product[0].product_price}
                        product_img={product[0].product_img}
                      />
                    </Col>
                  );
                })}
              </Row>
            </div>
          </Container>
        </div>
        {/* 家庭遊戲 */}
        <div
          className={`voteResult pt-3 ${status === 2 ? "d-block" : "d-none"}`}
        >
          <Container>
            <HotGame
              product_name={product[2].product_name}
              product_type={product[2].product_type}
              product_price={product[2].product_price}
              product_img={product[2].product_img}
              product_content={product[2].product_content}
            />
            <HotGame2
              product_name={product[1].product_name}
              product_type={product[1].product_type}
              product_price={product[1].product_price}
              product_img={product[1].product_img}
              product_content={product[1].product_content}
            />
            <HotGame3
              product_name={product[0].product_name}
              product_type={product[0].product_type}
              product_price={product[0].product_price}
              product_img={product[0].product_img}
              product_content={product[0].product_content}
            />
            {/* 排序紐 */}
            <div className="buttooon0">
              <Button className="button123">價格排序</Button>
              <Button className="button1234">最高</Button>
              <Button className="button12345">最低</Button>
            </div>

            <div className="boxer123">
              <Row>
                {product.map((value, index) => {
                  return (
                    <Col md={4}>
                      <Game
                        product_name={product[0].product_name}
                        product_type={product[0].product_type}
                        product_price={product[0].product_price}
                        product_img={product[0].product_img}
                      />
                    </Col>
                  );
                })}
              </Row>
            </div>
          </Container>
        </div>
        {/* 卡牌遊戲 */}
        <div
          className={`voteResult pt-3 ${status === 3 ? "d-block" : "d-none"}`}
        >
          <Container>
            <HotGame
              product_name={product[1].product_name}
              product_type={product[1].product_type}
              product_price={product[1].product_price}
              product_img={product[1].product_img}
              product_content={product[1].product_content}
            />
            <HotGame2
              product_name={product[0].product_name}
              product_type={product[0].product_type}
              product_price={product[0].product_price}
              product_img={product[0].product_img}
              product_content={product[0].product_content}
            />
            <HotGame3
              product_name={product[2].product_name}
              product_type={product[2].product_type}
              product_price={product[2].product_price}
              product_img={product[2].product_img}
              product_content={product[2].product_content}
            />
            {/* 排序紐 */}
            <div className="buttooon0">
              <Button className="button123">價格排序</Button>
              <Button className="button1234">最高</Button>
              <Button className="button12345">最低</Button>
            </div>

            <div className="boxer123">
              <Row>
                {product.map((value, index) => {
                  return (
                    <Col md={4}>
                      <Game
                        product_name={product[0].product_name}
                        product_type={product[0].product_type}
                        product_price={product[0].product_price}
                        product_img={product[0].product_img}
                      />
                    </Col>
                  );
                })}
              </Row>
            </div>
          </Container>
        </div>
        {/* 策略遊戲 */}
        <div
          className={`voteResult pt-3 ${status === 4 ? "d-block" : "d-none"}`}
        >
          <Container>
            <HotGame
              product_name={product[0].product_name}
              product_type={product[0].product_type}
              product_price={product[0].product_price}
              product_img={product[0].product_img}
              product_content={product[0].product_content}
            />
            <HotGame2
              product_name={product[1].product_name}
              product_type={product[1].product_type}
              product_price={product[1].product_price}
              product_img={product[1].product_img}
              product_content={product[1].product_content}
            />
            <HotGame3
              product_name={product[0].product_name}
              product_type={product[0].product_type}
              product_price={product[0].product_price}
              product_img={product[0].product_img}
              product_content={product[0].product_content}
            />
            {/* 排序紐 */}
            <div className="buttooon0">
              <Button className="button123">價格排序</Button>
              <Button className="button1234">最高</Button>
              <Button className="button12345">最低</Button>
            </div>

            <div className="boxer123">
              <Row>
                {product.map((value, index) => {
                  return (
                    <Col md={4}>
                      <Game
                        product_name={product[0].product_name}
                        product_type={product[0].product_type}
                        product_price={product[0].product_price}
                        product_img={product[0].product_img}
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
