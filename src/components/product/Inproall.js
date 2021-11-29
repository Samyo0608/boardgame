import "bootstrap/dist/css/bootstrap.min.css";
import "../../css/index.css";
import "../../css/product.css";
import Inpro from "../../components/product/Inpro";
import Inpro2 from "../../components/product/Inpro2";
import Inpro3 from "../../components/product/Inpro3";
import Inpro4 from "../../components/product/Inpro4";
import Inpro5 from "../../components/product/Inpro5";
import { React, useState, useEffect } from "react";
import "../../css/vote.css";
import "normalize.css";
import "bootstrap/dist/css/bootstrap.min.css";
import { Row, Container } from "react-bootstrap";
import axios from "axios";
import { API_URL } from "../../configs/config";
const Inproall = (props) => {
  // 全部遊戲
  const [hotproductall, sethotproductall] = useState([]);
  useEffect(async () => {
    let res = await axios.get(`${API_URL}/productlist/all`);
    sethotproductall(res.data);
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

  return (
    <>
      <Container>
        <Container>
          {AllRank?.slice(1, 2).map((product) => {
            return (
              <Row key={product.product_id}>
                <Inpro
                  product_id={product.product_id}
                  product_name={product.product_name}
                  product_type={product.product_type}
                  product_price={product.product_price}
                  product_img={product.product_img}
                />
              </Row>
            );
          })}
        </Container>
        <Container>
          {AllRank?.slice(2, 3).map((product) => {
            return (
              <Row key={product.product_id}>
                <Inpro2
                  product_id={product.product_id}
                  product_name={product.product_name}
                  product_type={product.product_type}
                  product_price={product.product_price}
                  product_img={product.product_img}
                />
              </Row>
            );
          })}
        </Container>
        <Container>
          {AllRank?.slice(0, 1).map((product) => {
            return (
              <Row key={product.product_id}>
                <Inpro3
                  product_id={product.product_id}
                  product_name={product.product_name}
                  product_type={product.product_type}
                  product_price={product.product_price}
                  product_img={product.product_img}
                />
              </Row>
            );
          })}
        </Container>
        <Container>
          {AllRank?.slice(3, 4).map((product) => {
            return (
              <Row key={product.product_id}>
                <Inpro4
                  product_id={product.product_id}
                  product_name={product.product_name}
                  product_type={product.product_type}
                  product_price={product.product_price}
                  product_img={product.product_img}
                />
              </Row>
            );
          })}
        </Container>
        <Container>
          {AllRank?.slice(4, 5).map((product) => {
            return (
              <Row key={product.product_id}>
                <Inpro5
                  product_id={product.product_id}
                  product_name={product.product_name}
                  product_type={product.product_type}
                  product_price={product.product_price}
                  product_img={product.product_img}
                />
              </Row>
            );
          })}
        </Container>
      </Container>
    </>
  );
};

export default Inproall;
