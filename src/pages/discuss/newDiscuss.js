import "bootstrap/dist/css/bootstrap.min.css";
import "../../css/newdiscuss.css";
import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { useState, useEffect, useRef } from "react";
import axios from "axios";
import moment from "moment";
import { Link } from "react-router-dom";
import { API_URL, URL } from "../../configs/config";
import Swal from "sweetalert2";
import DiscussQuill from "../../components/discuss/discussQuill";

const gameType = [
  { id: 1, name: "全部" },
  { id: 2, name: "家庭" },
  { id: 3, name: "策略" },
  { id: 4, name: "卡牌" },
];

const NewDiscuss = (props) => {
  const [newDiscussType, setNewDiscussType] = useState([{ type: "" }]);
  const [quillContent, setQuillContent] = useState({});
  const [addDiscuss, setAddDiscuss] = useState({
    user_id: "",
    type: "",
    title: "",
    content: "",
    floor: "0",
    lastId: "",
  });
  const [stateLastId, setStateLastId] = useState([]);
  // 登入狀態
  const [sessionMember, setSessionMember] = useState({
    id: "",
    email: "",
    account: "",
    point: "",
  });

  // 處理輸入欄位變動
  function handleNewDiscussChange(e) {
    let newAddDiscuss = { ...addDiscuss };
    newAddDiscuss[e.target.name] = e.target.value;
    setAddDiscuss(newAddDiscuss);
  }

  useEffect(async () => {
    let res = await axios.get(
      `http://localhost:3001/api/discuss/newDiscussType`
    );
    setNewDiscussType(res.data);
  }, []);

  // 抓會員session
  useEffect((e) => {
    async function session() {
      try {
        let memberSession = await axios.get(`${API_URL}/session/member`, {
          withCredentials: true,
        });
        setSessionMember(memberSession.data);
        let newAddDiscuss = { ...addDiscuss };
        newAddDiscuss.user_id = memberSession.data.id;
        setAddDiscuss(newAddDiscuss);
      } catch (e) {
        alert("獲取資料失敗");
      }
    }
    session();
  }, []);

  // 提交申請
  async function handleNewDiscussSubmit(e) {
    e.preventDefault();
    try {
      if (!sessionMember.id) {
        alert("請先登入");
        window.location.href = `/login`;
      } else {
        let resNewDiscuss = await axios.post(
          `http://localhost:3001/api/discuss/addNewDiscuss`,
          addDiscuss,
          { withCredentials: true }
        );
        let newAddDiscuss = { ...addDiscuss };
        newAddDiscuss.lastId = resNewDiscuss.data;
        setAddDiscuss(newAddDiscuss);
        setStateLastId(resNewDiscuss.data);
        //  let resNewDiscussContent = await axios.post(
        //    `http://localhost:3001/api/discuss/addNewDiscussContent`,
        //    addDiscuss
        //  );
        // window.location.reload();
      }
    } catch (e) {
      console.log("handleNewDiscussSubmit", e);
    }
  }

  const isFirstRun = useRef(true);
  useEffect(() => {
    async function secondSubmit() {
      if (isFirstRun.current) {
        isFirstRun.current = false;
        return;
      }
      let resNewDiscussContent = await axios.post(
        `http://localhost:3001/api/discuss/addNewDiscussContent`,
        addDiscuss,
        { withCredentials: true }
      );
      Swal.fire({
        icon: "success",
        title: "回覆成功",
        text: "已提交您的回覆",
      }).then((res) => {
        window.location.href = `http://localhost:3000/discuss`;
      });
    }
    secondSubmit();
  }, [stateLastId]);

  return (
    <div className="overflow-hidden">
      {/* banner */}
      <div className="discussBannerBox">
        <img className="discussBannerImg" src="img/discuss/banner.png" alt="" />
        <div className="bannerContent text-end">
          <p className="fs-2">遊戲職人</p>
          <p className="fs-5">討論區</p>
        </div>
      </div>

      {/* 麵包屑 */}
      <div className="discussBread text-end">
        <a className="discussBreadContent" href="#/">
          首頁{`>>`}討論區{`>>`}開新話題
        </a>
      </div>
      {/* form */}
      <div className="newDiscussBoxOut">
        <div className="newdiscussFormBox position-relative">
          <form onSubmit={handleNewDiscussSubmit}>
            <label className="dTitleLabel mt-1">分類 :</label>
            <select
              className="form-select discussSelect my-3"
              name="type"
              aria-label="Default select example"
              onChange={handleNewDiscussChange}
              value={addDiscuss.type}
              required
            >
              <option value="">選擇分類</option>
              {newDiscussType.map((v, i) => {
                return (
                  <option key={i} value={v.type}>
                    {v.type}
                  </option>
                );
              })}
            </select>
            <label className="dTitleLabel">標題 :</label>
            <input
              type="text"
              className="form-control newdiscussTitle mb-3"
              placeholder="請輸入標題"
              name="title"
              value={addDiscuss.title}
              onChange={handleNewDiscussChange}
              required
            />
            <label className="dTitleLabel">內容 : </label>
            <DiscussQuill
              addDiscuss={addDiscuss}
              setAddDiscuss={setAddDiscuss}
              setQuillContent={setQuillContent}
            />
            <button
              type="submit"
              className="newdiscussSubmitButton text-center"
            >
              送出
            </button>
            <a className="newdiscussCancelButton text-center" href="../discuss">
              取消
            </a>
          </form>
        </div>
      </div>
      {/* 討論區規定標題 */}

      <div className="position-relative r_discussTitle">
        <h2 className="text-center">討論區規定</h2>
        <div className="titleLineBox">
          <img alt="" className="titleLine" src="img/index/line.png" />
        </div>
      </div>

      <div className="ruleBoxOut">
        <div className="ruleBoxIn fw-bold">
          <div className="ms-5 pt-5">
            <p>1.不作人身攻擊、謾罵</p>
            <p>2.用字遣詞要注意，友善交流</p>
            <p>3.請勿洗版</p>
            <p>4.有問題請與管理員聯繫</p>
          </div>
          <div className="ruleImgBox">
            <img className="ruleImg" alt="" src="img/discuss/rule.png" />
          </div>
        </div>
      </div>
      {/* 尾巴 */}
    </div>
  );
};

export default NewDiscuss;
