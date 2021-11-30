import React, { useState, useEffect, useRef } from "react";
import ReactQuill, { Quill } from "react-quill";
import EditorToolbar, { modules, formats, QuillToolbar } from "./QuillToolbar";
import "react-quill/dist/quill.snow.css";
import Modal from "./InsertionModal";
import axios from "axios";
import { API_URL } from "../../configs/config";
import "./styles.css";
import ImageResize from "quill-image-resize-module-react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faImage } from "@fortawesome/free-regular-svg-icons";
Quill.register("modules/imageResize", ImageResize);
modules.imageResize = {
  parchment: Quill.import("parchment"),
  modules: ["Resize", "DisplaySize"],
};

// Image.className = "custom-class-to-image";
// Image.referrerPolicy = "no-referrer";
// var Image = Quill.import("formats/image");
// Quill.register(Image, true);

// const Quill = ReactQuill.Quill;
let quillRef = null;

const ReplyQuill = (props) => {
  const { addDiscuss, replyContent, editReplyId } = props;
  // const quill = null;
  const [getReplyContent, setGetReplyContent] = useState();
  const [alreadyStatus, setAlreadyStatus] = useState(false);
  const [content, setContent] = useState(replyContent);
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
    props.setAddDiscuss(newAddDiscuss);
    props.setQuillContent(value);
  };

  // 撈文章內容資料
  useEffect(async () => {
    console.log(Number(editReplyId));
    let res = await axios.post(
      `${API_URL}/discuss/editReplyContent`,
      Number(editReplyId)
    );
    setContent(res.data);
  }, []);

  // const isFirstRun = useRef(true);
  // useEffect(() => {
  //   if (isFirstRun.current) {
  //     isFirstRun.current = false;
  //     return;
  //   }
  //   setContent(getReplyContent);
  // }, [getReplyContent]);

  return (
    <>
      <div className="position-relative">
        <button
          type="button"
          className="quillDiscussContentBtn"
          onClick={() => setIsShowModal(true)}
        >
          <FontAwesomeIcon className="quillDiscussContentImg" icon={faImage} />
        </button>
        {isShowModal && (
          <Modal setIsShowModal={setIsShowModal} insertImage={insertImage} />
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
        <button
          onClick={() => {
            console.log(replyContent);
            setAlreadyStatus(123);
          }}
        >
          set
        </button>
      </div>
    </>
  );
};

export default ReplyQuill;
