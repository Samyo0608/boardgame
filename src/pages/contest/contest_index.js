import {React,useState,useEffect} from 'react'
import PropTypes from 'prop-types'
import "../../css/contest.css";
import "normalize.css";
import "bootstrap/dist/css/bootstrap.min.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faSearch } from '@fortawesome/free-solid-svg-icons' // <-- import faSearch
import {Container, Row,Col,Form,FormControl,Button} from "react-bootstrap";
import ContestCard from '../../components/contest/ContestCard';
import axios from "axios";
import { API_URL } from '../../configs/config';
 
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
    contestRun(contestRun)
  )

  const [searchitem,setSearchitem]=useState("")

  // useEffect(() => {
  //   setContest(contestItems)
  // }, [])

  useEffect(async () =>{
    let res = await axios.get(`${API_URL}/contest/card`);
    setContest(res.data);
  },[])
  //console.log(contest)
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
                <input type="checkbox" className="checkboxCon" value="" id="card" />


                <label For="card" className="fs-3 fontColor">卡牌</label>
                <input type="checkbox" className="checkboxCon" value="" id="family" />
                <label for="family" className="fs-3 fontColor">家庭</label>
                <input type="checkbox" className="checkboxCon" value="" id="stategy"/>
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
            id={v.contest_id}
            date={v.contestDateStart}
            title={v.contest_title}
            innertext={v.contest_inner_text}
            limit={v.contest_limit}
            category={v.category}
            img={v.contestPic}
            no={v.contest_title_no}
          />
          );
        };

         if(searchitem === "") {
           return searchResults();
         }else if(
          contest.length > 0 ? v.contest_title.includes(searchitem) : searchitem ||
          contest.length > 0 ? v.contest_innertext.includes(searchitem) : searchitem ||
          contest.length > 0 ? v.category.includes(searchitem) : searchitem
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

