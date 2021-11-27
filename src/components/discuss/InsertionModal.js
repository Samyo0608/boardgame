import React, { useState, useEffect } from "react";
import classes from "./InsertionModal.module.css";
import { v4 as uuidv4 } from "uuid";

const ImageSystem = (props) => {
  const [imageUrl, setImageUrl] = useState("");
  const [imageType, setImageType] = useState("");
  const [uploadFile, setUploadFile] = useState();
  const [showUploadBtn, setShowUploadBtn] = useState(false);
  const [isImageUploading, setIsImageUploading] = useState(false);

  const uploadImageCallBack = async (file) => {
    return new Promise(async (resolve, reject) => {
      const uploadState = await new Promise((resolve1, reject1) => {
        const xhr = new XMLHttpRequest();
        xhr.open("POST", "https://api.imgur.com/3/image");
        xhr.setRequestHeader("Authorization", "Client-ID ead94498c7294cc");
        const data = new FormData();
        data.append("image", file);
        // console.log(data);
        xhr.send(data);
        xhr.addEventListener("load", () => {
          const response = JSON.parse(xhr.responseText);
          resolve1(response);
        });
        xhr.addEventListener("error", () => {
          const error = JSON.parse(xhr.responseText);
          reject1(error);
        });
      });

      if (uploadState) {
        resolve({
          success: true,
          url: uploadState.data.link,
        });
      }
    });
  };

  // 圖像轉base64格式
  const toBase64 = (file) =>
    new Promise((resolve, reject) => {
      const reader = new FileReader();
      reader.readAsDataURL(file);
      reader.onload = () => resolve(reader.result);
      reader.onerror = (error) => reject(error);
    });

  // 預覽圖像
  const selectedImage = async (e) => {
    let file = e.target.files[0];
    if (file !== null) {
      const base64 = await toBase64(file);
      setUploadFile(file);
      setImageUrl(base64);
    }
  };

  return (
    <div className={classes.ImageSystem}>
      <button
        className={classes.CloseBtn}
        onClick={() => props.setIsShowModal(false)}
      >
        x
      </button>
      <h4>插入圖片</h4>
      <h5>限定 .jpg 及 .png 圖片格式</h5>
      <img alt="" src={imageUrl} className={classes.DisplayImage} />
      <div>
        <label className={classes.Label}>Enter url</label>
        <input
          type="text"
          className={classes.ImageUploader}
          onChange={(e) => {
            setImageUrl(e.target.value);
            setImageType("url");
            setShowUploadBtn(true);
          }}
        />
      </div>
      <hr />
      <h5>Upload Image</h5>
      <div>
        <input
          type="file"
          accept="image/*"
          className={classes.ImageUploader}
          onChange={(e) => {
            setImageType("upload");
            selectedImage(e);
            setShowUploadBtn(true);
          }}
        />
      </div>

      {showUploadBtn ? (
        <button
          type="button"
          className={classes.UploadBtn}
          onClick={async () => {
            setIsImageUploading(true);
            if (imageType === "url") {
              setIsImageUploading(false);
              props.insertImage(imageUrl);
              props.setIsShowModal(false);
            } else if (imageType === "upload") {
              const uploadState = await uploadImageCallBack(uploadFile);
              if (uploadState.success) {
                setIsImageUploading(false);
                props.insertImage(uploadState.url);
                props.setIsShowModal(false);
              }
            }
          }}
        >
          {isImageUploading ? "Uploading..." : "Upload"}
        </button>
      ) : (
        ""
      )}
    </div>
  );
};
export default ImageSystem;
