import React from "react";
const InstantQADialogBox = ({ message }) => {
  console.log("message", message);

  const renderItems = (itemsToBeRender) => {
    console.log("itemsToBeRender", itemsToBeRender);
    const result = [];
    for (let item of itemsToBeRender) {
      if (item.type === "text") {
        result.push(
          <span class="commissioner_answer_text">{item.payload}</span>
        );
      } else if (item.type === "list") {
        result.push(
          <div class="question_frame">
            {/* 問題清單 */}
            <p>{item.title}</p>
            <div class="shopping_problem">
              <ul>
                {item.options.map((option) => (
                  <li>{option}</li>
                ))}
              </ul>
            </div>
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
      <img
        src="/img/customer_service/Commissioner_avatar.png"
        class="Commissioner_avatar"
        alt=""
      />
      {/* 專員對話框 */}
      <span class="commissioner_dialog">
        {/* 對話時間 */}
        <div>
          <div class="conversation_time">
            遊戲職人客服 {formatDateString(message.dateTime)}
          </div>
          {renderItems(message.items)}
        </div>
      </span>
    </div>
  );
};
export default InstantQADialogBox;
