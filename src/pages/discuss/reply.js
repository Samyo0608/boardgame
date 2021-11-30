/* eslint-disable react-hooks/exhaustive-deps */
import "bootstrap/dist/css/bootstrap.min.css";
import { Button, Modal } from "react-bootstrap";
import "../../css/reply.css";
import React, { Component } from "react";
import { useState, useEffect, useRef } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faThumbsUp, faHeart } from "@fortawesome/free-solid-svg-icons";
import axios from "axios";
import moment from "moment";
import { Link, useParams } from "react-router-dom";
import { API_URL, URL, PHOTO_URL } from "../../configs/config";
import Swal from "sweetalert2";
import DiscussQuill from "../../components/discuss/discussQuill";
import ReactQuill from "react-quill";
import "react-quill/dist/quill.bubble.css";

const Reply = () => {
  // 網址取值，定義的名稱要與路由器path上定義的/:discuss_title一樣
  const { discuss_id } = useParams();

  // 標題設定狀態
  const [replyTitle, setreplyTitle] = useState([]);

  // 內容設定狀態
  const [discussContent, setDiscussContent] = useState([]);

  // 統計發文數設定狀態
  const [discussCount, setDiscussCount] = useState([{ user_id: "", cot: "" }]);

  // 統計回覆數設定狀態
  const [replyCount, setReplyCount] = useState([{ user_id: "", cot: "" }]);

  // 編輯狀態
  const [editStatus, setEditStatus] = useState();

  // 收藏功能設定狀態
  const [discussKeep, setDiscussKeep] = useState([
    { discusss_id: "", user_id: "" },
  ]);
  // 收藏功能設定狀態
  const [keepStatus, setKeepStatus] = useState({});

  //按讚功能撈資料
  const [discussLikeData, setDiscussLikeData] = useState([
    {
      user_id: "",
      discuss_content_id: "",
    },
  ]);

  // 按讚功能設定狀態
  const [discussLike, setDiscussLike] = useState([
    { discusss_content_id: "", user_id: "" },
  ]);
  // 按讚功能設定狀態
  const [likeStatus, setLikeStatus] = useState({});

  // 新增回覆資料
  const [insertDiscuss, setInsertDiscuss] = useState({
    discuss_id: discuss_id,
    user_id: "",
    content: "",
    floor: "1",
  });

  const [quillContent, setQuillContent] = useState({});
  const [addDiscuss, setAddDiscuss] = useState({
    user_id: "",
    type: "",
    title: "",
    content: "",
    floor: "0",
    lastId: "",
  });

  // 登入狀態
  const [sessionMember, setSessionMember] = useState({
    id: "",
    email: "",
    account: "",
    point: "",
  });

  // 提交回覆表單(quill)
  async function handleQuillInsertDiscussSubmit(e) {
    // e.preventDefault();
    try {
      if (!sessionMember.id) {
        alert("請先登入");
        window.location.href = `/login`;
      } else {
        // json 格式無法傳檔案，改成用 form data
        let formData = new FormData();
        formData.append("discuss_id", discuss_id);
        formData.append("user_id", sessionMember.id);
        formData.append("content", quillContent);
        formData.append("floor", "1");
        // 測試資料
        // for (var key of formData.entries()) {
        //   console.log(key[0] + ", " + key[1]);
        // }
        let res = await axios.post(
          `http://localhost:3001/api/discuss/insertDiscuss`,
          formData,
          { withCredentials: true }
        );
        Swal.fire({
          icon: "success",
          title: "回覆成功",
          text: "已提交您的回覆",
        }).then((res) => {
          window.location.reload();
        });
      }
    } catch (e) {
      console.log("handleInsertDiscussSubmit", e);
    }
  }

  // 收藏功能
  const keepClick = async () => {
    if (!sessionMember.id) {
      alert("請先登入");
      window.location.href = `/login`;
    } else {
      if (keepStatus === false) {
        let resKeep = await axios.post(
          `http://localhost:3001/api/discuss/keep`,
          { discuss_id },
          {
            withCredentials: true,
          }
        );
        setKeepStatus(true);
        Swal.fire("Good job!", "已將此文章加入收藏!", "success");
      } else {
        let resKeepDelete = await axios.post(
          `http://localhost:3001/api/discuss/keepDelete`,
          { discuss_id },
          {
            withCredentials: true,
          }
        );
        setKeepStatus(false);
        Swal.fire("Good job!", "已將此文章從收藏移除!", "success");
      }
    }
  };

  // 初始渲染

  // 抓標題和回覆內容
  useEffect(async () => {
    window.scrollTo(0, 0);
    let res = await axios.get(
      `http://localhost:3001/api/discuss/reply/${discuss_id}`
    );
    let resTitle = await axios.get(
      `http://localhost:3001/api/discuss/title/${discuss_id}`
    );
    setDiscussContent(res.data);
    setreplyTitle(resTitle.data[0]);
  }, []);

  // 統計每人發文數
  useEffect(async () => {
    let resDiscussCount = await axios.get(
      `http://localhost:3001/api/discuss/discussCount`
    );
    setDiscussCount(resDiscussCount.data);
  }, []);

  // 統計每人回覆數
  useEffect(async () => {
    let resReplyCount = await axios.get(
      `http://localhost:3001/api/discuss/replyCount`
    );
    setReplyCount(resReplyCount.data);
  }, []);

  // 抓會員session
  useEffect((e) => {
    async function session() {
      try {
        let memberSession = await axios.get(`${API_URL}/session/member`, {
          withCredentials: true,
        });
        setSessionMember(memberSession.data);
      } catch (e) {
        alert("獲取資料失敗");
      }
    }
    session();
  }, []);

  // 抓是否已按過收藏，抓按讚資料
  const isFirstRun = useRef(true);
  useEffect(async () => {
    if (isFirstRun.current) {
      isFirstRun.current = false;
      return;
    }

    let resDiscussKeep = await axios.post(
      `http://localhost:3001/api/discuss/keepStatus`,
      { discuss_id },
      {
        withCredentials: true,
      }
    );
    if (resDiscussKeep.data.length === 0) {
      setKeepStatus(false);
    } else {
      setKeepStatus(true);
    }
    let resDiscussLikeData = await axios.post(
      `http://localhost:3001/api/discuss/likeData`,
      {
        withCredentials: true,
      }
    );
    setDiscussLikeData(resDiscussLikeData.data);
  }, [sessionMember]);

  return (
    <div className="overflow-hidden">
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
          首頁{`>>`}討論區{`>>`}
          {replyTitle.title}
        </a>
      </div>
      <div className="replyPicBox">
        <img alt="" className="replyPic" src="../../img/reply/reply1.png" />
      </div>
      <a className="replyButton text-center" href="#replyTarget">
        回覆
      </a>
      {/* 討論區內容 */}
      {discussContent.map((v, i) => {
        return (
          <div key={v.id} className="firstF row mx-2">
            {/* 發表者 */}
            <div className="col-2">
              <div className="replyerBox text-center fw-bold">
                <p className="floorName">{i === 0 ? `樓主` : i + 1 + `樓`}</p>
                <div className="replyerImgBox">
                  <img
                    alt=""
                    src={
                      v.photo === ""
                        ? `../../img/reply/replyer1.png`
                        : `${PHOTO_URL}/public/uploads/${v.photo}`
                    }
                    className="replyerImg"
                  />
                </div>
                <p>{v.account}</p>
                <p>
                  {discussCount.filter((dv) => {
                    return dv.user_id === Number(v.user_id);
                  })[0]?.cot === undefined
                    ? "0"
                    : discussCount.filter((dv) => {
                        return dv.user_id === Number(v.user_id);
                      })[0]?.cot}
                  {`篇發表`}
                </p>
                <p>
                  {replyCount.filter((rv) => {
                    return rv.user_id === Number(v.user_id);
                  })[0]?.cot === undefined
                    ? "0"
                    : replyCount.filter((rv) => {
                        return rv.user_id === Number(v.user_id);
                      })[0]?.cot}
                  {`篇回覆`}
                </p>
              </div>
            </div>
            {/* 留言內容 */}
            <div className="col-10">
              <div className="replyBox">
                <div className="replyOutBox">
                  <div className="replyInBox">
                    {/* 文章內容 */}
                    {v.valid === 0 ? (
                      <p className="deletedReply">
                        =====此回覆已被使用者刪除=====
                      </p>
                    ) : (
                      <ReactQuill
                        className="discussContentQuill"
                        value={v.content}
                        readOnly={true}
                        theme={"bubble"}
                      />
                    )}

                    <p className="postTime text-secondary">
                      發表於 :{" "}
                      {moment(v.created_at.toString()).format(
                        "YYYY-MM-DD HH:mm:ss"
                      )}
                    </p>

                    {/* 編輯和刪除 */}
                    <div className="twoButton d-flex">
                      {v.user_id === sessionMember.id && v.valid === 1 ? (
                        <div className="replyUserBtn">
                          <button
                            type="button"
                            onClick={async () => {
                              Swal.fire({
                                title: "確定要刪除此則回覆嗎?",
                                text: "此操作無法復原",
                                icon: "warning",
                                showCancelButton: true,
                                confirmButtonColor: "#3085d6",
                                cancelButtonColor: "#d33",
                                confirmButtonText: "確定",
                                cancelButtonText: "不要",
                              }).then(async (result) => {
                                if (result.isConfirmed) {
                                  let resDiscussKeep = await axios.post(
                                    `http://localhost:3001/api/discuss/deleteReply`,
                                    { id: v.id },
                                    {
                                      withCredentials: true,
                                    }
                                  );
                                  Swal.fire(
                                    "刪除成功!",
                                    "您的回覆已經被刪除",
                                    "success"
                                  );
                                  let res = await axios.get(
                                    `http://localhost:3001/api/discuss/reply/${discuss_id}`
                                  );
                                  setDiscussContent(res.data);
                                }
                              });
                            }}
                            className="replyDelete"
                          >
                            刪除
                          </button>
                          <Link
                            discuss_content_id={v.id}
                            to={{
                              pathname: "../editReply",
                              discuss_content_id: v.id,
                              discuss_id: discuss_id,
                            }}
                            className="replyEdit"
                            onClick={() => {
                              setEditStatus(v.id);
                            }}
                          >
                            編輯
                          </Link>
                        </div>
                      ) : (
                        ""
                      )}

                      <a
                        href="#/"
                        className={`keepButton col-2 d-flex justify-content-evenly align-items-center ${
                          keepStatus === true ? "keepButtonActive" : ""
                        } ${i === 0 ? "" : "d-none"}`}
                        onClick={keepClick}
                      >
                        收藏
                        <FontAwesomeIcon className="keepImg" icon={faHeart} />
                      </a>

                      <a
                        href="#/"
                        className={`likeButton col-2 d-flex justify-content-evenly align-items-center ${
                          discussLikeData.filter((lv) => {
                            return (
                              lv.user_id === sessionMember.id &&
                              lv.discuss_content_id === v.id
                            );
                          }).length === 0
                            ? ""
                            : "likeButtonActive"
                        }`}
                        onClick={async () => {
                          if (!sessionMember.id) {
                            alert("請先登入");
                            window.location.href = `/login`;
                          } else {
                            const likeData = {
                              user_id: sessionMember.id,
                              discuss_content_id: v.id,
                            };

                            if (
                              discussLikeData.filter((lv) => {
                                return (
                                  lv.user_id === sessionMember.id &&
                                  lv.discuss_content_id === v.id
                                );
                              }).length === 0
                            ) {
                              let resLike = await axios.post(
                                `http://localhost:3001/api/discuss/like`,
                                likeData,
                                {
                                  withCredentials: true,
                                }
                              );
                              let resDiscussLikeData = await axios.post(
                                `http://localhost:3001/api/discuss/likeData`,
                                {
                                  withCredentials: true,
                                }
                              );
                              setDiscussLikeData(resDiscussLikeData.data);
                              Swal.fire(
                                "Good job!",
                                "已發送您的讚!",
                                "success"
                              );
                            } else {
                              let resLikeDelete = await axios.post(
                                `http://localhost:3001/api/discuss/likeDelete`,
                                likeData,
                                {
                                  withCredentials: true,
                                }
                              );
                              let resDiscussLikeDataDel = await axios.post(
                                `http://localhost:3001/api/discuss/likeData`,
                                {
                                  withCredentials: true,
                                }
                              );
                              setDiscussLikeData(resDiscussLikeDataDel.data);
                              Swal.fire(
                                "Good job!",
                                "已收回您的讚!",
                                "success"
                              );
                            }
                          }
                        }}
                      >
                        {
                          discussLikeData.filter((lv) => {
                            return lv.discuss_content_id === v.id;
                          }).length
                        }
                        <FontAwesomeIcon
                          className="awesomeImg"
                          icon={faThumbsUp}
                        />
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
      <div className="newReplyBox d-flex" id="replyTarget">
        <div className="redBirdBox mx-4">
          <img className="redBirdImg" src="../../img/reply/bird3.png" alt="" />
        </div>
        <div className="ms-5">
          <p className="fw-bold">參加討論</p>
          <div className="replyInputBox position-relative">
            <div className="greenBirdBox">
              <img
                className="greenBirdImg"
                alt=""
                src="../../img/reply/bird2.png"
              />
            </div>
            <div className="textareaBox">
              <DiscussQuill
                addDiscuss={addDiscuss}
                setAddDiscuss={setAddDiscuss}
                setQuillContent={setQuillContent}
              />
              <button
                onClick={() => {
                  handleQuillInsertDiscussSubmit();
                }}
                className="replySubmitButton text-center"
              >
                送出
              </button>
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
