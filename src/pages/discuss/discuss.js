// import "antd/dist/antd.css";
import "../../css/discussPagination.css";
import "bootstrap/dist/css/bootstrap.min.css";
import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faSearch } from "@fortawesome//free-solid-svg-icons";
import { useState, useEffect } from "react";
import axios from "axios";
import moment from "moment";
import { Link } from "react-router-dom";
import { API_URL, URL } from "../../configs/config";
import Swal from "sweetalert2";
import ReactQuill from "react-quill";
import "react-quill/dist/quill.bubble.css";
import { Pagination } from "antd";
import "../../css/discuss.css";
import Loading from "../../components/loading/loading";

const gameType = [
  { id: 2, name: "家庭", type: "family" },
  { id: 3, name: "策略", type: "trag" },
  { id: 4, name: "卡牌", type: "card" },
];
const Discuss = (props) => {
  // Loading
  const [isLoading, setIsLoading] = useState(true);
  // 分頁>>默認一次顯示10筆
  const [minValue, setMinValue] = useState(0);
  const [maxValue, setMaxValue] = useState(10);
  const [discuss, setDiscuss] = useState([]);
  const [discussOrder, setDiscussOrder] = useState("newest");
  const [hotDiscuss, setHotDiscuss] = useState([]);
  const [discussContent, setDiscussContent] = useState([
    {
      discuss_id: "",
      content: "",
      created_at: "",
    },
  ]);
  const [displayDiscuss, setDisplayDiscuss] = useState([]);
  const [displayHotDiscuss, setDisplayHotDiscuss] = useState([]);
  const [discussType, setDiscussType] = useState("all");
  const [searchDiscuss, setSearchDiscuss] = useState({
    keyword: "",
  });
  const [displaySearch, setDisplaySearch] = useState(false);
  // 登入狀態
  const [sessionMember, setSessionMember] = useState({
    id: "",
    email: "",
    account: "",
    point: "",
  });

  // 處理輸入欄位變動
  function handleSearchChange(e) {
    let newSearchDiscuss = { ...searchDiscuss };
    newSearchDiscuss[e.target.name] = e.target.value;
    setSearchDiscuss(newSearchDiscuss);
  }

  // 處理選擇分類欄位變動
  async function handleSelectDiscussChange(e) {
    setDiscussOrder(e.target.value);
    if (searchDiscuss.keyword === "") {
      if (e.target.value === "most") {
        let res = await axios.get(`${API_URL}/discuss/discussCount`);
        setDiscuss(res.data);
        setDisplayDiscuss(res.data);
      } else {
        let res = await axios.get(`${API_URL}/discuss`);
        setDiscuss(res.data);
        setDisplayDiscuss(res.data);
      }
    } else {
      if (e.target.value === "most") {
        let resSearch = await axios.post(
          `${API_URL}/discuss/searchMost`,
          searchDiscuss
        );
        setDiscuss(resSearch.data);
        setDisplayDiscuss(resSearch.data);
        setDiscussType("all");
      } else {
        let resSearch = await axios.post(
          `${API_URL}/discuss/searchDiscuss`,
          searchDiscuss
        );
        setDiscuss(resSearch.data);
        setDisplayDiscuss(resSearch.data);
        setDiscussType("all");
      }
    }
  }

  // 提交搜尋申請
  async function handleSearchSubmit(e) {
    e.preventDefault();
    try {
      if (discussOrder === "newest") {
        let resSearch = await axios.post(
          `${API_URL}/discuss/searchDiscuss`,
          searchDiscuss
        );
        setDiscuss(resSearch.data);
        setDisplayDiscuss(resSearch.data);
        setDiscussType("all");
      } else {
        let resSearch = await axios.post(
          `${API_URL}/discuss/searchMost`,
          searchDiscuss
        );
        setDiscuss(resSearch.data);
        setDisplayDiscuss(resSearch.data);
        setDiscussType("all");
      }
      setDisplaySearch(true);
    } catch (e) {
      console.log("handleSearchSubmit", e);
    }
  }

  // 初始渲染
  // Loading計時
  useEffect(() => {
    setTimeout(() => {
      setIsLoading(false);
    }, 800);
  }, []);
  // 撈討論區資料
  useEffect(async () => {
    let res = await axios.get(`${API_URL}/discuss`);
    setDiscuss(res.data);
    setDisplayDiscuss(res.data);
  }, []);

  // 撈熱門討論區資料
  useEffect(async () => {
    let res = await axios.get(`${API_URL}/discuss/discussCount`);
    setHotDiscuss(res.data);
    setDisplayHotDiscuss(res.data);
  }, []);

  // 撈討論區內容
  useEffect(async () => {
    let res = await axios.get(`${API_URL}/discuss/indexContent`);
    setDiscussContent(res.data);
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

  const TYPE_COLOR = {
    家庭: "discussTagFamily",
    策略: "discussTagTrag",
    卡牌: "discussTagCard",
  };
  const TYPE_SEARCH = {
    all: "全部",
    family: "家庭",
    trag: "策略",
    card: "卡牌",
  };
  return (
    <div className="overflow-hidden">
      {/* banner */}
      <div className="discussBannerBox">
        <img
          className="discussBannerImg"
          src="img/discuss/banner3.png"
          alt=""
        />
        <div className="bannerContent text-end">
          <p className="fs-2">遊戲職人</p>
          <p className="fs-5">討論區</p>
        </div>
      </div>

      {/* 麵包屑 */}
      <div className="discussBread text-end">
        <a className="discussBreadContent" href={`${URL}`}>
          首頁
        </a>
        {`>> `}
        討論區
      </div>

      {/* 搜尋列 */}
      <form onSubmit={handleSearchSubmit}>
        <div className="disSearchBox text-center">
          {/* <a
            className="searchCancel"
            onClick={() => {
              window.location.reload();
            }}
            href="#/"
          >
            x
          </a> */}
          {/* <select className="form-select disSearchSelect">
            <option>找標題</option>
            <option>找內容</option>
            <option>找作者</option>
          </select> */}
          <input
            placeholder="請輸入關鍵字..."
            className="discussSearch form-control"
            name="keyword"
            value={searchDiscuss.keyword}
            onChange={handleSearchChange}
          />
          <button className="btn disSearchBtn">
            <FontAwesomeIcon icon={faSearch} />
          </button>
        </div>
      </form>

      {/* 討論區內容 */}
      <div className="r_discussBox">
        <div className="r_discussPicBox">
          <img alt="" className="rentPic" src="/img/discuss/bird5.png" />
        </div>
        <ul className="list-unstyled pt-4 d-flex justify-content-evenly">
          <li className="">
            <Link
              to="#/"
              className={`d-inline-block mx-5 recommendType text-decoration-none text-center ${
                discussType === "all" ? "recommendTypeActive" : ""
              }`}
              onClick={async () => {
                setDisplayDiscuss(discuss);
                setDisplayHotDiscuss(hotDiscuss);
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
                  onClick={() => {
                    let handleDiscussFilter = discuss.filter((dv) => {
                      return dv.type === v.name;
                    });
                    let handleHotDiscussFilter = hotDiscuss.filter((hdv) => {
                      return hdv.type === v.name;
                    });
                    setDisplayDiscuss(handleDiscussFilter);
                    setDisplayHotDiscuss(handleHotDiscussFilter);
                    setDiscussType(v.type);
                    setMinValue(0);
                  }}
                >
                  {v.name}
                </Link>
              </li>
            );
          })}
        </ul>

        <div className="r_discussOutBox">
          <div className="r_discussInBox pt-2">
            {/* 最新討論 */}
            <div className="discussNew position-relative">
              {isLoading ? (
                <div className="discussLoading">
                  <Loading />
                </div>
              ) : (
                <table className="table table-hover text-center fw-bold">
                  <thead>
                    <tr className="text-secondary">
                      <th scope="col">分類</th>
                      <th scope="col">預覽</th>
                      <th scope="col">標題</th>
                      <th scope="col">發文者</th>
                      <th scope="col">回覆數</th>
                      <th scope="col">最後回覆</th>
                    </tr>
                  </thead>

                  <tbody className="r_discussBody">
                    {displayDiscuss &&
                      displayDiscuss.length > 0 &&
                      displayDiscuss.slice(minValue, maxValue).map((v, i) => {
                        return (
                          <tr key={v.id}>
                            <th scope="row" className="typeTh">
                              <div className={TYPE_COLOR[v.type]}>{v.type}</div>
                            </th>
                            <td className="disPicTd">
                              {discussContent
                                .filter((dc) => {
                                  return dc.discuss_id === v.id;
                                })[0]
                                ?.content.indexOf("<img src=") === -1 ? (
                                <div className="unpicBox">
                                  <img
                                    src={`img/discuss/${
                                      TYPE_COLOR[v.type]
                                    }.png`}
                                    alt=""
                                  />
                                </div>
                              ) : (
                                <ReactQuill
                                  className="picDiscussContentQuill"
                                  value={
                                    discussContent.filter((dc) => {
                                      return dc.discuss_id === v.id;
                                    })[0]?.content || ""
                                  }
                                  readOnly={true}
                                  theme={"bubble"}
                                />
                              )}
                            </td>
                            <td className="text-start discussTitleTd">
                              <Link
                                className="discussTitleLink"
                                to={`discuss/reply/${v.id}`}
                              >
                                <span>{v.title}</span>
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
                            <td className="dUserTd">{v.i_user_name}</td>
                            <td className="rcountTd">{v.cot - 1}</td>
                            <td className="timeTd">
                              {moment(v.created_at?.toString()).format(
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
              )}
            </div>
            <Link
              className="r_discussButton text-center"
              onClick={() => {
                if (!sessionMember.id) {
                  Swal.fire({
                    icon: "info",
                    title: "請先登入",
                    text: "尚未登入呦，請先登入網站再進入會員中心^_^",
                    footer: '<a href="/" class="btn btn-light">回首頁</a>',
                  }).then((res) => {
                    window.location.replace("/login");
                  });
                } else {
                  window.location.replace("/newdiscuss");
                }
              }}
              to="#/"
            >
              開新話題
            </Link>
            {/* 排序功能 */}
            <select
              className="form-select discussTypeSelect"
              name="type"
              aria-label="Default select example"
              onChange={handleSelectDiscussChange}
              value={discussOrder}
              required
            >
              <option value="newest">排序 : 最新回覆</option>
              <option value="most">排序 : 最多回覆</option>
            </select>
            {displaySearch === false ? (
              ""
            ) : (
              <div className="searchHint">
                正在搜尋"{searchDiscuss?.keyword}" , 分類 :{" "}
                {TYPE_SEARCH[discussType]} , 共{displayDiscuss?.length}
                筆資料
                <button
                  onClick={() => {
                    window.location.reload();
                  }}
                  type="button"
                  className="cancelSearch"
                >
                  取消搜尋
                </button>
              </div>
            )}
          </div>
          <div></div>
        </div>
      </div>

      {/* 分頁 */}
      <div className="discussPagination">
        <Pagination
          defaultCurrent={1} // 預設在第一個頁面
          defaultPageSize={10} // 預設一個頁面顯示5個數據
          pageSizeOptions={["5", "10", "15", "20"]}
          showSizeChanger={true}
          onChange={(page, pageSize) => {
            if (page <= 1) {
              setMinValue(0);
              setMaxValue(pageSize);
            } else {
              setMinValue((page - 1) * pageSize);
              setMaxValue((page - 1) * pageSize + pageSize);
            }
            // window.scrollTo(0, 0);
          }}
          total={displayDiscuss.length}
        />
      </div>

      {/* 熱門推薦標題 */}

      <div className="position-relative r_discussTitle mb-4">
        <h2 className="text-center">熱門推薦</h2>
        <div className="titleLineBox">
          <img alt="" className="titleLine" src="img/index/line.png" />
        </div>
      </div>

      <div className="discussRecommendBoxOut">
        <div className="hotDiscussBox">
          <img alt="" className="hotDiscussPic" src="img/discuss/fire2.png" />
        </div>
        <div className="discussRecommendBoxIn row">
          {displayHotDiscuss.slice(0, 4).map((v, i) => {
            return (
              <div key={v.id} className="col drBox">
                <div className="drInBox">
                  <Link to={`discuss/reply/${v.id}`} className="hotDiscussLink">
                    <div className="drImgBox">
                      {discussContent
                        .filter((dc) => {
                          return dc.discuss_id === v.id;
                        })[0]
                        ?.content.indexOf("<img src=") === -1 ? (
                        <div className="unpicBoxHot">
                          <img src={`img/discuss/unpic.png`} alt="" />
                        </div>
                      ) : (
                        <ReactQuill
                          className="picDiscussContentQuill hotpicDiscussContentQuill"
                          value={
                            discussContent.filter((dc) => {
                              return dc.discuss_id === v.id;
                            })[0]?.content || ""
                          }
                          readOnly={true}
                          theme={"bubble"}
                        />
                      )}
                    </div>
                    <div className="drTextBox">
                      <div className="discussHotTitle">
                        <span className="discussHotTitle">{v.title}</span>
                      </div>
                      <p className="mt-1 text-secondary">
                        <span className={`hotType ${TYPE_COLOR[v.type]}`}>
                          {v.type}
                        </span>{" "}
                        {v.cot - 1}
                        篇回覆
                      </p>
                    </div>
                  </Link>
                </div>
              </div>
            );
          })}
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

export default Discuss;
