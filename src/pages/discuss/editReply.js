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

import ReactQuill, { Quill } from "react-quill";
import EditorToolbar, {
  modules,
  formats,
  QuillToolbar,
} from "../../components/discuss/QuillToolbar";
import "react-quill/dist/quill.snow.css";
import Modal from "../../components/discuss/InsertionModal";
import "../../components/discuss/styles.css";
import ImageResize from "quill-image-resize-module-react";
import { faImage } from "@fortawesome/free-regular-svg-icons";
Quill.register("modules/imageResize", ImageResize);
modules.imageResize = {
  parchment: Quill.import("parchment"),
  modules: ["Resize", "DisplaySize"],
};

const EditReply = (props) => {
  let quillRef = null;
  const [content, setContent] = useState("");
  const [isShowModal, setIsShowModal] = useState(false);
  const insertImage = (data) => {
    let quill = quillRef.getEditor();
    const range = quill.getSelection(true);
    let position = range ? range.index : 0;
    quill.insertEmbed(position, "image", data);
  };

  const handleEditorChange = (value) => {
    setContent(value);
    let newAddDiscuss = { ...addDiscuss };
    newAddDiscuss.content = value;
  };

  // 上面是Quill的

  const [editReplyId, seteditReplyId] = useState([
    props.location.discuss_content_id,
  ]);
  const [replyContent, setReplyContent] = useState({
    content: "",
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
  const [stateLastId, setStateLastId] = useState([]);
  // 登入狀態
  const [sessionMember, setSessionMember] = useState({
    id: "",
    email: "",
    account: "",
    point: "",
  });

  //  撈文章內容資料
  useEffect(async () => {
    window.scrollTo(0, 0);
    let res = await axios.post(
      `${API_URL}/discuss/editReplyContent`,
      editReplyId
    );
    setReplyContent(res.data);
    // setContent(res[0]?.data.content);
  }, []);

  const isFirstRun = useRef(true);
  useEffect(() => {
    if (isFirstRun.current) {
      isFirstRun.current = false;
      return;
    }
    setContent(replyContent[0]?.content);
  }, [replyContent]);

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

  // 提交修改回覆申請
  async function handleEditReply(e) {
    try {
      if (!sessionMember.id) {
        alert("請先登入");
        window.location.href = `/login`;
      } else {
        const editReplyData = {
          id: props.location.discuss_content_id,
          content: content,
        };
        let resEditReply = await axios.post(
          `${API_URL}/discuss/doEditReply`,
          editReplyData,
          {
            withCredentials: true,
          }
        );
        Swal.fire({
          icon: "success",
          title: "修改成功",
          text: "已修改您的回覆",
        }).then((res) => {
          window.location.href = `http://localhost:3000/discuss/reply/${props.location.discuss_id}`;
        });
      }
    } catch (e) {
      console.log("handleEditReply", e);
    }
  }

  return (
    <div className="overflow-hidden">
      {/* banner */}
      <div className="discussBannerBox">
        <img
          className="discussBannerImg"
          src="../img/discuss/banner.png"
          alt=""
        />
        <div className="bannerContent text-end">
          <p className="fs-2">遊戲職人</p>
          <p className="fs-5">討論區</p>
        </div>
      </div>

      {/* 麵包屑 */}
      <div className="discussBread text-end">
        <a className="discussBreadContent" href="#/">
          首頁{`>>`}討論區{`>>`}編輯文章內容
        </a>
      </div>
      {/* form */}
      <div className="newDiscussBoxOut">
        <div className="newdiscussFormBox position-relative">
          <>
            <div className="position-relative">
              <button
                type="button"
                className="quillDiscussContentBtn"
                onClick={() => setIsShowModal(true)}
              >
                <FontAwesomeIcon
                  className="quillDiscussContentImg"
                  icon={faImage}
                />
              </button>
              {isShowModal && (
                <Modal
                  setIsShowModal={setIsShowModal}
                  insertImage={insertImage}
                />
              )}
              <QuillToolbar />
              <ReactQuill
                className="quillEditor"
                ref={(el) => {
                  quillRef = el;
                }}
                value={content || ""}
                onChange={handleEditorChange}
                theme="snow"
                modules={modules}
                formats={formats}
              />
            </div>
          </>
          <button
            type="button"
            onClick={handleEditReply}
            className="newdiscussSubmitButton text-center"
          >
            送出
          </button>
          <button
            type="button"
            onClick={() => {
              window.location.href = `http://localhost:3000/discuss/reply/${props.location.discuss_id}`;
            }}
            className="newdiscussCancelButton text-center"
          >
            取消
          </button>
        </div>
      </div>
      {/* 討論區規定標題 */}

      <div className="position-relative r_discussTitle">
        <h2 className="text-center">討論區規定</h2>
        <div className="titleLineBox">
          <img alt="" className="titleLine" src="../img/index/line.png" />
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
            <img className="ruleImg" alt="" src="../img/discuss/rule.png" />
          </div>
        </div>
      </div>
      {/* 尾巴 */}
    </div>
  );
};

export default EditReply;
