import "bootstrap/dist/css/bootstrap.min.css";
import "../../css/reply.css";
import React from "react";
import { useState, useEffect } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import axios from "axios";
import moment from "moment";
import { Link, useParams } from "react-router-dom";

const Reply = () => {
  // 定義的名稱要與路由器上定義的/:discuss_title一樣
  const { discuss_title } = useParams();
  const [discussContent, setDiscussContent] = useState([]);
  useEffect(async () => {
    let res = await axios.get(
      `http://localhost:3001/api/discuss/reply/${discuss_title}`
    );
    console.log(res);
    setDiscussContent(res.data);
  }, []);
  return (
    <div className="overflow-hidden">
      {/* <h1>{discuss_id}</h1> */}
      {/* banner */}
      <div className="replyBannerBox">
        <img
          className="replyBannerImg"
          src="../../img/reply/banner.png"
          alt=""
        />
        <div className="bannerContent text-end">
          <p className="fs-2">遊戲職人</p>
          <p className="fs-5">討論區</p>
        </div>
      </div>

      {/* 麵包屑 */}
      <div className="replyBread text-end">
        <a className="replyBreadContent" href="#/">
          首頁{`>>`}討論區{`>>`}有人能幫忙看一下牌組嗎?
        </a>
      </div>
      <div className="replyPicBox">
        <img alt="" className="replyPic" src="../../img/reply/reply1.png" />
      </div>
      <a class="replyButton text-center" href="#/">
        回覆
      </a>
      {/* 討論區內容 */}
      {discussContent.map((v, i) => {
        return (
          <div key={v.discuss_id} className="firstF row mx-2">
            {/* 發表者 */}
            <div className="col-2">
              <div className="replyerBox text-center fw-bold">
                <p className="floorName">{i === 0 ? `樓主` : i + 1 + `樓`}</p>
                <div className="replyerImgBox">
                  <img
                    alt=""
                    src="../../img/reply/replyer1.png"
                    className="replyerImg"
                  />
                </div>
                <p>{v.user_id}</p>
                <p>5篇文章</p>
                <p>10則回覆</p>
              </div>
            </div>
            {/* 留言內容 */}
            <div className="col-10">
              <div class="replyBox">
                <div className="replyOutBox">
                  <div className="replyInBox">
                    {/* 文章內容 */}
                    <p>{v.discuss_content}</p>
                    {/* <img
                      alt=""
                      className=""
                      src="../../img/reply/replyImg.png"
                    /> */}
                    <p className="postTime text-secondary">
                      發表於 :{" "}
                      {moment(v.discuss_time.toString()).format(
                        "YYYY-MM-DD HH:mm:ss"
                      )}
                    </p>
                    <div className="twoButton d-flex">
                      <a
                        href="#/"
                        className="awesomeButton col-2 d-flex justify-content-evenly align-items-center"
                      >
                        <p className="awesomeText">17人</p>
                        <div className="awesomeBox">
                          <img
                            src="../../img/reply/awesome.png"
                            alt=""
                            className="awesomeImg"
                          />
                        </div>
                      </a>
                      <a
                        href="#/"
                        className="likeButton col-2 d-flex justify-content-evenly align-items-center"
                      >
                        <p className="likeText">收藏</p>
                        <div className="likeBox">
                          <img
                            src="../../img/reply/like.png"
                            alt=""
                            className="likeImg"
                          />
                        </div>
                      </a>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        );
      })}

      {/* 參加討論 */}

      <div className="newReplyBox d-flex">
        <div className="redBirdBox mx-4">
          <img className="redBirdImg" src="../../img/reply/bird3.png" alt="" />
        </div>
        <div className="ms-5">
          <p className="fw-bold">參加討論</p>
          <div className="replyInputBox position-relative pt-1">
            <div className="greenBirdBox">
              <img
                className="greenBirdImg"
                alt=""
                src="../../img/reply/bird2.png"
              />
            </div>
            <div className="replyInputFloor text-center">3樓</div>
            <div class="textareaBox">
              <form>
                <textarea
                  className="form-control"
                  rows="11"
                  cols="102"
                  placeholder="Leave a comment here"
                ></textarea>
                <a href="#/" className="replySubmitButton text-center">
                  送出
                </a>
              </form>
            </div>
          </div>
        </div>
      </div>

      {/* 相關討論標題 */}

      <div className="position-relative r_discussTitle mb-4">
        <h2 className="text-center">相關討論</h2>
        <div className="titleLineBox">
          <img alt="" className="titleLine" src="../../img/index/line.png" />
        </div>
      </div>

      <div className="discussRecommendBoxOut mb-5">
        <div className="discussRecommendBoxIn row">
          <div className="col d-flex drBox">
            <div className="drImgBox">
              <img
                className="drImg"
                alt=""
                src="../../img/discuss/discussRecommend1.png"
              />
            </div>
            <div className="drTextBox">
              <p className="fw-bold">【卡牌】有人能幫忙看一下牌組嗎?</p>
              <a href="#/">繼續閱讀...</a>
              <p className="mt-3 text-secondary">15個人說讚</p>
            </div>
          </div>
          <div className="col d-flex drBox">
            <div className="drImgBox">
              <img
                className="drImg"
                alt=""
                src="../../img/discuss/discussRecommend1.png"
              />
            </div>
            <div className="drTextBox">
              <p className="fw-bold">【卡牌】有人能幫忙看一下牌組嗎?</p>
              <a href="#/">繼續閱讀...</a>
              <p className="mt-3 text-secondary">15個人說讚</p>
            </div>
          </div>
        </div>
      </div>

      {/* 尾巴 */}
    </div>
  );
};

export default Reply;
