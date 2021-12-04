import React, { useState } from "react";
import { Modal } from "react-bootstrap";
import "./modal.css";
import axios from "axios";
import { API_URL } from "../../configs/config";
import Swal from "sweetalert2";

function Modaltype(props) {
  // sweetAlert2 toast
  const Toast = Swal.mixin({
    toast: true,
    position: "top-end",
    showConfirmButton: false,
    timer: 2000,
  });

  // email to 驗證
  const [isTest, setIsTest] = useState(false);

  // 驗證 to 新密碼
  const [isSame, setIsSame] = useState(false);
  // email -> state
  const [reEmail, setEmail] = useState({
    reEmail: "",
  });
  // 驗證碼(auth) -> state
  const [numSix, setNumSix] = useState({
    num: "",
  });
  // newPassword -> state
  const [password, setPassword] = useState({
    newPassword: "",
    reNewPassword: "",
  });
  // newPassword onChange事件
  const handleChange = (e) => {
    let newPass = { ...password };
    newPass[e.target.name] = e.target.value;
    setPassword(newPass);
  };

  // email to 驗證 submit事件
  const handleSubmit = (e) => {
    e.preventDefault();
    try {
      if (reEmail.reEmail !== "") {
        async function email() {
          await axios.post(`${API_URL}/auth/forget`, reEmail, {
            withCredentials: true,
          });
          Toast.fire({
            icon: "success",
            title: "驗證碼已寄至信箱，請至信箱收信",
          });
          setIsTest(true);
        }
        email();
      } else {
        Toast.fire({
          icon: "error",
          title: "尚未輸入信箱",
        });
      }
    } catch (e) {
      alert(e);
      console.log(e);
    }
  };

  // 驗證 to 建立新密碼 submit事件
  const TestSubmit = (e) => {
    e.preventDefault();
    try {
      if (numSix.num !== "") {
        async function num() {
          let auth = await axios.post(`${API_URL}/auth/num`, numSix, {
            withCredentials: true,
          });
          if (auth.data.status === "pass") {
            Toast.fire({
              icon: "success",
              title: "驗證通過",
            });
            setIsSame(true);
          } else {
            Toast.fire({
              icon: "error",
              title: "驗證失敗，請再檢查驗證碼是否正確",
            });
          }
        }
        num();
      } else {
        Toast.fire({
          icon: "error",
          title: "尚未輸入驗證碼",
        });
      }
    } catch (e) {
      alert(e);
      console.log(e);
    }
  };

  // 新密碼修改事件
  const passwordSubmit = (e) => {
    e.preventDefault();
    console.log(password);
    if (password.newPassword === password.reNewPassword) {
      try {
        async function pass() {
          let write = await axios.post(
            `${API_URL}/auth/newPassword`,
            password,
            {
              withCredentials: true,
            }
          );
          if (write.data.code === "408") {
            Swal.fire({
              icon: "success",
              title: "修改密碼成功",
              text: "請妥善保存您的密碼，回登入頁面",
            }).then((res) => {
              window.location.replace("/login");
              window.scrollTo(0, 0);
            });
          } else {
            Toast.fire({
              icon: "error",
              title: "無法修改密碼，請洽網站管理員",
            });
          }
        }
        pass();
      } catch (e) {
        Toast.fire({
          icon: "info",
          title: "無法修改密碼，請洽網站管理員",
        });
      }
    } else {
      Toast.fire({
        icon: "error",
        title: "尚未填寫",
      });
    }
  };

  return (
    <Modal
      {...props}
      size="lg"
      aria-labelledby="contained-modal-title-vcenter"
      backdrop="static"
      centered
    >
      <Modal.Header closeButton>
        <Modal.Title id="contained-modal-title-vcenter" className=" bold h2">
          忘記帳號密碼
        </Modal.Title>
      </Modal.Header>
      <Modal.Body className="modalEmail mt-4 d-flex bold">
        <div className="me-5">
          <span className="bold h6">請輸入您註冊的電子信箱</span>
          <form
            method="post"
            className="d-flex align-items-center"
            onSubmit={handleSubmit}
          >
            <input
              type="email"
              name="reEmail"
              className="inputEmail me-3"
              onChange={(e) => {
                setEmail({ reEmail: e.target.value });
              }}
            />
            <button className="btn btn-outline-primary">送出</button>
          </form>
          <div className={`mt-4 ${isTest ? "view" : "require"}`}>
            <span>在此輸入驗證碼</span>
            <form
              method="post"
              className="d-flex align-items-center"
              onSubmit={TestSubmit}
            >
              <input
                type="text"
                className="inputEmail me-3"
                onChange={(e) => {
                  setNumSix({ num: e.target.value });
                }}
              />
              <button className="btn btn-outline-info">驗證</button>
            </form>
          </div>
        </div>
        <div className={`${isSame ? "view" : "require"}`}>
          <form
            method="post"
            className="d-flex flex-column align-items-center"
            onSubmit={passwordSubmit}
          >
            <label>輸入新密碼</label>
            <input
              type="password"
              className="inputEmail mb-3"
              name="newPassword"
              onChange={handleChange}
            />
            <label>再次輸入新密碼</label>
            <input
              type="password"
              className="inputEmail mb-2"
              name="reNewPassword"
              onChange={handleChange}
            />
            <button className="btn btn-danger">確認修改</button>
          </form>
        </div>
      </Modal.Body>
      <Modal.Footer>
        <button className="btn btn-success " onClick={props.onHide}>
          關閉
        </button>
      </Modal.Footer>
    </Modal>
  );
}

export default Modaltype;
