import React from "react";
const InstantQADialogBox = ({ message, handleSelectItem }) => {
  const renderItems = (itemsToBeRender) => {
    const result = [];
    for (let item of itemsToBeRender) {
      if (item.type === "text") {
        result.push(
          <span class="commissioner_answer_text">{item.payload}</span>
        );
      } else if (item.type === "list") {
        result.push(
          <div class="question_frame">
            {/* 問題清單分隔 */}
            {/* 問題清單 */}
            <div class="shopping_problem">
              <p>{item.title}</p>
              <ul>
                {item.options.map((option, index) => (
                  <li onClick={handleSelectItem}>{option}</li>
                ))}
              </ul>
            </div>
            {/* 問題清單外框結尾 */}
          </div>
        );
      }
    }
    return result;
  };
  const formatDateString = (timeStamp) => {
    let date = new Date(timeStamp);
    var hours = date.getHours();
    // Minutes part from the timestamp
    var minutes = "0" + date.getMinutes();
    // Seconds part from the timestamp
    var seconds = "0" + date.getSeconds();
    return hours + ":" + minutes.substr(-2) + ":" + seconds.substr(-2);
  };
  return (
    <div class="dialog_box">
      {/* 專員對話框 */}

      {/* 對話時間 */}
      <div
        className={
          message.isCustomer ? "customer_dialog" : "commissioner_dialog"
        }
      >
        <img
          src={
            message.isCustomer
              ? "/img/customer_service/customer_avatar.png"
              : "/img/customer_service/Commissioner_avatar.png"
          }
          class={
            message.isCustomer
              ? "customer_avatar"
              : "commissioner_avatar"
          }
          alt=""
        />
        <div>

          <div
            class={
              message.isCustomer ? "customer_answer" : "commissioner_answer"
            }
          >
            {renderItems(message.items)}
          </div>
          <span
            class={
              message.isCustomer
                ? "customer_conversation_time"
                : "conversation_time"
            }
          >
            {message.sender} {formatDateString(message.dateTime)}
          </span>
        </div>
      </div>
    </div>
  );
};
export default InstantQADialogBox;
