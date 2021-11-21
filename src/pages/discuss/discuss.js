import "bootstrap/dist/css/bootstrap.min.css";
import "../../css/discuss.css";
import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faSearch } from "@fortawesome//free-solid-svg-icons";
import { useState, useEffect } from "react";
import axios from "axios";
import moment from "moment";
import { Link } from "react-router-dom";

const gameType = [
  { id: 2, name: "家庭", type: "family" },
  { id: 3, name: "策略", type: "trag" },
  { id: 4, name: "卡牌", type: "card" },
];

const Discuss = (props) => {
  const [discuss, setDiscuss] = useState([]);
  const [displayDiscuss, setDisplayDiscuss] = useState([]);
  const [discussType, setDiscussType] = useState("all");
  const [searchDiscuss, setSearchDiscuss] = useState({
    keyword: "",
  });

  // 處理輸入欄位變動
  function handleSearchChange(e) {
    let newSearchDiscuss = { ...searchDiscuss };
    newSearchDiscuss[e.target.name] = e.target.value;
    setSearchDiscuss(newSearchDiscuss);
  }

  // 提交搜尋申請
  async function handleSearchSubmit(e) {
    e.preventDefault();
    try {
      let resSearch = await axios.post(
        `http://localhost:3001/api/discuss/searchDiscuss`,
        searchDiscuss
      );
      // console.log(resNewDiscuss.data);
      setDiscuss(resSearch.data);
      setDisplayDiscuss(resSearch.data);
      setDiscussType("all");
      // window.location.reload();
    } catch (e) {
      console.log("handleSearchSubmit", e);
    }
  }

  // 初始渲染
  useEffect(async () => {
    let res = await axios.get(`http://localhost:3001/api/discuss/`);
    setDiscuss(res.data);
    setDisplayDiscuss(res.data);
  }, []);

  const TYPE_COLOR = {
    家庭: "discussTagFamily",
    策略: "discussTagTrag",
    卡牌: "discussTagCard",
  };
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
          首頁{`>>`}討論區
        </a>
      </div>

      {/* 搜尋列 */}
      <form onSubmit={handleSearchSubmit}>
        <div className="disSearchBox text-center">
          <a
            className="searchCancel"
            onClick={() => {
              window.location.reload();
            }}
            href="#/"
          >
            x
          </a>
          <select className="form-select disSearchSelect">
            <option>找標題</option>
            <option>找內容</option>
            <option>找作者</option>
          </select>
          <input
            placeholder="輸入關鍵字..."
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
                setDiscussType("all");
              }}
            >
              全部
            </Link>
          </li>
          {gameType.map((v, i) => {
            return (
              <li className="">
                <Link
                  key={v.id}
                  to="#/"
                  className={`d-inline-block mx-5 recommendType text-decoration-none text-center ${
                    discussType === v.type ? "recommendTypeActive" : ""
                  }`}
                  onClick={async () => {
                    let handleDiscussFilter = discuss.filter((dv) => {
                      return dv.type === v.name;
                    });
                    setDisplayDiscuss(handleDiscussFilter);
                    setDiscussType(v.type);
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
                  {displayDiscuss.map((v, i) => {
                    return (
                      <tr key={v.id}>
                        <th scope="row" className="">
                          <div className={TYPE_COLOR[v.type]}>{v.type}</div>
                        </th>
                        <td>
                          <Link to={`discuss/reply/${v.id}`}>{v.title}</Link>
                        </td>
                        <td>{v.i_user_id}</td>
                        <td>{v.cot}</td>
                        <td className="timeTd">
                          {moment(v.created_at.toString()).format(
                            "YYYY-MM-DD HH:mm:ss"
                          )}
                          <span className="text-secondary ms-3">
                            by {v.user_id}
                          </span>
                        </td>
                      </tr>
                    );
                  })}
                </tbody>
              </table>
            </div>
            <Link className="r_discussButton text-center" to="/newdiscuss">
              開新話題
            </Link>
          </div>
          <div></div>
        </div>
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
          <div className="col d-flex drBox">
            <div className="drImgBox">
              <img
                className="drImg"
                alt=""
                src="img/discuss/discussRecommend1.png"
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
                src="img/discuss/discussRecommend1.png"
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
      <a href="https://www.freepik.com/photos/mockup">
        Mockup photo created by master1305 - www.freepik.com
      </a>
      {/* 尾巴 */}
    </div>
  );
};

export default Discuss;
