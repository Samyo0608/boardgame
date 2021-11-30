import "./listPage.css";

function List(props) {
  const { totalPages } = props;
  const pages = [...Array(totalPages).keys()].map((num) => num + 1);

  return (
    <div className="mb-3">
      <button
        disabled={props.page === 1 ? true : false}
        className="paginationButton me-1"
        onClick={() => {
          if (props.page > 1) {
            props.setPage(props.page - 1);
          } else {
            props.setPage(1);
          }
        }}
      >
        上一頁
      </button>
      {pages.map((num) => {
        return (
          <button
            className={`paginationButton me-1 ${
              props.page === num ? "pagiActive" : ""
            }`}
            key={num}
            onClick={() => {
              props.setPage(num);
            }}
          >
            {num}
          </button>
        );
      })}
      <button
        disabled={props.page === Number(pages.pop()) ? true : false}
        className="paginationButton"
        onClick={() => {
          if (props.page < pages.length) {
            props.setPage(props.page + 1);
          } else {
            props.setPage(pages.length + 1);
          }
        }}
      >
        下一頁
      </button>
    </div>
  );
}

export default List;
