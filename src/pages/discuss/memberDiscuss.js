import "bootstrap/dist/css/bootstrap.min.css";
import "../../css/memberDiscuss.css";
import React from "react";
import Sidebar from "../../components/memberSidebar/index";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faTrashAlt } from "@fortawesome//free-solid-svg-icons";
import { useState, useEffect, useRef } from "react";
import axios from "axios";
import moment from "moment";
import { Link } from "react-router-dom";
import { API_URL, URL } from "../../configs/config";
import Swal from "sweetalert2";

function MemberDiscuss(props) {
  const TYPE_COLOR = {
    家庭: "discussTagFamily",
    策略: "discussTagTrag",
    卡牌: "discussTagCard",
  };
  const [discuss, setDiscuss] = useState([]);
  // 登入狀態
  const [sessionDiscussMember, setSessionDiscussMember] = useState({
    id: "",
    email: "",
    account: "",
    point: "",
  });

  // 撈會員資料
  useEffect((e) => {
    window.scrollTo(0, 0);
    async function session() {
      try {
        let memberSession = await axios.get(`${API_URL}/session/member`, {
          withCredentials: true,
        });

        setSessionDiscussMember(memberSession.data);
      } catch (e) {
        alert("獲取資料失敗");
      }
    }
    session();
  }, []);

  // 撈收藏內容
  const isFirstRun = useRef(true);
  useEffect(async () => {
    if (isFirstRun.current) {
      isFirstRun.current = false;
      return;
    }
    let res = await axios.post(
      `${API_URL}/discuss/memberDiscuss`,
      sessionDiscussMember
    );
    setDiscuss(res.data);
  }, [sessionDiscussMember]);

  return (
    <div className="mt-5">
      <div className="d-flex">
        <div className="ms-4 me-4 sidebarRange">
          <Sidebar />
        </div>
        <div className="rightDetail d-flex flex-column justify-content-start align-items-center">
          <p className="h2 mt-5 bold">收藏文章</p>

          {/* 討論區內容 */}
          <div className="m_discussOutBox">
            <div className="m_discussInBox">
              {/* 最新討論 */}
              <div className="discussNew position-relative">
                {discuss.length === 0 ? (
                  <p className="text-center">
                    woops...你還沒有收藏任何文章哦 {">>>>>>"}
                    <Link to="/discuss" className="goDiscussBtn">
                      前往討論區
                    </Link>
                  </p>
                ) : (
                  <table className="table table-hover text-center fw-bold">
                    <thead>
                      <tr className="text-secondary">
                        <th scope="col">分類</th>
                        <th scope="col">標題</th>
                        <th scope="col">發文者</th>
                        <th scope="col">最後回覆</th>
                        <th scope="col">操作</th>
                      </tr>
                    </thead>
                    <tbody className="r_discussBody">
                      {discuss.map((v, i) => {
                        return (
                          <tr key={v.id}>
                            <th scope="row" className="">
                              <div className={TYPE_COLOR[v.type]}>{v.type}</div>
                            </th>
                            <td className="mdtitleTd">
                              <Link to={`../discuss/reply/${v.id}`}>
                                {v.title}
                              </Link>
                            </td>
                            <td className="mduserTd">{v.account}</td>
                            <td className="mdtimeTd">
                              {moment(v.created_at.toString()).format(
                                "YYYY-MM-DD HH:mm:ss"
                              )}
                            </td>
                            <td>
                              <button
                                className="deleteKeepBtn"
                                onClick={() => {
                                  Swal.fire({
                                    title: "確定要刪除此則收藏嗎?",
                                    text: "不要後悔哦~",
                                    icon: "warning",
                                    showCancelButton: true,
                                    confirmButtonColor: "#3085d6",
                                    cancelButtonColor: "#d33",
                                    confirmButtonText: "確定",
                                    cancelButtonText: "不要",
                                  }).then(async (result) => {
                                    if (result.isConfirmed) {
                                      let resKeepDelete = await axios.post(
                                        `${API_URL}/discuss/keepDelete`,
                                        {
                                          discuss_id: v.id,
                                        },
                                        { withCredentials: true }
                                      );
                                      let res = await axios.post(
                                        `${API_URL}/discuss/memberDiscuss`,
                                        sessionDiscussMember
                                      );
                                      setDiscuss(res.data);

                                      Swal.fire(
                                        "已刪除!",
                                        "已刪除此篇文章",
                                        "success"
                                      );
                                    }
                                  });
                                }}
                              >
                                <FontAwesomeIcon
                                  className=""
                                  icon={faTrashAlt}
                                />
                              </button>
                            </td>
                          </tr>
                        );
                      })}
                    </tbody>
                  </table>
                )}
              </div>
            </div>
            <div></div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default MemberDiscuss;
