import {React,useState} from 'react'
import PropTypes from 'prop-types'
import "../../css/contest.css";
import "normalize.css";
import "bootstrap/dist/css/bootstrap.min.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faSearch } from '@fortawesome/free-solid-svg-icons' // <-- import faSearch
import {Container, Row,Col,Form,FormControl,Button} from "react-bootstrap";
import ContestCard from '../../components/contest/ContestCard';

// 假資料製作
const contestItems = [
  {
  id: 1,
  date:'2021-12-25(六)',
  title:'《寶可夢王者挑戰賽》',
  innertext:'大家期待已久的寶可夢卡牌對戰賽終於來啦!趕快手刀衝刺來報名吧!',
  limit: 2,
  category:'卡牌',
  img:'img/contest/con01.jpg',
  imgTag:'img/index/card-tag.png',
  },
  {
  id: 2,
  date:'2021-12-10(五)',
  title:'《辣個蟑螂又來啦!》',
  innertext:'非常耐玩的德國蟑螂要在遊戲職人舉辦比賽了，來挑戰看看吧!',
  limit: 0,
  category:'卡牌',
  img:'img/contest/con02.jpg',
  imgTag:"img/index/card-tag.png",
  },
  {
  id: 3,
  date:'2021-11-28(日)',
  title:'《要...一起跳舞嗎?》',
  innertext:'犯人在跳舞，你抓得到嗎?一款鬥心機的卡牌遊戲，來參加看看嗎?',
  limit: 5,
  category:'卡牌',
  img:'img/contest/con03.jpg',
  imgTag:'img/index/card-tag.png',
  },
  {
    id: 4,
    date:'2021-11-15(一)',
    title:'《波多黎各，渡假溜~》',
    innertext:'有玩過波多璃各嗎?高手們快來報名參加吧!',
    limit: 5,
    category:'策略',
    img:'img/contest/con04.jpg',
    imgTag:'img/index/trag-tag.png',
    },
    {
      id:5,
      date:'2021-10-31(日)',
      title:'《愜意午後的農家樂!》',
      innertext:'嚮往農村生活嗎?快揪三五好友一同來比賽，渡過一個愉快的下午吧~',
      limit: 5,
      category:'策略',
      img:'img/contest/con05.jpg',
      imgTag:'img/index/trag-tag.png',
      },
    {
      id: 6,
      date:'2021-10-25(一)',
      title:'《大富翁全家同樂會》',
      innertext:'歡迎來參加活動',
      limit: 5,
      category:'家庭',
      img:'img/contest/con06.jpg',
      imgTag:'img/index/family-tag.png',
    },
]
 
// 使用迴圈將json檔寫入contestRun的常數中做為一個陣列
const contestRun = (c)=>{
  const state= []  // 做一個空陣列
  for (let i = 0; i < c.length; i++) {
    state.push({...c[i]})
  }
  return state
}

function Index(props) {
  const [contest, setContest] = useState(
    contestRun(contestItems)
  )
  const [searchitem,setSearchitem]=useState("")
    return (
      <>
        {/* 活動資訊 */}
        <h2 className="text-center">活動資訊</h2>
        <div className="titleLineBox">
            <img alt="" className="titleLine" src="img/index/line.png" />
        </div>

      <div className="searchBar row">
        <div className="d-flex">
        <Form className="p-1">
        <FormControl
            type="search"
            placeholder="找活動"
            className="me-2 formControl"
            aria-label="Search"
            onChange={(e) => {
              setSearchitem(e.target.value)
            }}
          />
        <Button variant="link" className="searchIcon">
            <div>
              <FontAwesomeIcon icon={faSearch} />
            </div>
          </Button>
        </Form>
        
            <p className="fs-3 fontColor">分類:</p>
            <form action="" className="d-inline">
                <input type="checkbox" className="" value="" id="card" />
                <label For="card" className="fs-3 fontColor">卡牌</label>
                <input type="checkbox" className="" value="" id="family"/>
                <label for="family" className="fs-3 fontColor">家庭</label>
                <input type="checkbox" className="" value="" id="stategy"/>
                <label for="stategy" className="fs-3 fontColor"> 策略</label>
                <label className="fs-3 fontColor">
                    <span className="deleButton">&#10005; 清除結果</span>
                </label>
            </form> 
        </div>
    </div>
        
    <div>
    
    {/* <BarChart/> */}
    <img src="../img/contest/conBg01.png" alt="" className="bagd" />
       {/* 活動資訊卡片 */}
     <Container >
        <Row>
        {contest.map((v,i) => {         
          const searchResults =() =>{
            return(
            <ContestCard
            key={i}
            date={v.date}
            title={v.title}
            innertext={v.innertext}
            limit={v.limit}
            category={v.category}
            img={v.img}
            imgTag={v.imgTag}
          />
          );
        };


         if(searchitem === "") {
           return searchResults();
         }else if(
           v.title.includes(searchitem) ||
           v.innertext.includes(searchitem) ||
           v.category.includes(searchitem)
         ){
           return searchResults();
         }

        })}
          
          
          
           
        </Row>
</Container>
</div>
    
    
        </>
    )
}


export default Index

