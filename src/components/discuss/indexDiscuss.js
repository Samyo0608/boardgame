import "bootstrap/dist/css/bootstrap.min.css";
import React from "react";
import { useState, useEffect } from "react";
import axios from "axios";
import moment from "moment";
import { Link } from "react-router-dom";
import { API_URL, URL } from "../../configs/config";
import ReactQuill from "react-quill";
import "react-quill/dist/quill.bubble.css";
import "../../css/discuss.css";

const gameType = [
  { id: 2, name: "家庭", type: "family" },
  { id: 3, name: "策略", type: "trag" },
  { id: 4, name: "卡牌", type: "card" },
];
const IndexDiscuss = (props) => {
  const [discuss, setDiscuss] = useState([]);
  const [discussHot, setDiscussHot] = useState([]);
  const [discussContent, setDiscussContent] = useState([
    {
      discuss_id: "",
      content: "",
      created_at: "",
    },
  ]);

  const [displayDiscuss, setDisplayDiscuss] = useState([]);
  const [displayDiscussHot, setDisplayDiscussHot] = useState([]);
  const [displayDiscussContent, setDisplayDiscussContent] = useState([
    {
      id: "",
      type: "",
      title: "",
      i_user_id: "",
      user_id: "",
      created_at: "",
      cot: "",
    },
  ]);
  const [discussType, setDiscussType] = useState("all");

  // 初始渲染
  // 撈討論區資料
  useEffect(async () => {
    let res = await axios.get(`http://localhost:3001/api/discuss/`);
    setDiscuss(res.data);
    setDisplayDiscuss(res.data);
  }, []);

  useEffect(async () => {
    let res = await axios.get(`http://localhost:3001/api/discuss/discussCount`);
    setDiscussHot(res.data);
    setDisplayDiscussHot(res.data);
  }, []);

  // 撈討論區內容
  useEffect(async () => {
    let res = await axios.get(`http://localhost:3001/api/discuss/indexContent`);
    setDiscussContent(res.data);
  }, []);

  const TYPE_COLOR = {
    家庭: "discussTagFamily",
    策略: "discussTagTrag",
    卡牌: "discussTagCard",
  };
  return (
    <div className="overflow-hidden">
      {/* 討論區內容 */}
      <ul className="list-unstyled pt-4 d-flex justify-content-evenly">
        <li className="">
          <Link
            to="#/"
            className={`d-inline-block mx-5 recommendType text-decoration-none text-center ${
              discussType === "all" ? "recommendTypeActive" : ""
            }`}
            onClick={async () => {
              setDisplayDiscuss(discuss);
              setDisplayDiscussHot(discussHot);
              setDiscussType("all");
            }}
          >
            全部
          </Link>
        </li>
        {gameType.map((v, i) => {
          return (
            <li key={v.id} className="">
              <Link
                to="#/"
                className={`d-inline-block mx-5 recommendType text-decoration-none text-center ${
                  discussType === v.type ? "recommendTypeActive" : ""
                }`}
                onClick={async () => {
                  let handleDiscussFilter = discuss.filter((dv) => {
                    return dv.type === v.name;
                  });
                  let handleDiscussHotFilter = discussHot.filter((dv) => {
                    return dv.type === v.name;
                  });
                  setDisplayDiscuss(handleDiscussFilter);
                  setDisplayDiscussHot(handleDiscussHotFilter);
                  setDiscussType(v.type);
                }}
              >
                {v.name}
              </Link>
            </li>
          );
        })}
      </ul>

      <div className="indexDiscussOutBox">
        <div className="indexDiscussInBox pt-2">
          <img alt="" className="woodImg" src="img/index/wood.png" />
          <div className="newestDiscuss">最新討論</div>
          {/* 最新討論 */}
          <div className="discussNew position-relative">
            <table className="table table-hover text-center fw-bold">
              <thead>
                <tr className="text-secondary">
                  <th scope="col">分類</th>
                  <th scope="col">標題</th>
                  <th scope="col">發文者</th>
                  <th scope="col">回覆數</th>
                  <th scope="col">最後回覆</th>
                </tr>
              </thead>
              <tbody className="r_discussBody">
                {displayDiscuss &&
                  displayDiscuss.length > 0 &&
                  displayDiscuss.slice(0, 3).map((v, i) => {
                    return (
                      <tr key={v.id}>
                        <th scope="row" className="">
                          <div className={TYPE_COLOR[v.type]}>{v.type}</div>
                        </th>
                        <td className="text-start discussTitleTd">
                          <Link
                            className="discussTitleLink"
                            to={`discuss/reply/${v.id}`}
                          >
                            {v.title}
                          </Link>
                          <ReactQuill
                            className="indexDiscussContentQuill"
                            value={
                              discussContent.filter((dc) => {
                                return dc.discuss_id === v.id;
                              })[0]?.content || ""
                            }
                            readOnly={true}
                            theme={"bubble"}
                          />
                        </td>
                        <td>{v.i_user_name}</td>
                        <td className="rcountTd">{v.cot}</td>
                        <td className="timeTd">
                          {moment(v.created_at.toString()).format(
                            "YYYY-MM-DD HH:mm:ss"
                          )}
                          <p className="text-secondary ms-3">
                            by {v.user_name}
                          </p>
                        </td>
                      </tr>
                    );
                  })}
              </tbody>
            </table>
          </div>
        </div>
      </div>

      <div className="indexDiscussOutBox">
        <div className="indexDiscussInBox pt-2">
          <img alt="" className="woodImg" src="img/index/wood.png" />
          <div className="newestDiscuss">人氣討論</div>
          {/* 最熱討論 */}
          <div className="discussNew position-relative">
            <table className="table table-hover text-center fw-bold">
              <thead>
                <tr className="text-secondary">
                  <th scope="col">分類</th>
                  <th scope="col">標題</th>
                  <th scope="col">發文者</th>
                  <th scope="col">回覆數</th>
                  <th scope="col">最後回覆</th>
                </tr>
              </thead>
              <tbody className="r_discussBody">
                {displayDiscussHot &&
                  displayDiscussHot.length > 0 &&
                  displayDiscussHot.slice(0, 3).map((v, i) => {
                    return (
                      <tr key={v.id}>
                        <th scope="row" className="">
                          <div className={TYPE_COLOR[v.type]}>{v.type}</div>
                        </th>
                        <td className="text-start discussTitleTd">
                          <Link
                            className="discussTitleLink"
                            to={`discuss/reply/${v.id}`}
                          >
                            {v.title}
                          </Link>
                          <ReactQuill
                            className="indexDiscussContentQuill"
                            value={
                              discussContent.filter((dc) => {
                                return dc.discuss_id === v.id;
                              })[0]?.content || ""
                            }
                            readOnly={true}
                            theme={"bubble"}
                          />
                        </td>
                        <td>{v.i_user_name}</td>
                        <td className="rcountTd">{v.cot}</td>
                        <td className="timeTd">
                          {moment(v.created_at.toString()).format(
                            "YYYY-MM-DD HH:mm:ss"
                          )}
                          <p className="text-secondary ms-3">
                            by {v.user_name}
                          </p>
                        </td>
                      </tr>
                    );
                  })}
              </tbody>
            </table>
          </div>
        </div>
        <div></div>
      </div>
      {/* 尾巴 */}
    </div>
  );
};

export default IndexDiscuss;
