import React, { useState, useEffect } from "react";
import { useParams } from "react-router";
import Sidebar from "../../components/memberSidebar/index";
import MemPoint from "../../components/memPoint/memPoint";
import axios from "axios";
import { API_URL } from "../../configs/config";
import List from "../../components/pages/listPage";
import Loading from "../../components/loading/loading";

function MemberPoint(props) {
  // Loading
  const [isLoading, setIsLoading] = useState(true);
  // 訂單存入
  const [order, setOrder] = useState([]);
  // 網址上的account
  const account = useParams().account;
  // 點數總和
  const [point, setPoint] = useState(0);
  // 分頁儲存 - 目前第幾頁
  const [page, setPage] = useState(1);
  // 分頁儲存 - 總共頁數
  const [totalPages, setTotalPages] = useState(0);
  // 分頁儲存 - 每頁幾筆
  const productPerPage = 4;

  // 撈訂單資料
  useEffect(() => {
    async function order() {
      let order = await axios.get(`${API_URL}/member/productOrder/${account}`, {
        withCredentials: true,
      });
      setOrder(order.data);
      setTotalPages(Math.ceil(order.data.length / productPerPage));
      window.scrollTo(0, 0);
    }
    order();
  }, []);

  // 撈取會員點數
  useEffect(() => {
    async function member() {
      let member = await axios.get(`${API_URL}/cart/${account}`, {
        withCredentials: true,
      });
      setPoint(member.data[0].point);
    }
    member();
  }, []);

  // Loading計時
  useEffect(() => {
    setTimeout(() => {
      setIsLoading(false);
    }, 2000);
  }, [order]);

  // 分頁 - slice定義顯示數量用
  const startIndex = (page - 1) * productPerPage;
  // 選擇到每頁後顯示數量，用這個做map
  const selectedPage = order.slice(startIndex, startIndex + productPerPage);

  return (
    <div className="mt-5">
      <div className="d-flex">
        <div className="ms-4 me-4 sidebarRange">
          <Sidebar />
        </div>
        <div className="rightDetail d-flex flex-column justify-content-start align-items-center">
          <p className="h2 mt-5 bold">點數明細</p>

          {isLoading ? (
            <Loading />
          ) : (
            <>
              {/* 頂端點數總和 start */}
              <div className="object-pro d-flex justify-content-center mt-3 mb-5">
                <p className="h2 bold text-main me-2 pointLineHeight">
                  目前點數
                </p>
                <div className="d-flex justify-content-center align-items-center">
                  <div className="me-1 bold point point-mem h4">P</div>
                  <span className="h1 text-main me-5 bold">{point}</span>
                </div>
              </div>
              {/* 頂端點數總和 end */}
              {selectedPage.map((v, i) => {
                return (
                  <>
                    <MemPoint key={i} order={selectedPage[i]} />
                  </>
                );
              })}
              <List
                totalPages={totalPages}
                page={page}
                setPage={setPage}
                productPerPage={productPerPage}
              />
            </>
          )}
        </div>
      </div>
    </div>
  );
}

export default MemberPoint;
