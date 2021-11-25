import React, { useState, useEffect } from "react";
import { Form, Row, Col, Button, Modal } from "react-bootstrap";
import "../../css/memSelf.css";
import Sidebar from "../../components/memberSidebar/index";
import axios from "axios";
import { useParams } from "react-router-dom";
import { API_URL, PHOTO_URL } from "../../configs/config";
import ReactCrop from "react-image-crop";
import "react-image-crop/dist/ReactCrop.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faUpload, faImages } from "@fortawesome//free-solid-svg-icons";
import Swal from "sweetalert2";

// 縣市鄉鎮api
const area_data = {
  基隆市: {
    仁愛區: "200",
    信義區: "201",
    中正區: "202",
    中山區: "203",
    安樂區: "204",
    暖暖區: "205",
    七堵區: "206",
  },
  台北市: {
    中正區: "100",
    大同區: "103",
    中山區: "104",
    松山區: "105",
    大安區: "106",
    萬華區: "108",
    信義區: "110",
    士林區: "111",
    北投區: "112",
    內湖區: "114",
    南港區: "115",
    文山區: "116",
  },
  新北市: {
    萬里區: "207",
    金山區: "208",
    板橋區: "220",
    汐止區: "221",
    深坑區: "222",
    石碇區: "223",
    瑞芳區: "224",
    平溪區: "226",
    雙溪區: "227",
    貢寮區: "228",
    新店區: "231",
    坪林區: "232",
    烏來區: "233",
    永和區: "234",
    中和區: "235",
    土城區: "236",
    三峽區: "237",
    樹林區: "238",
    鶯歌區: "239",
    三重區: "241",
    新莊區: "242",
    泰山區: "243",
    林口區: "244",
    蘆洲區: "247",
    五股區: "248",
    八里區: "249",
    淡水區: "251",
    三芝區: "252",
    石門區: "253",
  },
  宜蘭縣: {
    宜蘭市: "260",
    頭城鎮: "261",
    礁溪鄉: "262",
    壯圍鄉: "263",
    員山鄉: "264",
    羅東鎮: "265",
    三星鄉: "266",
    大同鄉: "267",
    五結鄉: "268",
    冬山鄉: "269",
    蘇澳鎮: "270",
    南澳鄉: "272",
    釣魚台列嶼: "290",
  },
  新竹市: { 東區: "300", 北區: "300", 香山區: "" },
  新竹縣: {
    竹北市: "302",
    湖口鄉: "303",
    新豐鄉: "304",
    新埔鎮: "305",
    關西鎮: "306",
    芎林鄉: "307",
    寶山鄉: "308",
    竹東鎮: "310",
    五峰鄉: "311",
    橫山鄉: "312",
    尖石鄉: "313",
    北埔鄉: "314",
    峨眉鄉: "315",
  },
  桃園市: {
    中壢區: "320",
    平鎮區: "324",
    龍潭區: "325",
    楊梅區: "326",
    新屋區: "327",
    觀音區: "328",
    桃園區: "330",
    龜山區: "333",
    八德區: "334",
    大溪區: "335",
    復興區: "336",
    大園區: "337",
    蘆竹區: "338",
  },
  苗栗縣: {
    竹南鎮: "350",
    頭份市: "351",
    三灣鄉: "352",
    南庄鄉: "353",
    獅潭鄉: "354",
    後龍鎮: "356",
    通霄鎮: "357",
    苑裡鎮: "358",
    苗栗市: "360",
    造橋鄉: "361",
    頭屋鄉: "362",
    公館鄉: "363",
    大湖鄉: "364",
    泰安鄉: "365",
    銅鑼鄉: "366",
    三義鄉: "367",
    西湖鄉: "368",
    卓蘭鎮: "369",
  },
  台中市: {
    中區: "400",
    東區: "401",
    南區: "402",
    西區: "403",
    北區: "404",
    北屯區: "406",
    西屯區: "407",
    南屯區: "408",
    太平區: "411",
    大里區: "412",
    霧峰區: "413",
    烏日區: "414",
    豐原區: "420",
    后里區: "421",
    石岡區: "422",
    東勢區: "423",
    和平區: "424",
    新社區: "426",
    潭子區: "427",
    大雅區: "428",
    神岡區: "429",
    大肚區: "432",
    沙鹿區: "433",
    龍井區: "434",
    梧棲區: "435",
    清水區: "436",
    大甲區: "437",
    外埔區: "438",
    大安區: "439",
  },
  彰化縣: {
    彰化市: "500",
    芬園鄉: "502",
    花壇鄉: "503",
    秀水鄉: "504",
    鹿港鎮: "505",
    福興鄉: "506",
    線西鄉: "507",
    和美鎮: "508",
    伸港鄉: "509",
    員林市: "510",
    社頭鄉: "511",
    永靖鄉: "512",
    埔心鄉: "513",
    溪湖鎮: "514",
    大村鄉: "515",
    埔鹽鄉: "516",
    田中鎮: "520",
    北斗鎮: "521",
    田尾鄉: "522",
    埤頭鄉: "523",
    溪州鄉: "524",
    竹塘鄉: "525",
    二林鎮: "526",
    大城鄉: "527",
    芳苑鄉: "528",
    二水鄉: "530",
  },
  南投縣: {
    南投市: "540",
    中寮鄉: "541",
    草屯鎮: "542",
    國姓鄉: "544",
    埔里鎮: "545",
    仁愛鄉: "546",
    名間鄉: "551",
    集集鎮: "552",
    水里鄉: "553",
    魚池鄉: "555",
    信義鄉: "556",
    竹山鎮: "557",
    鹿谷鄉: "558",
  },
  嘉義市: { 東區: "600", 西區: "600" },
  嘉義縣: {
    番路鄉: "602",
    梅山鄉: "603",
    竹崎鄉: "604",
    阿里山鄉: "605",
    中埔鄉: "606",
    大埔鄉: "607",
    水上鄉: "608",
    鹿草鄉: "611",
    太保市: "612",
    朴子市: "613",
    東石鄉: "614",
    六腳鄉: "615",
    新港鄉: "616",
    民雄鄉: "621",
    大林鎮: "622",
    溪口鄉: "623",
    義竹鄉: "624",
    布袋鎮: "625",
  },
  雲林縣: {
    斗南鎮: "630",
    大埤鄉: "631",
    虎尾鎮: "632",
    土庫鎮: "633",
    褒忠鄉: "634",
    東勢鄉: "635",
    台西鄉: "636",
    崙背鄉: "637",
    麥寮鄉: "638",
    斗六市: "640",
    林內鄉: "643",
    古坑鄉: "646",
    莿桐鄉: "647",
    西螺鎮: "648",
    二崙鄉: "649",
    北港鎮: "651",
    水林鄉: "652",
    口湖鄉: "653",
    四湖鄉: "654",
    元長鄉: "655",
  },
  台南市: {
    中西區: "700",
    東區: "701",
    南區: "702",
    北區: "704",
    安平區: "708",
    安南區: "709",
    永康區: "710",
    歸仁區: "711",
    新化區: "712",
    左鎮區: "713",
    玉井區: "714",
    楠西區: "715",
    南化區: "716",
    仁德區: "717",
    關廟區: "718",
    龍崎區: "719",
    官田區: "720",
    麻豆區: "721",
    佳里區: "722",
    西港區: "723",
    七股區: "724",
    將軍區: "725",
    學甲區: "726",
    北門區: "727",
    新營區: "730",
    後壁區: "731",
    白河區: "732",
    東山區: "733",
    六甲區: "734",
    下營區: "735",
    柳營區: "736",
    鹽水區: "737",
    善化區: "741",
    大內區: "742",
    山上區: "743",
    新市區: "744",
    安定區: "745",
  },
  高雄市: {
    新興區: "800",
    前金區: "801",
    苓雅區: "802",
    鹽埕區: "803",
    鼓山區: "804",
    旗津區: "805",
    前鎮區: "806",
    三民區: "807",
    楠梓區: "811",
    小港區: "812",
    左營區: "813",
    仁武區: "814",
    大社區: "815",
    東沙群島: "817",
    南沙群島: "819",
    岡山區: "820",
    路竹區: "821",
    阿蓮區: "822",
    田寮區: "823",
    燕巢區: "824",
    橋頭區: "825",
    梓官區: "826",
    彌陀區: "827",
    永安區: "828",
    湖內區: "829",
    鳳山區: "830",
    大寮區: "831",
    林園區: "832",
    鳥松區: "833",
    大樹區: "840",
    旗山區: "842",
    美濃區: "843",
    六龜區: "844",
    內門區: "845",
    杉林區: "846",
    甲仙區: "847",
    桃源區: "848",
    那瑪夏區: "849",
    茂林區: "851",
    茄萣區: "852",
  },
  屏東縣: {
    屏東市: "900",
    三地門鄉: "901",
    霧台鄉: "902",
    瑪家鄉: "903",
    九如鄉: "904",
    里港鄉: "905",
    高樹鄉: "906",
    鹽埔鄉: "907",
    長治鄉: "908",
    麟洛鄉: "909",
    竹田鄉: "911",
    內埔鄉: "912",
    萬丹鄉: "913",
    潮州鎮: "920",
    泰武鄉: "921",
    來義鄉: "922",
    萬巒鄉: "923",
    崁頂鄉: "924",
    新埤鄉: "925",
    南州鄉: "926",
    林邊鄉: "927",
    東港鎮: "928",
    琉球鄉: "929",
    佳冬鄉: "931",
    新園鄉: "932",
    枋寮鄉: "940",
    枋山鄉: "941",
    春日鄉: "942",
    獅子鄉: "943",
    車城鄉: "944",
    牡丹鄉: "945",
    恆春鎮: "946",
    滿州鄉: "947",
  },
  台東縣: {
    台東市: "950",
    綠島鄉: "951",
    蘭嶼鄉: "952",
    延平鄉: "953",
    卑南鄉: "954",
    鹿野鄉: "955",
    關山鎮: "956",
    海端鄉: "957",
    池上鄉: "958",
    東河鄉: "959",
    成功鎮: "961",
    長濱鄉: "962",
    太麻里鄉: "963",
    金峰鄉: "964",
    大武鄉: "965",
    達仁鄉: "966",
  },
  花蓮縣: {
    花蓮市: "970",
    新城鄉: "971",
    秀林鄉: "972",
    吉安鄉: "973",
    壽豐鄉: "974",
    鳳林鎮: "975",
    光復鄉: "976",
    豐濱鄉: "977",
    瑞穗鄉: "978",
    萬榮鄉: "979",
    玉里鎮: "981",
    卓溪鄉: "982",
    富里鄉: "983",
  },
  金門縣: {
    金沙鎮: "890",
    金湖鎮: "891",
    金寧鄉: "892",
    金城鎮: "893",
    烈嶼鄉: "894",
    烏坵鄉: "896",
  },
  連江縣: { 南竿鄉: "209", 北竿鄉: "210", 莒光鄉: "211", 東引鄉: "212" },
  澎湖縣: {
    馬公市: "880",
    西嶼鄉: "881",
    望安鄉: "882",
    七美鄉: "883",
    白沙鄉: "884",
    湖西鄉: "885",
  },
};

// 整理api -> counties、town
const countries = Object.getOwnPropertyNames(area_data);
const townships = countries.map((v, i, array) =>
  Object.getOwnPropertyNames(area_data[array[i]])
);

function MemSelf(props) {
  // 更換頭像 start
  const [show, setShow] = useState(false);
  const [file, setFile] = useState(null);
  const [image, setImage] = useState(null);
  const [crop, setCrop] = useState({
    unit: "%",
    width: 50,
    height: 50,
    x: 25,
    y: 25,
  });
  const [result, setResult] = useState(null);
  const [preview, setPreview] = useState(null);
  // 更換頭像 end

  const userAccount = useParams();

  // 地址串接
  const [countryName, setCountryName] = useState("");
  const [town, setTown] = useState("");
  const [otherAddress, setOtherAddress] = useState("");

  // 生日串接
  const [year, setYear] = useState("");
  const [month, setMonth] = useState("");
  const [day, setDay] = useState("");

  // 地址option
  const [country, setCountry] = useState(-1);
  const [township, setTownship] = useState(-1);

  // 串接結果
  const address = countryName.concat(",", town, ",", otherAddress);
  const birth = year.concat("/", month, "/", day);

  //user資料
  const [user, setUser] = useState({
    account: "",
    address: "",
    birth: "",
    email: "",
    gender: "",
    id: 0,
    name: "",
    phone: "",
    photo: "",
    point: 0,
  });

  // 存入照片資料(帳號、Blob圖片檔案)
  const [dataFile, setDataFile] = useState({
    account: userAccount.account,
    photo: null,
  });

  useEffect(
    (e) => {
      let newUser = { ...user };
      newUser.birth = birth;
      setUser(newUser);
    },
    [birth]
  );

  useEffect(
    (e) => {
      let newUser = { ...user };
      newUser.address = address;
      setUser(newUser);
    },
    [address]
  );

  // 進入畫面時載入資料
  useEffect((e) => {
    async function userData() {
      try {
        let userData = await axios.get(
          `${API_URL}/member/${userAccount.account}`,
          {
            withCredentials: true,
          }
        );
        setUser(userData.data[0]);
        const countryNumber = countries.indexOf(
          userData.data[0].address.split(",")[0]
        );
        setCountry(countryNumber);
        const townNumber = townships[countryNumber].indexOf(
          userData.data[0].address.split(",")[1]
        );
        setTownship(townNumber);
      } catch (e) {
        console.log("獲取資料失敗");
      }
    }
    userData();
  }, []);

  // 更新圖片時載入資料
  useEffect(() => {
    async function userData() {
      try {
        let userData = await axios.get(
          `${API_URL}/member/${userAccount.account}`,
          {
            withCredentials: true,
          }
        );
        setUser(userData.data[0]);
      } catch (e) {
        console.log("獲取資料失敗");
      }
    }
    userData();
  }, [show]);

  async function handleSubmit(e) {
    e.preventDefault();
    try {
      await axios.post(`${API_URL}/member/memSelf/${user.account}`, user, {
        withCredentials: true,
      });
      Swal.fire({
        icon: "success",
        title: "Good Job!",
        text: "個人資料更新成功",
      }).then((res) => {
        if (res.isConfirmed) {
          window.location.reload();
        }
      });
    } catch (e) {
      console.error("登入錯誤", e);
    }
  }

  // 圖片上傳 function start
  const fileChange = (e) => {
    setFile(URL.createObjectURL(e.target.files[0]));
  };

  const handleClose = (e) => {
    setShow(false);
  };
  // crop轉成canvas
  function getCroppedImg() {
    const canvas = document.createElement("canvas");
    const scaleX = image.naturalWidth / image.width;
    const scaleY = image.naturalHeight / image.height;
    canvas.width = crop.width;
    canvas.height = crop.height;
    const ctx = canvas.getContext("2d");

    // New lines to be added
    const pixelRatio = window.devicePixelRatio;
    canvas.width = crop.width * pixelRatio;
    canvas.height = crop.height * pixelRatio;
    ctx.setTransform(pixelRatio, 0, 0, pixelRatio, 0, 0);
    ctx.imageSmoothingQuality = "high";

    ctx.drawImage(
      image,
      crop.x * scaleX,
      crop.y * scaleY,
      crop.width * scaleX,
      crop.height * scaleY,
      0,
      0,
      crop.width,
      crop.height
    );
    //轉成png
    const base64Image = canvas.toDataURL("image/jpg");
    setPreview(base64Image);
    return new Promise((resolve, reject) => {
      canvas.toBlob(
        (blob) => {
          blob.name = Date.now();
          resolve(blob);
        },
        "image/jpeg",
        1
      );
    });
  }
  // sweetAlert2 toast
  const Toast = Swal.mixin({
    toast: true,
    position: "top-end",
    showConfirmButton: false,
    timer: 3000,
  });

  // 預覽圖片
  async function test() {
    if (file) {
      const croppedImg = await getCroppedImg();
      setResult(croppedImg);
      let newData = { ...dataFile };
      newData.photo = croppedImg;
      setDataFile(newData);
    } else {
      Toast.fire({
        icon: "error",
        title: "請先上傳圖片 !",
      });
    }
  }

  // (按鈕)上傳圖片
  async function fileUpdate(e) {
    if (preview !== null) {
      e.preventDefault();
      try {
        let formData = new FormData();
        formData.append("account", dataFile.account);
        formData.append("photo", dataFile.photo);
        await axios.post(
          `${API_URL}/member/memSelf/photo/${user.account}`,
          formData,
          {
            headers: {
              "Content-Type": "multipart/form-data",
            },
          },
          {
            withCredentials: true,
          }
        );
        setShow(false);
        Toast.fire({
          icon: "success",
          title: "照片上傳成功 !",
        });
        // for (var pair of formData.entries()) {
        //   console.log(pair[0] + ", " + pair[1]);
        // }
      } catch (e) {
        console.log(e);
      }
    } else {
      Toast.fire({
        icon: "error",
        title: "請先檢視剪裁後的圖片 !",
      });
    }
  }
  // 圖片上傳 function end

  const handleChange = (e) => {
    let newUser = { ...user };
    newUser[e.target.name] = e.target.value;
    setUser(newUser);
  };

  return (
    <div className="mt-5">
      <div className="d-flex">
        <div className="ms-4 me-4 sidebarRange">
          <Sidebar />
        </div>
        <div className=" rightDetail d-flex flex-column justify-content-start align-items-center">
          <p className="h2 bold titleMargin mt-5">基本資料</p>
          <div className="mb-5 bold d-flex justify-content-between align-items-center changeImg">
            <p>個人頭像</p>
            {user.photo ? (
              <img
                alt="個人頭像"
                src={`${PHOTO_URL}/public/uploads/${user.photo}`}
              />
            ) : (
              <div clssName="changeImg">
                <span>頭像</span>
                <FontAwesomeIcon icon={faImages} className="me-2" />
              </div>
            )}

            <button
              onClick={(e) => {
                setShow(true);
              }}
            >
              更換頭像
            </button>
          </div>

          {/* 更換頭像，彈跳視窗 start*/}
          <Modal show={show} onHide={handleClose} centered size="xl">
            <Modal.Header closeButton>
              <Modal.Title>更換頭像</Modal.Title>
            </Modal.Header>
            <Modal.Body className="d-flex justify-content-around align-items-center modalBody">
              {file ? (
                <ReactCrop
                  className="reactCrop"
                  src={file}
                  onImageLoaded={setImage}
                  crop={crop}
                  onChange={setCrop}
                  circularCrop="false"
                  ruleOfThirds="true"
                />
              ) : (
                <div className="text-center">圖片剪裁區</div>
              )}
              {result ? (
                <img src={preview} alt="cropImage" className="previewCrop" />
              ) : (
                <div className="text-center me-5">圖片預覽區</div>
              )}
            </Modal.Body>
            <Modal.Footer className="d-flex justify-content-center">
              <form method="post" className="d-flex">
                <label className="me-3 labelInput">
                  <input
                    type="file"
                    accept="image/*"
                    className="d-none"
                    onChange={fileChange}
                  />
                  <FontAwesomeIcon icon={faUpload} className="me-2" />
                  <span>載入照片</span>
                </label>
                <input type="hidden" name="photo" />
                <div>
                  <Button
                    variant="danger"
                    className="me-3"
                    onClick={fileUpdate}
                  >
                    上傳
                  </Button>
                  <Button variant="success me-3" onClick={test}>
                    預覽(確認剪裁)
                  </Button>
                  <Button variant="secondary" onClick={handleClose}>
                    取消
                  </Button>
                </div>
              </form>
            </Modal.Footer>
          </Modal>
          {/* 更換頭像，彈跳視窗 end*/}
          <Form method="post" className="formSize bold" onSubmit={handleSubmit}>
            <Form.Group as={Row} className="mb-3" controlId="memId">
              <Form.Label column sm="2">
                會員帳號
              </Form.Label>
              <Col sm="10">
                <p className="mb-0 LHeignt">{user.account}</p>
              </Col>
            </Form.Group>

            <Form.Group as={Row} className="mb-3" controlId="memName">
              <Form.Label column sm="2">
                會員姓名
              </Form.Label>
              <Col sm="10">
                <Form.Control
                  type="text"
                  name="name"
                  placeholder="請填寫姓名"
                  defaultValue={user.name}
                  onChange={handleChange}
                />
              </Col>
            </Form.Group>
            <Form.Group
              as={Row}
              className="mb-3"
              controlId="formPlaintextEmail"
            >
              <Form.Label column sm="2">
                Email
              </Form.Label>
              <Col sm="10">
                <Form.Control
                  type="email"
                  name="email"
                  placeholder="請填寫email"
                  defaultValue={user.email}
                  onChange={handleChange}
                />
              </Col>
            </Form.Group>

            <Form.Group as={Row} className="mb-3" controlId="phone">
              <Form.Label column sm="2">
                手機號碼
              </Form.Label>
              <Col sm="10">
                <Form.Control
                  type="text"
                  name="phone"
                  placeholder="請填寫手機號碼"
                  defaultValue={user.phone}
                  onChange={handleChange}
                />
              </Col>
            </Form.Group>
            <div className="mb-3">
              <Form.Group
                name="gender"
                className="mb-3"
                controlId="gender"
                defaultValue={user.gender}
              >
                <Form.Label column sm="2">
                  性別
                </Form.Label>
                <Form.Check
                  inline
                  label="男"
                  name="gender"
                  type="radio"
                  value="male"
                  onChange={handleChange}
                  checked={user.gender === "male" ? true : false}
                />
                <Form.Check
                  inline
                  label="女"
                  name="gender"
                  type="radio"
                  value="female"
                  onChange={handleChange}
                  checked={user.gender === "female" ? true : false}
                />
              </Form.Group>
              <Form.Group name="birth">
                <Row className="mb-3">
                  <Form.Label column sm="2">
                    生日
                  </Form.Label>
                  <Form.Group
                    controlId="birth"
                    className="col-4 d-flex align-items-center"
                  >
                    <Form.Control
                      type="text"
                      name="year"
                      placeholder="西元年"
                      maxlength="4"
                      minlength="4"
                      className="me-2"
                      defaultValue={user.birth.split("/")[0]}
                      onChange={(e) => {
                        setYear(e.target.value);
                      }}
                    />
                    <Form.Label>年</Form.Label>
                  </Form.Group>

                  <Form.Group
                    controlId="month"
                    className="col-3 d-flex align-items-center"
                  >
                    <Form.Control
                      type="text"
                      name="month"
                      placeholder="月"
                      maxlength="2"
                      className="me-2"
                      defaultValue={user.birth.split("/")[1]}
                      onChange={(e) => {
                        setMonth(e.target.value);
                      }}
                    />
                    <Form.Label>月</Form.Label>
                  </Form.Group>

                  <Form.Group
                    controlId="day"
                    className="col-3 d-flex align-items-center"
                  >
                    <Form.Control
                      type="text"
                      name="day"
                      placeholder="日"
                      maxlength="2"
                      className="me-2"
                      defaultValue={user.birth.split("/")[2]}
                      onChange={(e) => {
                        setDay(e.target.value);
                      }}
                    />

                    <Form.Label>日</Form.Label>
                  </Form.Group>
                </Row>
              </Form.Group>
              <Form.Group>
                <Row className="mb-3">
                  <Form.Label column sm="2">
                    地址
                  </Form.Label>
                  <Form.Group
                    controlId="city"
                    className="col-2 d-flex align-items-center"
                  >
                    <Form.Select
                      value={country}
                      name="country"
                      onChange={(e) => {
                        // 將字串轉成數字
                        setCountry(+e.target.value);
                        // 重置township的值
                        setTownship(-1);
                        setCountryName(countries[e.target.value]);
                      }}
                    >
                      <option value="-1">請選擇</option>
                      {countries.map((value, index) => (
                        <option key={index} value={index}>
                          {value}
                        </option>
                      ))}
                    </Form.Select>
                  </Form.Group>

                  <Form.Group
                    controlId="district"
                    className="col-2 d-flex align-items-center"
                  >
                    <Form.Select
                      value={township}
                      name="town"
                      onChange={(e) => {
                        // 將字串轉成數字
                        setTownship(+e.target.value);
                        setTown(townships[country][e.target.value]);
                      }}
                    >
                      <option value="-1">選擇區域</option>
                      {country > -1 &&
                        townships[country].map((value, index) => (
                          <option key={index} value={index}>
                            {value}
                          </option>
                        ))}
                    </Form.Select>
                  </Form.Group>

                  <Form.Group
                    controlId="addressOther"
                    className="col-6 d-flex align-items-center"
                  >
                    <Form.Control
                      type="text"
                      placeholder="剩餘完整地址"
                      defaultValue={user.address.split(",")[2]}
                      onChange={(e) => {
                        setOtherAddress(e.target.value);
                      }}
                    />
                  </Form.Group>
                </Row>
              </Form.Group>
            </div>
            <div className="btnWidth mb-5">
              <Button variant="primary" type="submit" className="mt-5">
                確認
              </Button>
            </div>
          </Form>
        </div>
      </div>
    </div>
  );
}

export default MemSelf;
