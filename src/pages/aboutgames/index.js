import { React, useState, useEffect } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import { Container, Row, Col, Button, Modal } from "react-bootstrap";
import "../../css/aboutgame.css";
import "../../css/product.css";
import axios from "axios";
import { withRouter, Link } from "react-router-dom";
import { API_URL, p6 } from "../../configs/config";
import Swal from "sweetalert2";

const detailButton = [
  {
    id: 1,
    status: "遊戲詳情",
  },
  {
    id: 2,
    status: "遊戲內容",
  },
  {
    id: 3,
    status: "退換貨須知",
  },
];

function Aboutgame(props) {
  // 策略遊戲

  useEffect(async () => {
    let res = await axios.get(`${API_URL}/productlist/all`);
    setaboutgame(res.data);
    const newsetaboutgame = res.data.find((v, i) => {
      return v.product_id === Number(props.match.params.id);
    });
    setaboutgame(newsetaboutgame);
  }, [props.match.params.id]);

  const [status, setStatus] = useState(1);
  const [aboutgame, setaboutgame] = useState({
    product_id: "",
    product_name: "",
    product_img: "",
    product_content: "",
    product_vote: "",
    product_price: "",
    return_detail: "",
    product_type: "",
    product_info: "",
  });
  const [sessionMember] = useState({
    id: "",
  });

  const ToLocalStorage = (value) => {
    const Cart = localStorage.getItem("") || [];
    const newCart = aboutgame;
    localStorage.setItem(aboutgame.product_name, JSON.stringify(newCart));
  };

  return (
    <>
      <Container>
        <div>
          <div className="hr"></div>

          <div
            className="aboutbb"
            style={{
              backgroundImage: `url(${
                process.env.PUBLIC_URL + "/img/product/123.png"
              })`,
              width: "1000px",
              height: "510px",
            }}
          >
            <article className={p6[aboutgame?.product_type]}>
              {aboutgame?.product_name}
            </article>

            <img
              className="abb"
              src={`/product_img/550x400/${aboutgame?.product_img}`}
              alt=""
            />
            <div className="box456">
              <p className="ellipsis3">{aboutgame?.product_content}</p>
            </div>
            <div className="box4567">
              <p className="pprice ">售價 : {aboutgame?.product_price}元</p>
            </div>
            <a
              key={aboutgame}
              onClick={() => {
                ToLocalStorage(aboutgame);
                Swal.fire({
                  icon: "success",
                  title: `${aboutgame.product_name}`,
                  text: "已加入購物車",
                  footer: `<a href="../Cart${sessionMember}" class="btn btn-light">
                      前往購物車
                    </a>`,
                });
              }}
              href="#/"
            >
              <img className="buy4" src="/img/product/buy.png" alt="" />
            </a>
          </div>
          <Link to="/product" target="_top">
            <img className=" backto" src="/img/product/back.png" alt="" />
          </Link>
        </div>

        <div
          className="aboutbagd"
          style={{
            backgroundImage: `url(${
              process.env.PUBLIC_URL + "/img/product/BK.png"
            })`,
            width: "1000px",
            height: "525px",
          }}
        ></div>

        <div>
          <Link to="/discuss" target="_top">
            <img className="forum" src="/img/product/forum.png" alt="" />
          </Link>
          <div className="box457">
            <Row>
              {detailButton.map((v, i) => {
                return (
                  <Col>
                    <button
                      className={`about1 col-2 ${
                        status === v.id ? "about1Active" : ""
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
            {/* 遊戲詳情 */}
            <div
              className={`about1Result pt-5 ${
                status === 1 ? "d-block" : "d-none"
              }`}
            >
              <p className="ellipsis6">{aboutgame?.product_info}</p>
            </div>
            {/* 遊戲內容 */}

            <div
              className={`about1Result pt-5 ${
                status === 2 ? "d-block" : "d-none"
              }`}
            >
              <p className="ellipsis6">{aboutgame?.return_detail}</p>
            </div>

            {/* 退換貨說明 */}
            <div
              className={`about1Result pt-5 ${
                status === 3 ? "d-block" : "d-none"
              }`}
            >
              <p className="">
                感謝您購買遊戲職人商品，我們致力於提供您品質優良的商品及完善舒適的購物體驗。
                若您對收到的商品有任何疑慮，請您可直接聯繫我們，我們會盡快回覆您的問題。{" "}
              </p>
              <p>
                (1)
                <span className="redone">鑑賞期非試用期</span>
                ,商品經使用將無法退貨,商品收到後請先確認外觀是否為瑕疵,經拆封使用後恕無法辦理退貨。
              </p>
              <p>
                (2) 完整包裝:
                商品退貨時必須回復原狀,亦即必須回復至收到商品時的原始狀態
                <span className="redone">
                  (包含商品、配件、贈品、原廠內外包裝 (紙、盒、袋)
                  、內附文件-發票或資料的完整性等) 。
                </span>
              </p>
              <p>
                (3)若收到之商品有瑕疵狀況,麻煩請拍照提供給我們,以協助確認為商品本身瑕疵或為運送問題。
              </p>
              <p>
                【退貨申請說明】 請於收到商品
                <span className="redone">七天內(含例假日)</span>
                聯繫給予回覆處理。 欲退貨商品,請注意須符合以下條件才能辦理退貨。
              </p>
            </div>
          </div>
        </div>
      </Container>
    </>
  );
}
export default withRouter(Aboutgame);
