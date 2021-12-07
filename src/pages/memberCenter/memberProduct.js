import React, { useState, useEffect } from "react";
/* 沿用memberCenter.css */
import Sidebar from "../../components/memberSidebar/index";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faSearch, faTimes } from "@fortawesome//free-solid-svg-icons";
import MemProductItem from "../../components/memProductItem/memProductItem";
import axios from "axios";
import { API_URL } from "../../configs/config";
import { useParams } from "react-router-dom";
import List from "../../components/pages/listPage";
import Loading from "../../components/loading/loading";

function MemberProduct(props) {
  const history = useParams().account;
  const [inputValue, setInputValue] = useState("");
  // 儲存產品資料
  const [order, setOrder] = useState([]);
  // 分頁儲存 - 目前第幾頁
  const [page, setPage] = useState(1);
  // 分頁儲存 - 總共頁數
  const [totalPages, setTotalPages] = useState(0);
  // 分頁儲存 - 每頁幾筆
  const [productPerPage, setProductPerPage] = useState(3);
  // Loading
  const [isLoading, setIsLoading] = useState(true);
  // api order資料
  const [product, setProduct] = useState([]);

  // 撈取產品資料
  useEffect((e) => {
    async function product() {
      let product = await axios
        .get(`${API_URL}/cart/`, {
          withCredentials: true,
        })
        .then((res) => {
          setProduct(res.data);
        });
    }
    product();
  }, []);
  useEffect((e) => {
    async function order() {
      let ProductOrder = await axios.get(
        `${API_URL}/member/productOrder/${history}`,
        { withCredentials: true }
      );
      setTimeout(() => {
        setIsLoading(false);
      }, 2000);
      setOrder(ProductOrder.data);
      setTotalPages(Math.ceil(ProductOrder.data.length / productPerPage));
      window.scrollTo(0, 0);
    }
    order();
  }, []);

  useEffect(
    (e) => {
      setTotalPages(Math.ceil(order.length / productPerPage));
    },
    [order.length, productPerPage]
  );

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
          <p className="h2 mt-5 bold">桌遊購買</p>

          <div className="d-flex align-items-end justify-content-start titleLine ms-3">
            <div className="align-items-center me-5">
              <label className="bold ms-3">每頁顯示</label>
              <select
                name="select"
                id=""
                className="proSelsect"
                onChange={(e) => {
                  setProductPerPage(e.target.value);
                }}
              >
                <option value="3">3</option>
                <option value="5">5</option>
                <option value="10">10</option>
              </select>
              <label className="bold">筆</label>
            </div>
            {/* 搜尋欄 */}
            <form action="" className="d-flex position-relative mt-3 ms-4">
              <input
                type="text"
                id="input"
                placeholder="商品名稱、單價、日期( XXXX-XX-XX )"
                className="form-control proInput"
                onChange={(e) => {
                  setInputValue(e.target.value);
                }}
              />
              {inputValue ? (
                <button
                  type="reset"
                  className="proButton"
                  // value=""
                  onClick={(e) => {
                    setInputValue("");
                    document.getElementById("input").value = "";
                  }}
                >
                  <FontAwesomeIcon icon={faTimes} />
                </button>
              ) : (
                <button type="button" className="proButton">
                  <FontAwesomeIcon icon={faSearch} />
                </button>
              )}
            </form>
          </div>
          {isLoading ? (
            <Loading />
          ) : (
            <>
              {/* map資料 */}
              {inputValue ? (
                <div className="d-flex flex-column justify-content-start align-items-center">
                  {order
                    .filter((v) => {
                      if (inputValue === "" || undefined) {
                        return v;
                      } else if (
                        v.product_name.includes(inputValue) ||
                        v.product_price.includes(inputValue) ||
                        v.created_time.includes(inputValue)
                      ) {
                        return v;
                      }
                    })
                    .map((v, i) => {
                      return (
                        <MemProductItem
                          product={product}
                          key={i}
                          detail={order[i]}
                        />
                      );
                    })}
                </div>
              ) : (
                <div className="d-flex flex-column justify-content-start align-items-center">
                  {selectedPage.map((v, i) => {
                    return (
                      <MemProductItem
                        product={product}
                        key={i}
                        detail={selectedPage[i]}
                      />
                    );
                  })}
                  <List
                    totalPages={totalPages}
                    page={page}
                    setPage={setPage}
                    productPerPage={productPerPage}
                  />
                </div>
              )}
            </>
          )}
        </div>
      </div>
    </div>
  );
}

export default MemberProduct;
